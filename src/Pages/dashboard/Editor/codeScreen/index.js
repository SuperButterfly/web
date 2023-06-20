import UserDirectory from './UserDirectory';
import CodePanel from './CodePanel';

const CodeScreen = ({ closeCodePanel, code }) => {
    return (
        <>
            <UserDirectory/>
            <CodePanel closeCodePanel={closeCodePanel} code={code}/>
        </>
    )
}

export default CodeScreen;