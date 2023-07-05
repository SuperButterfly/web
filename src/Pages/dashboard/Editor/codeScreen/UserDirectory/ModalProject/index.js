import styles from './ModalProject.module.css';

const ModalProject = ({ closeModal, noInstance, handleAddInstance }) => {
  const handleContentClick = (event) => {
    if (event.target.classList.contains(styles.listItem)) {
      if (handleAddInstance) handleAddInstance();
    } else {
      event.stopPropagation();
    }
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Add new file</li>
          <li className={styles.listItem}>Add new folder</li>
          {noInstance ? (
            <li className={styles.listItem}>Add to instance</li>
          ) : (
            <li className={styles.listItem}>Copy to a new instance</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ModalProject;
