import styles from './ModalProject.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { postInstance } from '@/redux/actions/instances'

const ModalProject = ({ closeModal, noInstance, handleDelInstance }) => {
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
          <li className={styles.listItem}>Add new file</li>
          <li className={styles.listItem}>Add new folder</li>
          {noInstance ? (
            <li className={styles.listItem} onClick={handleAddInstance}>
              Add to instance
            </li>
          ) : (
            <li className={styles.listItem} onClick={handleAddInstance}>
              Copy to a new instance
            </li>
          )}
          <li className={styles.listItem} onClick={handleDelInstance}>
            Delete instance
          </li>
        </ul>
      </div>
    </>
  )
}

export default ModalProject
