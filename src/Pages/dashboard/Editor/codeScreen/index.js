import CodePanel from "./CodePanel";
import { useState } from 'react';

const CodeScreen = ({ code }) => {
  const [addTerminal, setAddTerminal] = useState(false);
  return (
    <>
      <CodePanel code={code} showTerminal={addTerminal} closeTerminal={() => setAddTerminal(!addTerminal)}/>
      <div className="right-code-bar" style={{fontSize: '12px', marginTop: '10px', cursor: 'pointer'}} onClick={() => setAddTerminal(!addTerminal)}>Open terminal</div>
    </>
  );
};

export default CodeScreen;
