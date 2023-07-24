import CodePanel from './CodePanel'
import styles from './CodeScreen.module.css'
import UserDirectory from './UserDirectory'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
<<<<<<< HEAD:src/Pages/dashboard/Editor/codeScreen/index.js
import { getInstance, deleteInstance } from '@/redux/actions/instances'
import SidebarIcons from '../sidebaricons/SidebarIcons'
=======
import generateDocuments from './MultiScreen/hooks/generateDocuments'
import { addFilesFromDirectoryToScreen, setFileOnScreen } from '@/redux/slices/projectSlices'
import { deleteInstance } from '@/redux/actions/instances'
import { setCurrentInstance } from '@/redux/slices/instancesSlices'
>>>>>>> a946d38cac55c1e2dcb74f656a34e58a8980ea93:apps/client/src/Pages/dashboard/Editor/codeScreen/index.js

const CodeScreen = ({ code, componentStyles }) => {
  const [addTerminal, setAddTerminal] = useState(false)
  const [idTemplate, setIdTemplate] = useState('')
  const { currentInstance } = useSelector(
    (state) => state.instances
  )
  const { projectSelected } = useSelector((state) => state.project)
  // const [hasInstance, setHasInstance] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (projectSelected){
      setIdTemplate(projectSelected.id)
      dispatch(setCurrentInstance())
    } 
    console.log(projectSelected)
  }, [])

  const handleDelInstance = () => {
    dispatch(deleteInstance(currentInstance.id))
  }

  const handleUpdateInstance = () => { }

  const addFilesToScreenWithDoubleClick = (element) => {
    if (!element) return
    const documents = generateDocuments(element) //provisional hook
    dispatch(setFileOnScreen({file: documents[0], index: 0}))
    dispatch(addFilesFromDirectoryToScreen(documents))
  }

  return (
    <div className={styles.container}>
<<<<<<< HEAD:src/Pages/dashboard/Editor/codeScreen/index.js
      <div className={styles.sideBar}>
        <SidebarIcons />
      </div>
      <UserDirectory handleDelInstance={() => handleDelInstance()} />
=======
      <div className={styles.sideBar}></div>
      <UserDirectory
        handleDelInstance={() => handleDelInstance()}
      />
      {/*
        toShowTerminal=   {() => setAddTerminal(true)}
        toCloseTerminal = {() => setAddTerminal(false)}
        addFilesToScreenWithDoubleClick = {(element) => addFilesToScreenWithDoubleClick(element)}
       */}
>>>>>>> a946d38cac55c1e2dcb74f656a34e58a8980ea93:apps/client/src/Pages/dashboard/Editor/codeScreen/index.js
      <CodePanel
        componentStyles={componentStyles}
        code={code}
        showTerminal={addTerminal}
        closeTerminal={() => setAddTerminal(!addTerminal)}
      />
      {/* <div className="right-code-bar" style={{fontSize: '12px', marginTop: '10px', cursor: 'pointer'}} onClick={() => setAddTerminal(!addTerminal)}>Open terminal</div>  */}
    </div>
  )
}

export default CodeScreen
