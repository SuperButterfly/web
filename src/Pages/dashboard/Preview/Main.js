import PaintAll from "../Editor/editorpanel/PaintAll";
import EditorNavbar from "./EditorNavbar";

const Main = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <EditorNavbar />
      <PaintAll />
    </div>
  )
}

export default Main;