/* eslint-disable */
import {
    syncedStore,
    getYjsDoc,
    observeDeep,
    getYjsValue
} from '@syncedstore/core'
import { WebsocketProvider } from 'y-websocket'
import {
    AbstractType,
    Doc,
    Snapshot,
    snapshot,
    createDocFromSnapshot,
    UndoManager,
    applyUpdate,
    encodeStateAsUpdate,
    encodeStateVector,
    mergeUpdates,
    obfuscateUpdate,
    diffUpdate
} from 'yjs'

type Order = 'ASC' | ' DESC' | 'NONE'
type Priority = 'Low' | 'Medium' | 'High'
type State = 'Unstarted' | 'In Progress' | 'Copmplete'
type CellValue = string | number | boolean | Priority | State
type CellType = 'text' | 'number' | 'checkbox' | 'priority' | 'state'

type Column = {
    orderBy: Order
    type: CellType
    visible: boolean
    title: string
}

type Row = {
    key: number
    height: number
}

type Cell = {
    value: CellValue
    type: CellType
}

type Record = Array<Cell>

type Metadata = {
    titles: string
    description: string
}
interface Table {
    data: Record[];
    columns: Column[];
    rows: Row[];
    metadata: Metadata;
}

interface User {
    userId: string;
    selectedRow: number;
    selectedColumn: number;
}

let dataStoreStructure = {
    table: {} as Table,
    users: [] as User[],
    metadata: {} as Metadata
};

const doc = new Doc()

export const globalStore = syncedStore(dataStoreStructure, doc)

globalStore.table.data = []
globalStore.table.columns = []
globalStore.table.rows = []
// globalStore.users = [{ userId: '', selectedRow: 1, selectedColumn: 1 }]
globalStore.table.metadata = { titles: '', description: '' }

// const doc = getYjsDoc(globalStore)

const getUndoManager = () => {
    const value = getYjsValue(globalStore.table)
    if (value !== undefined && value instanceof AbstractType) {
        return new UndoManager(value)
    }
}
export const undoManager = getUndoManager()

export const versionHistory = {
    getCurrent: (): Uint8Array => {
        const state = encodeStateAsUpdate(doc)
        // console.log("STATE: \n" + state)
        return state
    },
    resv3: (prevState: Uint8Array) => {
        revertUpdate(doc, prevState, () => "Map")
    },
    // resv2: (prevState) => {
    //     const tmpDoc = new Doc({ gc: false })
    //     applyUpdate(tmpDoc, prevState)
    //     tmpDoc.getMap("table")
    //     doc.gc = false
    //     doc.getMap("table").set("data", tmpDoc.getMap("table").get("data"))
    //     doc.getMap("table").set("columns", tmpDoc.getMap("table").get("columns"))
    //     tmpDoc.getMap("table").set("data", doc.getMap("table").get("data"))
    //     tmpDoc.getMap("table").set("columns", doc.getMap("table").get("columns"))
    //     const newState = encodeStateAsUpdate(tmpDoc)
    //     applyUpdate(doc, newState)
    //     doc.gc = true
    // }
}

export const getVersion = () => {
    return { snap: snapshot(doc), state: encodeStateAsUpdate(doc) }
}

export const mergeVersion = (version: { snap: Snapshot, state: Uint8Array }) => {
    // const currState = encodeStateAsUpdate(doc)
    // const mergedState = mergeUpdates([version, currState])
    // applyUpdate(doc, mergedState)
    const tmpDoc1 = new Doc({ gc: false });
    applyUpdate(tmpDoc1, version.state)
    const tmpDoc2 = createDocFromSnapshot(tmpDoc1, version.snap, doc);
    const diffForRevert = diffUpdate(encodeStateAsUpdate(tmpDoc2), encodeStateVector(doc));
    applyUpdate(doc, diffForRevert)
}

export const websocketProvider = new WebsocketProvider(
    'ws://localhost:1234',
    'team001',
    doc
)

const awareness = websocketProvider.awareness

export const lisen = () => {
    console.log(doc)
    doc.on('update', (update) => {
        console.log('UPDATED! :\n' + update)
    })

    awareness.setLocalStateField('user', {
        name: doc.clientID.toString(),
        client: awareness.clientID.toString(),
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        selectedRow: null,
        selectedColumn: null,
        selectedCell: null
    })

    awareness.on('change', changes => {
        console.log(Array.from(awareness.getStates().values()))
    })
}

export const disconnect = () => {
    console.log('desconectado')
    websocketProvider.disconnect()
}
export const connect = () => {
    console.log('conectado!')
    websocketProvider.connect()
}

export function revertUpdate(
    doc: Doc,
    snapshotUpdate: Uint8Array,
    getMetadata: (key: string) => 'Text' | 'Map' | 'Array'
) {
    const snapshotDoc = new Doc();
    applyUpdate(snapshotDoc, snapshotUpdate);

    const currentStateVector = encodeStateVector(doc);
    const snapshotStateVector = encodeStateVector(snapshotDoc);

    const changesSinceSnapshotUpdate = encodeStateAsUpdate(
        doc,
        snapshotStateVector
    );
    const undoManager = new UndoManager(
        [...snapshotDoc.share.keys()].map(key => {
            const type = getMetadata(key);
            if (type === 'Text') {
                return snapshotDoc.getText(key);
            } else if (type === 'Map') {
                return snapshotDoc.getMap(key);
            } else if (type === 'Array') {
                return snapshotDoc.getArray(key);
            }
            throw new Error('Unknown type');
        })
    );
    applyUpdate(snapshotDoc, changesSinceSnapshotUpdate);
    undoManager.undo();
    const revertChangesSinceSnapshotUpdate = encodeStateAsUpdate(
        snapshotDoc,
        currentStateVector
    );
    applyUpdate(doc, revertChangesSinceSnapshotUpdate);
}