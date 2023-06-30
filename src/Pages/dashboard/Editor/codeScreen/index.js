import CodePanel from "./CodePanel";
import InstanceBar from './InstanceBar';
import styles from './CodeScreen.module.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInstance } from '@/redux/actions/instances';

const CodeScreen = ({ code, componentStyles }) => {
  const [addTerminal, setAddTerminal] = useState(false);

  return (
    <div className={styles.container}>
      <CodePanel
        componentStyles={componentStyles}
        code={code}
        showTerminal={addTerminal}
        closeTerminal={() => setAddTerminal(!addTerminal)}
      />
      {/* <div className="right-code-bar" style={{fontSize: '12px', marginTop: '10px', cursor: 'pointer'}} onClick={() => setAddTerminal(!addTerminal)}>Open terminal</div> */}
      <InstanceBar/>
    </div>
  );
};

export default CodeScreen;
