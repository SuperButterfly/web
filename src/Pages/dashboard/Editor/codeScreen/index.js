import CodePanel from "./CodePanel";
import styles from './CodeScreen.module.css';
import UserDirectory from './UserDirectory'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInstance, deleteInstance, postInstance } from '@/redux/actions/instances';

const CodeScreen = ({ code, componentStyles }) => {
  const [addTerminal, setAddTerminal] = useState(false);
  const [idTemplate, setIdTemplate] = useState('');
  const { currentInstance } = useSelector(state => state.instances);
  const { projectSelected } = useSelector(state => state.project);
  const [hasInstance, setHasInstance] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (projectSelected) setIdTemplate(projectSelected.id);

  }, [projectSelected]);

  useEffect(() => {
    const instance = localStorage.getItem('currentInstance');
    if (instance && currentInstance?.TemplateId === id) setHasInstance(!hasInstance);
  }, []);

  // useEffect(() => {
  //   dispatch(getInstance(id));
  // }, []);


    const handleDelInstance = () => {
        dispatch(deleteInstance(currentInstance.id));
    }

    const handleUpdateInstance = () => {
      
    }

    const handleAddInstance = (e) => {
      console.log('clicked');
      e.preventDefault();
      const projectName = projectSelected.name;
      dispatch(postInstance(idTemplate, projectName));
    }
    

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}></div>
      <UserDirectory handlAddInstance={() => handleAddInstance()}/>
      <CodePanel
        componentStyles={componentStyles}
        code={code}
        showTerminal={addTerminal}
        closeTerminal={() => setAddTerminal(!addTerminal)}
      />
      {/* <div className="right-code-bar" style={{fontSize: '12px', marginTop: '10px', cursor: 'pointer'}} onClick={() => setAddTerminal(!addTerminal)}>Open terminal</div>  */}
    </div>
  );
};

export default CodeScreen;
