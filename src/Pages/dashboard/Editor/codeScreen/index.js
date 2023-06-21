import CodePanel from "./CodePanel";

const CodeScreen = ({ closeCodePanel, code }) => {
  return (
    <>
      <CodePanel closeCodePanel={closeCodePanel} code={code} />
    </>
  );
};

export default CodeScreen;
