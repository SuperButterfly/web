import { useDispatch } from 'react-redux'
import ContextMenu from '@/Components/Shared/ContextMenu'

const FolderTools = ({
  pos,
  close,
  componentSelected,
  pasteFromClipboard,
  copyComponent,
  duplicate,
  cutComponent,
  specialPaste,
  setShowFileTools
}) => {
  const dispatch = useDispatch()

  const handleCopyClick = () => {
    console.log('handleCopy', componentSelected)
    dispatch(copyComponent(componentSelected))
  }

  const handleCutClick = () => {
    console.log('handleCut', componentSelected)
    dispatch(cutComponent(componentSelected))
  }

  const handlePasteClick = () => {
    dispatch(pasteFromClipboard())
  }

  const handleDuplicateClick = () => {
    dispatch(duplicate(componentSelected))
  }

  const handleDeleteClick = () => {
    // handle delete click
  }

  const handleSpecialPaste = () => {
    dispatch(specialPaste(componentSelected))
  }

  const options = [
    { label: 'Open', handler: () => {} },
    {
      label: {
        main: 'Copy',
        secondary: 'ctrl + v'
      },
      handler: handleCopyClick
    },
    { label: 'Copy path', handler: handleSpecialPaste },
    { label: 'Cut', handler: handleCutClick },
    { label: 'Paste', handler: handlePasteClick },
    { label: 'Rename', handler: () => {} },
    { label: 'Delete', handler: handleDeleteClick }
  ]

  const onOptionClick = (handler) => {
    handler()
    setShowFileTools(false)
  }

  return (
      <ContextMenu options={options} onOptionClick={onOptionClick} position={pos} close={close}/>
  )
}

export default FolderTools
