import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './UserDirectory.css';
import FolderTools from './ToolsMenus/FolderTools';


const UserDirectory = () => {
  const { projectSelected } = useSelector(state => state.project);
  const { componentSelected } = useSelector((state) => state.component);
  const [isAssetsOpen, setAssetsOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [showFolderTools, setShowFolderTools] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext, setIdElementContext] = useState("");

  console.log(projectSelected);
  // Rotador del arrow
  const handleOpenFolder = (ev) => {
    const { id } = ev.target;

    id === 'assets' && setAssetsOpen(!isAssetsOpen);
    id === 'pages' && setPagesOpen(!isPagesOpen);
  };


  const handleHideMenu = (ev) => {
    setShowFolderTools(!showFolderTools);
    setPos({ top: 0, left: 0 });
    setIdElementContext(ev.target.id);
  };

  const handleContextMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setShowFolderTools(!showFolderTools);
    setIdElementContext(ev.target.id);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  //------------------copy ------------------///

  const copyComponent = (content) => {
    localStorage.setItem("copyComponent", content);
    console.log("copy", content);
  };
  //--------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedComponent = localStorage.getItem("copyComponent");
    const body = {
      component: pastedComponent,
      parentId: componentSelected.id,
    };
    console.log("paste", body);
  };
  //--------------------- Duplicate ------------------//
  const duplicate = (content) => {
    copyComponent(content);
    console.log(`este es el duplicate ${content}`);

    const pasteID = pasteFromClipboard();
    console.log(`este es el dupli paste ${pasteID}`);
  };
  //--------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log("cut", content);
    copyComponent(content);
  };

  //---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      console.log(`${componentSelected.id} keydown`);
      copyComponent(componentSelected);
    }

    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
      pasteFromClipboard();
    }

    if (event.ctrlKey && event.key === "x") {
      event.preventDefault();
      cutComponent(componentSelected);
    }

    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      copyComponent(componentSelected);
      pasteFromClipboard();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [componentSelected]);

return (
        <div className='project-container'
        >
          <span className='project-title'>{projectSelected && projectSelected.name && (projectSelected.name[0].toUpperCase() + projectSelected.name.slice(1))}</span>
          <div className='folders-title' id='assets'
              // onMouseLeave={handleHideMenu}
              onClick={handleOpenFolder}
              onContextMenu={handleContextMenu}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                isAssetsOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            <span>assets</span>
          </div>
          <div className='folders-title' id='pages'
              // onMouseLeave={handleHideMenu}
              onContextMenu={handleContextMenu}
              onClick={handleOpenFolder}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                isPagesOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            <span>pages</span>
          </div>
          {showFolderTools && <FolderTools pos={pos} />}
          {isPagesOpen && projectSelected.pages && (
            <ul className='folders-list'>
              {projectSelected.pages.map((page, idx) => (
                <li key={idx} className='folders-list-item'>
                  <span>{page.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
);
}

export default UserDirectory;
