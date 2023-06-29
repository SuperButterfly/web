import styles from './InstanceBar.module.css';
import { postInstance, getInstances, deleteInstance } from '@/redux/actions/instances';
import { useDispatch } from 'react-redux';

const InstanceBar = ({hasInstance}) => {

    const dispatch = useDispatch();

    const handlePostInstance = () => {
    dispatch(postInstance());
    }

    const handleAllInstances = () => {
        dispatch(getInstances());
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
                            <li><button onClick={handleAllInstances}>See instances</button></li>
                            <li><button onClick={handleDelInstances}>Delete instance</button></li>
                        </ul>
                    </div>
                : <button onClick={handlePostInstance}>Agregar a instancia</button>
            }
        </div>
    )
}

export default InstanceBar;