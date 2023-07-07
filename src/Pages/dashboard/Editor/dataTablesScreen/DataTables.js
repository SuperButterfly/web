import React, { useState } from "react";
import testData from "./testData";
import Main from "./Main/Main";
import "./App.css";
import "./App-dark.css";
import { DataProvider } from "../../../../store/SyncedProvider";
import { useSyncedStore } from "@syncedstore/react";
import { globalStore } from "../../../../store";
function DataTables() {
  const store = useSyncedStore(globalStore)
  const [darkMode, setDarkMode] = useState(false);
  // const file = {storedData:[], storedColumns:[]}
  const file = testData;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DataProvider value={store}>
      <Main lastState={file} darkMode={darkMode} />
    </DataProvider>    
  );
}

export default DataTables;