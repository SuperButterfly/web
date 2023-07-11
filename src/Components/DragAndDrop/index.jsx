import React, { useState } from 'react'
import DragComponent from './DragComponent'
import DropComponent from './DropComponent'

const DragAndDrop = () => {
  const dragData = [
    { file: 1, name: 'folder 1' },
    { file: 2, name: 'folder 2' },
    { file: 3, name: 'folder 3' }
  ]

  const renderData = dragData.map((e, i) => {
    return <DragComponent key={i} data={e}>file {e.name}</DragComponent>
  })

  const onHandleDrop = (data) => {
    console.log(data.name)
  }

  return (
    <div>
      <div>
        {renderData}
      </div>
      <div>
        <DropComponent onHandleDrop={onHandleDrop}>
          <h1>Component 1</h1>
        </DropComponent>
        <DropComponent onHandleDrop={onHandleDrop}>
          <h1>Component 2</h1>
        </DropComponent>
      </div>
    </div>
  )
}

export default DragAndDrop
