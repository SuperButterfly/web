import React, { createContext, useState } from 'react'

const ComponentContext = createContext()

const ComponentProvider = ({ children }) => {
  const [contextMenu1, setContextMenu1] = useState(false)
  const [contextMenu2, setContextMenu2] = useState(false)
  const openContextMenu1 = () => {
    setContextMenu1(true)
    setContextMenu2(false)
  }
  const openContextMenu2 = () => {
    setContextMenu2(true)
    setContextMenu1(false)
  }
  return (
    <ComponentContext.Provider
      value={{
        contextMenu1,
        contextMenu2,
        openContextMenu1,
        openContextMenu2,
        setContextMenu1,
        setContextMenu2
      }}
    >
      {children}
    </ComponentContext.Provider>
  )
}

export { ComponentContext, ComponentProvider }
