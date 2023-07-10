import React from 'react'

const Tab = ({ file, name, onEdit, onClose }) => {
  const onEditTab = () => {
    onEdit(file)
  }

  const onCloseTab = () => {
    onClose(file)
  }

  return (
    <div onClick={onEditTab}>
      {name}
      <div onClick={onCloseTab}>x</div>
    </div>
  )
}

export default Tab
