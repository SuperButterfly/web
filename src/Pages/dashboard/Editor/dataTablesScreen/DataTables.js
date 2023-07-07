import React, { useState } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "../../../../store/index";
import testData from "./testData";
import { SyncedContext } from "./SyncedContext";
import Main from "./Main/Main";
import "./App.css";
import "./App-dark.css";
function DataTables() {
  const state = useSyncedStore(store);
  const [darkMode, setDarkMode] = useState(false);
  // const file = {storedData:[], storedColumns:[]}
  const file = testData;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SyncedContext.Provider value={state}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/* <a
          // href="#"
          className="icon"
          width="16"
          height="16"
          data-tooltip="true"
          onClick={toggleDarkMode}
        >
          <svg
            // xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 17.58 17.58"
            fill={darkMode ? "white" : "black"}
          >
            <path d="M8.79,3.29v11a5.5,5.5,0,0,0,0-11Z" />
            <path d="M8.79,2A6.79,6.79,0,1,1,2,8.79,6.8,6.8,0,0,1,8.79,2m0-2a8.79,8.79,0,1,0,8.79,8.79A8.8,8.8,0,0,0,8.79,0Z" />
          </svg>
          {/* <span>
          {darkMode ? "Dark" : "Light"}
        </span> */}
        {/* </a>  */}
        <Main lastState={file} darkMode={darkMode} />
      </div>
    </SyncedContext.Provider>
  );
}

export default DataTables;
