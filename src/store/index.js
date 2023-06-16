import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

let storeStructure = {
    data: [],
    columns: [],
    visualization: {}
};

export const store = syncedStore(storeStructure);

const doc = getYjsDoc(store);
export const websocketProvider = new WebsocketProvider("ws://localhost:1234", 'team001', doc);

export const disconnect = () => websocketProvider.disconnect();
export const connect = () => websocketProvider.connect();

// Se requiere TypeScript para definir mejor la estructura de la store y evitar errores de codigo.