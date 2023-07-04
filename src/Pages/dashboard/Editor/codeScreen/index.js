import CodePanel from "./CodePanel";
import InstanceBar from './InstanceBar';
import InstanceForm from './InstanceForm';
import styles from './CodeScreen.module.css';
import UserDirectory from './UserDirectory'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInstance, deleteInstance } from '@/redux/actions/instances';

const CodeScreen = ({ code, componentStyles }) => {
  const [addTerminal, setAddTerminal] = useState(false);
  const [idTemplate, setIdTemplate] = useState('');
  const [toggleForm, setToggleForm] = useState(false);
  const { currentInstance } = useSelector(state => state.instances);
  const { projectSelected } = useSelector(state => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectSelected) setIdTemplate(projectSelected.id);
  }, [projectSelected]);

  const handleOpenModal = () => {
    setToggleForm(!toggleForm);

  }

    const handleDelInstance = () => {
        dispatch(deleteInstance(currentInstance.id));
    }

    const handleUpdateInstance = () => {
      
    }
    

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}></div>
      <UserDirectory />
      <CodePanel
        componentStyles={componentStyles}
        code={code}
        showTerminal={addTerminal}
        closeTerminal={() => setAddTerminal(!addTerminal)}
      />
      {/* <div className="right-code-bar" style={{fontSize: '12px', marginTop: '10px', cursor: 'pointer'}} onClick={() => setAddTerminal(!addTerminal)}>Open terminal</div>  */}
      <InstanceBar idTemplate={idTemplate}
                    openModal={() => handleOpenModal()}
                    handleDelInstance={() => handleDelInstance()}
                    handleUpdateInstance={() => handleUpdateInstance()}
                    />
       {toggleForm && 
                <InstanceForm defaultName={projectSelected.name}
                              idTemplate={idTemplate}
                              closeForm={() => setToggleForm(!toggleForm)}
                              />
        }
    </div>
  );
};

export default CodeScreen;
