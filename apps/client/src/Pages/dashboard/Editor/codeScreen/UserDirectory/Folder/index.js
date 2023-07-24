import { AiOutlineRight, AiFillFolder, AiFillFolderOpen } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'
import styles from './Folder.module.css'
import DragComponent from '@/Components/DragAndDrop/DragComponent'
import FolderTools from '../ToolsMenus/FolderTools'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComponent, updateProject } from '@/redux/actions/projects.js'

const Folder = ({
  handleFileMenu,
  folderName,
  project,
  pos,
  setPos,
  copyElement,
  pasteFromClipboard
}) => {
  const dispatch = useDispatch()
  const [showFolderTools, setShowFolderTools] = useState(false)

  const [folder, setFolder] = useState({
    name: '',
    isOpen: false,
    rename: false,
    file: {
      add: false,
      name: ''
    },
    newFolder: {
      add: false,
      name: ''
    }
  })

  // Rotador del arrow
  const handleOpenFolder = (ev) => {
    ev.stopPropagation()
    const { value } = ev.target
    console.log('clicked')

    setFolder({
      ...folder,
      name: value,
      isOpen: !folder.isOpen
      // rename: prevFolder.name === value ? prevFolder.rename : false
    })
    console.log(folder.isOpen)
  }

  const handleContextMenu = (ev) => {
    ev.preventDefault()
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    setShowFolderTools(!showFolderTools)

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX

    setPos({ top, left })
  }

  const handleNewPage = async (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      const { value } = e.target
      await dispatch(createComponent(project.id, value, true))
      setFolder({ ...folder, file: { add: !folder.file.add, name: value } })
    }
  }

  const renameFolder = (folderName) => {
    setFolder((prevFolder) => ({
      ...prevFolder,
      name: folderName,
      rename: true
    }))
    dispatch(updateProject(project.id))
  }

  return (
    <div>
      {folder.newFolder.add && (
        <input
          type="text"
          className={styles.newFolder}
          onKeyDown={(e) => handleNewPage(e)}
        />
      )}
      {folder.rename ? (
        <input
          value={folder.name}
          className={styles.newFolder}
          onBlur={() => setFolder({ ...folder, rename: false })}
          onChange={(e) => setFolder({ ...folder, name: e.target.value })}
        />
      ) : (
        <>
          <div
            className={styles.foldersTitle}
            value={folder.name}
            onClick={handleOpenFolder}
            onContextMenu={handleContextMenu}
          >
            <span className={styles.folderIcons}>
              <AiOutlineRight
                style={
                  folder.isOpen
                    ? { transform: 'rotate(90deg)' }
                    : { transform: 'rotate(0deg)' }
                }
                className={styles.codeArrow}
              />
              {folder.isOpen ? (
                <AiFillFolderOpen className={styles.folderIcon} />
              ) : (
                <AiFillFolder className={styles.folderIcon} />
              )}
            </span>
            <span>{folderName}</span>
          </div>
          {folder.isOpen && (
            <ul className={styles.foldersList}>
              {folder.file.add && (
                <input
                  type="text"
                  className={styles.newFolder}
                  onKeyDown={(e) => handleNewPage(e)}
                />
              )}
              {project[folderName].map((element, idx) => (
                <li
                  key={idx}
                  className={styles.foldersListItem}
                  onContextMenu={handleFileMenu}
                >
                  <DragComponent data={element}>
                    <div className={styles.fileWrapper}>
                      <DiReact className={styles.jsxIcon} />
                      <span>{element.name}</span>
                    </div>
                  </DragComponent>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {showFolderTools && (
        <FolderTools
          pos={pos}
          id={project.id}
          setAddNewPage={() =>
            setFolder({ ...folder, file: { add: !folder.file.add }, isOpen: !folder.isOpen })
          }
          setPagesOpen={() => setFolder({ ...folder, isOpen: !folder.isOpen })}
          copyElement={() => copyElement(project.pages)}
          pasteFromClipboard={pasteFromClipboard}
          renameFolder={(e) => renameFolder(e.target.value)}
          close={() => setShowFolderTools(!showFolderTools)}
          setShowFolderTools={() => setShowFolderTools(!showFolderTools)}
        />
      )}
    </div>
  )
}

export default Folder
