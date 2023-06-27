import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

let storeStructure = {
    todos: [],
    data: [],
    columns: [],
    visualization: {}
};

// Create your SyncedStore store
export const store = syncedStore(storeStructure);

const doc = getYjsDoc(store);
console.log(doc)
export const websocketProvider = new WebsocketProvider("ws://localhost:1234", 'team001', doc);

export const disconnect = () => websocketProvider.disconnect();
export const connect = () => websocketProvider.connect();