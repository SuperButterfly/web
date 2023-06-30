import styles from './InstanceBar.module.css';
import { postInstance, deleteInstance, getInstance } from '@/redux/actions/instances';
import { useDispatch } from 'react-redux';

const InstanceBar = ({hasInstance}) => {

    const dispatch = useDispatch();

    const handlePostInstance = () => {
    dispatch(postInstance());
    }

    const handleDelInstances = () => {
        const idInstance = 'a9e50711-9b73-4811-8532-e20c4af91b44';
        dispatch(deleteInstance(idInstance));
    }

    return (
        <div className={styles.container}>
            {
                hasInstance ? 
                    <div>
                        <ul className={styles.provisionalBtns}>
                            <li>
                                <button onClick={handleDelInstances}>Delete instance</button>
                            </li>
                            <li>
                                <button onClick={handleDelInstances}>Update instance</button>
                            </li>
                        </ul>
                    </div>
                : <button onClick={handlePostInstance}>Agregar a instancia</button>
            }
        </div>
    )
}

export default InstanceBar;