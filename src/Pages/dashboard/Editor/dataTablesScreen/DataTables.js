import React, { useState } from "react";
import testData from "./testData";
import Main from "./Main/Main";
import "./App.css";
import "./App-dark.css";
import { SyncedContext, SyncedProvider } from "../../../../store/SyncedProvider";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "../../../../store";
import Main2 from "./Main/Main2";
function DataTables() {
  // const state = useSyncedStore(store)
  const [darkMode, setDarkMode] = useState(false);
  // const file = {storedData:[], storedColumns:[]}
  const file = testData;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SyncedProvider>
      <Main lastState={file} darkMode={darkMode} />
    </SyncedProvider>    
  );
}

export default DataTables;