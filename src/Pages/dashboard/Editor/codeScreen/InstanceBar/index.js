import styles from './InstanceBar.module.css';
import { deleteInstance, getInstance } from '@/redux/actions/instances';

const InstanceBar = ({hasInstance, handleUpdateInstance,openModal, handleDelInstance}) => {


    return (
        <div className={styles.container}>
            {
                hasInstance ? 
                    <div>
                        <ul className={styles.provisionalBtns}>
                            <li>
                                <button onClick={handleDelInstance} className={styles.btn}>Delete instance</button>
                            </li>
                            <li>
                                <button onClick={handleUpdateInstance} className={styles.btn}>Update instance</button>
                            </li>
                        </ul>
                    </div>
                : <button onClick={openModal} className={styles.btn}>Agregar a instancia</button>
            }
        </div>
    )
}

export default InstanceBar;