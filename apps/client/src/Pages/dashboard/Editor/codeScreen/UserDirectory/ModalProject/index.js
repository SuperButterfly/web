import styles from './ModalProject.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { postInstance } from '@/redux/actions/instances'
import {
  AiOutlineFile,
  AiOutlineFolderAdd,
  AiOutlineCopy
} from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { BsTerminal } from 'react-icons/bs'

const ModalProject = ({
  closeModal,
  noInstance,
  handleDelInstance,
  showTerminal,
  closeTerminal
}) => {
  const [projectData, setProjectData] = useState({})

  const { projectSelected } = useSelector((state) => state.project)
  const dispatch = useDispatch()

  const handleAddInstance = () => {
    dispatch(postInstance(projectData))
  }

  useEffect(() => {
    if (projectSelected) {
      setProjectData(projectSelected)
    }
  }, [])

  return (
    <>
      <div className={styles.modal} onClick={closeModal}></div>
      <div className={styles.modalContent}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <AiOutlineFile className={styles.icon} />
            Add new file
          </li>
          <li className={styles.listItem}>
            <AiOutlineFolderAdd className={styles.icon} />
            Add new folder
          </li>
          {noInstance ? (
            <li className={styles.listItem} onClick={handleAddInstance}>
              Add to instance
            </li>
          ) : (
            <li className={styles.listItem} onClick={handleAddInstance}>
              <AiOutlineCopy className={styles.icon} />
              Copy to a new instance
            </li>
          )}
          <li className={styles.listItem} onClick={handleDelInstance}>
            <MdDeleteOutline className={styles.icon} />
            Delete instance
          </li>
          <li className={styles.listItem} onClick={showTerminal}>
            <BsTerminal className={styles.terminal} />
            Open terminal
          </li>
        </ul>
      </div>
    </>
  )
}

export default ModalProject
