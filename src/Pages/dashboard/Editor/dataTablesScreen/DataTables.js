import React, { useEffect, useState } from 'react'
import testData from './testData'
import Main from './Main/Main'
import './App.css'
import './App-dark.css'
import { DataProvider } from '../../../../store/SyncedProvider'
import { useSyncedStore } from '@syncedstore/react'
import { globalStore, lisen } from '../../../../store'
import { getYjsDoc, getYjsValue } from '@syncedstore/core'
function DataTables() {
  const store = useSyncedStore(globalStore)
  const [darkMode, setDarkMode] = useState(false)
  // const file = {storedData:[], storedColumns:[]}
  const file = testData

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <DataProvider value={store.table}>
      <Main lastState={file} darkMode={darkMode} />
    </DataProvider>
  )
}

export default DataTables
