import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './UserDirectory.module.css';
import FolderTools from './ToolsMenus/FolderTools';
import FileTools from './ToolsMenus/FileTools'
import { createComponent, getProject, updateProject } from '@/redux/actions/projects.js';
import { FOLDERS, NON_FOLDERS } from '../dictionaries'


const UserDirectory = () => {
  const { projectSelected } = useSelector((state) => state.project);
  const { componentSelected } = useSelector((state) => state.component);
  const [showFolderTools, setShowFolderTools] = useState(false);
  const [showFileTools, setShowFileTools] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext, setIdElementContext] = useState('pages');
  const [pastedElement, setPastedElement] = useState('');

  const dispatch = useDispatch();
  console.log(projectSelected);

  const projectArr = Object.keys(projectSelected);

  const [folder, setFolder] = useState({
    name: projectSelected.name,
    isOpen: false,
    rename: false,
    file: {
      add: false,
      name: ''
    },
    newFolder: {
      add: false,
      name: ''
    }
  });

  // Rotador del arrow
  const handleOpenFolder = (ev) => {
  ev.preventDefault();
  const { value } = ev.target.dataset;
  const folderName = value;

  setFolder((prevFolder) => ({
    ...prevFolder,
    name: folderName,
    isOpen: !prevFolder.isOpen,
    rename: prevFolder.name === folderName ? prevFolder.rename : false
  }));
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
      setFolder({ ...folder, file: { add: !folder.file.add, name: value } });
    }
  };

 const renameFolder = (folderName) => {
  setFolder((prevFolder) => ({
    ...prevFolder,
    name: folderName,
    rename: true
  }));
  dispatch(updateProject(projectSelected.id));
};

  const addNewFolder = (e) => {
    const { value } = e.target;

  }

  const handleContextMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setShowFolderTools(!showFolderTools);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  const handleFileMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setShowFileTools(!showFileTools);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  }

  //------------------copy ------------------///

  const copyElement = (content) => {
    localStorage.setItem('folderCopied', content);
    console.log('copy', JSON.stringify(content));
  };

  //--------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedElement = localStorage.getItem('folderCopied');
    const body = {
      element: pastedElement
    };
    console.log('paste', body);
  };

  //--------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log('cut', content);
    copyElement(content);
  };

  //---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault();
      copyElement(projectSelected.id);
    }

    if (event.ctrlKey && event.key === 'v') {
      event.preventDefault();
      pasteFromClipboard();
    }

    if (event.ctrlKey && event.key === 'x') {
      event.preventDefault();
      cutComponent(componentSelected);
    }

    if (event.ctrlKey && event.key === 'd') {
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
    <div className={styles.container}>
      <div className={styles.directoryHeader}>
        <span className={styles.projectTitle}>
          {projectSelected && projectSelected.name && projectSelected.name[0].toUpperCase() + projectSelected.name.slice(1)}
        </span>
        <button className={styles.codePlusButton} >
          <svg viewBox="0 0 24 24" className={styles.codePlus}>
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z" ></path>
          </svg>
        </button>
      </div>
      <div>
        {
          folder.newFolder.add && <input type='text'
                                    className={styles.newFolder}
                                    onKeyDown={(e) => handleNewPage(e)}
                                    />
        }
      {projectArr.map((key) => {
        if ((Array.isArray(FOLDERS[key]) || FOLDERS[key]) && !NON_FOLDERS[key]) {
          const folderName = key;
          const isOpen = folder.name === folderName && folder.isOpen;
          return folder.rename ? (
            <input
              value={folder.name}
              className={styles.newFolder}
              onBlur={() => setFolder({ ...folder, rename: false })}
              onChange={(e) => setFolder({ ...folder, name: e.target.value })}
            />
            ) : (
            <>
              <div
                className={styles.foldersTitle}
                data-value={folderName}
                onClick={handleOpenFolder}
                onContextMenu={handleContextMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.codeArrow}
                  style={
                    isOpen
                      ? { transform: "rotate(0deg)" }
                      : { transform: "rotate(-90deg)" }
                  }
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z" fill='#000'></path>
                </svg>
                {folderName}
              </div>
              {isOpen && projectSelected[key] && (
                <ul className={styles.foldersList}>
                  {folder.file.add && (
                    <input
                      type='text'
                      className={styles.newFolder}
                      onKeyDown={(e) => handleNewPage(e)}
                    />
                  )}
                  {projectSelected[key].map((element, idx) => (
                    <li key={idx} className={styles.foldersListItem} onContextMenu={handleFileMenu}>
                      <span>{element.name}</span>
                    </li>
                  ))}
                  {showFileTools && <FileTools pos={pos}
                                              id={projectSelected?.id}/>}
                </ul>
              )}
              {showFolderTools && (
                <FolderTools
                  pos={pos}
                  id={projectSelected?.id}
                  setAddNewPage={() => setFolder({ ...folder, file: {add: !folder.file.add} })}
                  idElementContext={idElementContext}
                  handleHideMenu={handleHideMenu}
                  setPagesOpen={() => setFolder({ ...folder, isOpen: !folder.isOpen })}
                  copyElement={() => copyElement(projectSelected.pages)}
                  pasteFromClipboard={pasteFromClipboard}
                  renameFolder={() => renameFolder(folderName)}
                />
              )}
            </>
          );
        }
      })}
      </div>
    </div>
  );
};

export default UserDirectory;