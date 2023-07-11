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
  UndoManager,
  applyUpdate,
  encodeStateAsUpdate,
  encodeStateVector,
  mergeUpdates,
  obfuscateUpdate
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

type Cell = {
  value: CellValue
  type: CellType
}

type Row = Array<Cell>

type TableMetadata = {
  titles: string
  description: string
}
// interface Table {
//     data: Array<Row>;
//     columns: any[];
//     [key: string]: any;
// }

let dataStoreStructure = {
  data: [] as Array<Row>,
  columns: [] as Array<Column>,
  metadata: {} as TableMetadata
}

export const globalStore = syncedStore(dataStoreStructure)

const doc = getYjsDoc(globalStore)
const getUndoManager = () => {
  const value = getYjsValue(globalStore)
  if (value !== undefined && value instanceof AbstractType) {
    return new UndoManager(value)
  }
}

export const undoManager = getUndoManager()

export const lisen = () =>
  doc.on('update', (update) => {
    console.log('UPDATED! :\n' + update)
  })

export const getVersion = () => {
  return encodeStateAsUpdate(doc)
}

export const mergeVersion = (version: Uint8Array) => {
  const currState = encodeStateAsUpdate(doc)
  const mergedState = mergeUpdates([version, currState])
  applyUpdate(doc, mergedState)
}

export const websocketProvider = new WebsocketProvider(
  'ws://localhost:1234',
  'team001',
  doc
)

export const disconnect = () => {
  console.log('desconectado')
  websocketProvider.disconnect()
}
export const connect = () => {
  console.log('conectado!')
  websocketProvider.connect()
}
