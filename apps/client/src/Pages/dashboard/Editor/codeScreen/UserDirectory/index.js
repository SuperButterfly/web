import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import styles from './UserDirectory.module.css'
import FileTools from './ToolsMenus/FileTools'
import { FOLDERS, NON_FOLDERS } from '../dictionaries'
import { BsThreeDots } from 'react-icons/bs'
import Folder from './Folder'
import { getProject } from '@/redux/actions/projects.js'
import ModalProject from './ModalProject'
import useModal from '@/hooks/useModal'

const UserDirectory = ({ handleDelInstance }) => {
  const { projectSelected } = useSelector((state) => state.project)
  const { componentSelected } = useSelector((state) => state.component)
  const [showFileTools, setShowFileTools] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [isOpen, openModal, closeModal] = useModal()

  const dispatch = useDispatch()

  const addNewFolder = (e) => {
    const { value } = e.target
  }

  const handleFileMenu = (ev) => {
    ev.preventDefault()
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    setShowFileTools(!showFileTools)

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX

    setPos({ top, left })
  }

  // ------------------copy ------------------///

  const copyElement = (content) => {
    localStorage.setItem('folderCopied', content)
    console.log('copy', JSON.stringify(content))
  }

  // --------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedElement = localStorage.getItem('folderCopied')
    const body = {
      element: pastedElement
    }
    console.log('paste', body)
  }

  // --------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log('cut', content)
    copyElement(content)
  }

  // ---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault()
      copyElement(projectSelected.id)
    }

    if (event.ctrlKey && event.key === 'v') {
      event.preventDefault()
      pasteFromClipboard()
    }

    if (event.ctrlKey && event.key === 'x') {
      event.preventDefault()
      cutComponent(componentSelected)
    }

    if (event.ctrlKey && event.key === 'd') {
      event.preventDefault()
      copyElement(componentSelected)
      pasteFromClipboard()
    }
  }

  const projectArr = useMemo(
    () => Object.keys(projectSelected),
    [projectSelected]
  )

  const filteredFolders = projectArr.filter(
    (key) => Array.isArray(FOLDERS[key]) && !NON_FOLDERS[key]
  )

  useEffect(() => {
    dispatch(getProject(projectSelected?.id))
  }, [dispatch, projectSelected?.id])

  return (
    <div className={styles.container}>
      <header className={styles.directoryHeader}>
        <span className={styles.projectTitle}>
          {projectSelected && projectSelected?.name?.toUpperCase()}
        </span>
        <button className={styles.codePlusButton} onClick={openModal}>
          <BsThreeDots className={styles.codePlus} />
        </button>
        {isOpen && (
          <ModalProject
            closeModal={closeModal}
            handleDelInstance={handleDelInstance}
          />
        )}
      </header>

      <main>
        {filteredFolders.map((folderName, idx) => (
          <Folder
            key={idx}
            folderName={folderName}
            project={projectSelected}
            pos={pos}
            setPos={setPos}
            copyElement={copyElement}
            pasteFromClipboard={pasteFromClipboard}
          />
        ))}
        {showFileTools && (
          <FileTools
            pos={pos}
            id={projectSelected?.id}
            setShowFileTools={() => setShowFileTools(!showFileTools)}
            handleFileMenu={handleFileMenu}
          />
        )}
      </main>
    </div>
  )
}

export default UserDirectory
