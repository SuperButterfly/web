import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './UserDirectory.css';
import FolderTools from './ToolsMenus/FolderTools';


const UserDirectory = () => {
  const { projectSelected, target } = useSelector(state => state.project);
  const { componentSelected } = useSelector((state) => state.component);
  const [isFolderOpen, setFolderOpen] = useState(false);
  // const [showFolderTools, setShowFolderTools] = useState(false);
  const [selected, change] = useState("text");
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext, setIdElementContext] = useState("");
  const dispatch = useDispatch();

  
  // Rotador del arrow
  const handleOpenFolder = (ev) => {
    ev.preventDefault();
    const { id } = ev.target;
    // let change = !isMainSelected[id];
    // setIsMainSelected((prevIsMainSelected) => ({
    //   ...prevIsMainSelected,
    //   [id]: change,
    // }));
    setFolderOpen(!isFolderOpen);
  };

//   useEffect(() => {
//   const handleContextMenu = (event) => {
//     if (event.button === 2) {
//       const targetElement = event.target;

//       if (
//         targetElement.classList.contains('folders-title') &&
//         (targetElement.innerText === 'pages' || targetElement.innerText === 'assets')
//       ) {
//         setShowFolderTools(true);
//       } else {
//         setShowFolderTools(false);
//       }
//     }
//   };

//   window.addEventListener('contextmenu', handleContextMenu);

//   return () => {
//     window.removeEventListener('contextmenu', handleContextMenu);
//   };
// }, []);

  const handleHideMenu = (ev) => {
    setPos({ top: 0, left: 0 });
    setIdElementContext(ev.target.id);
    console.log(`${ev.target.id} este es el click`);
  };
  /*
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      
      console.log(target)
      console.log("onclick",target.onclick,!!target.onclick)
      console.log("Target",event.target)
      if (!target.onclick){
        dispatch(deleteComponentSelected())
      }    
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [dispatch]);
  */

  const handleContextMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    // setShowFolderTools(!showFolderTools);
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
          <span className='project-title'>{projectSelected && projectSelected.name && projectSelected.name.toUpperCase()}</span>
          <div className='folders-title'
              onClick={handleHideMenu}
              onContextMenu={handleContextMenu}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                isFolderOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            <span>assets</span>
          </div>
          <div className='folders-title'
              onClick={handleHideMenu}
              onContextMenu={handleContextMenu}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                isFolderOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            <span>pages</span>
          </div>
          <FolderTools pos={pos} />
          {projectSelected.pages ? (
            <ul>
              {projectSelected.pages.map((page, idx) => (
                <li key={idx}>
                  <span>{page.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            'Agrega una página'
          )}
        </div>
);
}

export default UserDirectory;
