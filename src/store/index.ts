import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

type Priority = "Low" | "Medium" | "High"
type State = "Unstarted" | "In Progress" | "Copmplete"
type CellValue = string | number | boolean | Priority | State
type CellType = "text" | "number" | "checkbox" | "priority" | "state"

type Cell = {
    value: CellValue;
    type: CellType;
}

type Row = Array<Cell>

// interface Table {
//     data: Array<Row>;
//     columns: any[];
//     [key: string]: any;
// }

let dataStoreStructure = {
    data: [] as Array<Row>,
    columns: [] as Array<any>
}

export const store = syncedStore(dataStoreStructure);

const doc = getYjsDoc(store);
export const websocketProvider = new WebsocketProvider("ws://localhost:1234", 'team001', doc);

export const disconnect = () => websocketProvider.disconnect();
export const connect = () => websocketProvider.connect();