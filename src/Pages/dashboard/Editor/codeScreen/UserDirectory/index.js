import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './UserDirectory.css';
import FolderTools from './ToolsMenus/FolderTools';
import { createComponent, getProject, updateProject } from '@/redux/actions/projects.js';


const UserDirectory = () => {
  const { projectSelected } = useSelector(state => state.project);
  const { componentSelected } = useSelector((state) => state.component);
  const [showFolderTools, setShowFolderTools] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [pastedElement, setPastedElement] = useState('')

  // Assets state
  const [assets, setAssets] = useState({
    isOpen: false,
    rename: false
  })

  // Pages state

  const [pages, setPages] = useState({
    isOpen: false,
    rename: false,
    add: false,
    name: ''
  })

  // const [folderNewName, setFolderNewName] = useState('');
  // const [folderToCopy, setFolderToCopy] = useState('');
  const [idElementContext, setIdElementContext] = useState('pages');
  const dispatch = useDispatch();

  // Rotador del arrow
  const handleOpenFolder = (ev) => {
    ev.preventDefault();
    console.log('clicked');
    const { value } = ev.target.dataset;
    console.log(value);

    value === 'assets' && setAssets({...assets, isOpen: !assets.isOpen});
    value === 'pages' && setPages({...pages, isOpen: !pages.isOpen});
  };


  const handleHideMenu = () => {
    setShowFolderTools(!showFolderTools);
    setPos({ top: 0, left: 0 });
  };

  const handleNewPage = async (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const { value } = e.target;
    await dispatch(createComponent(projectSelected.id, value, true));
    setPages({...pages, add: !pages.add, name: value});
  }
};

  const renameFolder = (e) => {
    dispatch(updateProject(projectSelected.id, { name: e.target.value }));
  }

  const handleContextMenu = (ev) => {
    console.log(ev.target.id);
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setShowFolderTools(!showFolderTools);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  //------------------copy ------------------///

  const copyElement = (content) => {
    localStorage.setItem("folderCopied", content);
    console.log("copy", JSON.stringify(content));
  };
  //--------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedElement = localStorage.getItem("folderCopied");
    const body = {
      element: pastedElement,
    };
    console.log("paste", body);
  };

  //--------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log("cut", content);
    copyElement(content);
  };

  //---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      copyElement(projectSelected.id);
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
      copyElement(componentSelected);
      pasteFromClipboard();
    }
  };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  // }, [componentSelected]);

  useEffect(() => {
    dispatch(getProject(projectSelected.id));
  }, [dispatch, projectSelected.id]);

return (
        <div className='project-container'
        >
          <span className='project-title'>{projectSelected && projectSelected.name && (projectSelected.name[0].toUpperCase() + projectSelected.name.slice(1))}</span>
          { assets.rename ?
            <input value={pages.add} className='new-page-folder'/>
          :
            <div className='folders-title' data-value='assets'
              // onMouseLeave={handleHideMenu}
              onClick={handleOpenFolder}
              onContextMenu={handleContextMenu}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                assets.isOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            assets
          </div>
          }
        <div> 
          <div className='folders-title' data-value='pages'
              // onMouseLeave={handleHideMenu}
              onContextMenu={handleContextMenu}
              onClick={handleOpenFolder}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="editor-arrow"
              style={
                pages.isOpen
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(-90deg)" }
              }
            >
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
            pages
          </div>
          {pages.isOpen && projectSelected.pages && (
            <ul className='folders-list'>
              {pages.add && <input type='text' className='new-page-folder' onKeyDown={(e) => handleNewPage(e)}/>}
              {projectSelected.pages.map((page, idx) => (
                <li key={idx} className='folders-list-item'>
                  <span>{page.name}</span>
                </li>
              ))}
            </ul>
          )}
          </div>
          {showFolderTools && <FolderTools 
                                  pos={pos}
                                  id={projectSelected?.id}
                                  setAddNewPage={() => setPages({...pages, add: !pages.add})}
                                  idElementContext={idElementContext}
                                  handleHideMenu={handleHideMenu}
                                  setPagesOpen={() => setPages({...pages, isOpen: !pages.isOpen})}
                                  copyElement={() => copyElement(projectSelected.pages)}
                                  pasteFromClipboard={pasteFromClipboard}
                                  renameFolder={renameFolder}
                                />}
        </div>
);
}

export default UserDirectory;
