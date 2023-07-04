import "./explorer.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTarget, getProject, update, createComponent } from "@/redux/actions/projects.js";

const Explorer = () => {
  const dispatch = useDispatch();
  const { projectSelected } = useSelector((state) => state.project);
  const [isMainSelected, setIsMainSelected] = useState({
    pages: false,
    components: false,
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedPage, setSelectedPage] = useState();
  const [components, setComponents] = useState([]);
  const [pages, setPages] = useState([]);
  const [isComponentEditable, setIsComponentEditable] = useState(null);
  const [editName, setEditName] = useState({});

  useEffect(() => {
    if (projectSelected && projectSelected.pages && projectSelected.pages.length > 0) {
      setSelectedPage(projectSelected.pages[0].id);
    }
  }, [projectSelected]);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (!projectSelected || Object.keys(projectSelected).length === 0) {
        await dispatch(getProject());
      }

      if (projectSelected && projectSelected.pages && projectSelected.pages.length > 0) {
        const formattedPages = projectSelected.pages.map(({ name, id, tag }) => ({
          name,
          id,
          tag,
        }));
        setPages(formattedPages);
      }
      if (projectSelected && projectSelected.components && projectSelected.components.length > 0) {
        const formattedComponents = projectSelected.components.map(({ name, id, tag }) => ({
          name,
          id,
          tag,
        }));
        setComponents(formattedComponents);
      }
    };

    fetchProjectData();
  }, [projectSelected, dispatch]);
  
  /*Funciones para page*/
  const handleComponentClick = (id) => {
    setSelectedPage(id);
    dispatch(getTarget(id));
  };

  const handleInput = (e, id) => {
    const { value } = e.target;
    setEditName((prevEditName) => ({
      ...prevEditName,
      [id]: value,
    }));
  };

  const handleEditable = (id, isEditable) => {
    setIsComponentEditable((prevIsComponentEditable) => ({
      ...prevIsComponentEditable,
      [id]: isEditable,
    }));

    if (!isEditable && editName[id] && editName[id] !== "") {
      dispatch(update({ name: editName[id] }, id));
    }
  };

  //creadores de pages/components

  const handleMenuClickPage = async () => {
    const existingPages = projectSelected.pages;
    let name = "Page";
    let count = 1;

    while (existingPages.some((page) => page.name === name)) {
      name = `Page ${count}`;
      count++;
    }

    await dispatch(createComponent(projectSelected.id, name, true));
    await dispatch(getProject());
    setOpenMenu(false);
  };

  const handleMenuClickPageComponent = async () => {
    const existingComponents = projectSelected.components;
    let name = "Component";
    let count = 1;

    while (existingComponents?.some((component) => component.name === name)) {
      name = `Component ${count}`;
      count++;
    }

    await dispatch(createComponent(projectSelected.id, name, false));
    await dispatch(getProject());
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  /*rotador del arrow*/
  const handleMainClick = (ev) => {
    ev.preventDefault();
    const { id } = ev.target;
    let change = !isMainSelected[id];
    setIsMainSelected((prevIsMainSelected) => ({
      ...prevIsMainSelected,
      [id]: change,
    }));
  };
  useEffect(() => {
    const handleKeyDown = async (event) => {
      if (event.ctrlKey && event.altKey && event.key === "k") {
        const existingComponents = projectSelected.components;
        let name = "Component";
        let count = 1;

        while (existingComponents?.some((component) => component.name === name)) {
          name = `Component ${count}`;
          count++;
        }

        await dispatch(createComponent(projectSelected.id, name, false));
        await dispatch(getProject());
        setOpenMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [projectSelected, dispatch, setOpenMenu]);

  return (
    <div className="explorer-container">
      <div className="explorer-heading-container">
        <span className="explorer-text">Explorer</span>
        <button className="explorer-button" onClick={toggleMenu}>
          <svg viewBox="0 0 1024 1024" className="explorer-plus">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </button>

        {openMenu && (
          <div className="pop-menu-container">
            <span className="pop-menu-text" id="Page" onClick={() => handleMenuClickPage()}>
              New Page
            </span>
            <div className="pop-pop" id="Component" onClick={() => handleMenuClickPageComponent()}>
              <span className="pop-menu-text1" id="Component">
                New Component
              </span>
              <span className="pop-menu-text2" id="Component">
                Ctrl + Alt + K
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="explorer-pages-list-container">
        <div className="explorer-pages-header" onClick={handleMainClick} id="pages">
          <svg
            viewBox="0 0 1024 1024"
            className="explorer-arrow"
            style={
              isMainSelected.pages ? { transform: "rotate(0deg)" } : { transform: "rotate(-90deg)" }
            }
            id="pages"
          >
            {" "}
            <path id="pages" d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>

          <span id="pages" className="explorer-title">
            Pages
          </span>
        </div>
        <ul
          className="explorer-pages"
          style={isMainSelected?.pages ? { display: "flex" } : { display: "none" }}
        >
          {pages.map(({ name, id }, idx) => (
            <li
              key={idx}
              id={id}
              className={selectedPage === id ? "explorer-li explorer-selected" : "explorer-li"}
              onClick={() => handleComponentClick(id)}
            >
              <div className="pt-icon-e">
                {" "}
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="#363636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6.667 1.733c0-.374 0-.56-.073-.703a.667.667 0 00-.291-.291C6.16.666 5.973.666 5.6.666H2a2 2 0 00-2 2v10.667a2 2 0 002 2h8a2 2 0 002-2V7.066c0-.373 0-.56-.073-.703a.667.667 0 00-.291-.291c-.143-.073-.33-.073-.703-.073H8a1.333 1.333 0 01-1.333-1.333V1.733z"
                  ></path>
                  <path d="M10.298 4.666c.404 0 .606 0 .7-.08a.333.333 0 00.115-.28c-.01-.122-.152-.265-.438-.55L8.91 1.99c-.285-.286-.428-.429-.55-.438a.333.333 0 00-.28.116C8 1.762 8 1.964 8 2.368v1.765c0 .186 0 .28.036.351a.333.333 0 00.146.146c.071.036.165.036.351.036h1.765z"></path>
                </svg>
              </div>
              <span
                id={id}
                className="explorer-text3"
                onDoubleClick={() => handleEditable(id, true)}
                onBlur={() => handleEditable(id, false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Escape") handleEditable(e, id, false);
                }}
              >
                {isComponentEditable && isComponentEditable[id] ? (
                  <input
                    type="text"
                    value={editName[id] || name}
                    onChange={(e) => handleInput(e, id)}
                    autoFocus
                    className="editable-input"
                  />
                ) : (
                  name
                )}
              </span>
              {name === "Home" && (
                <div className="pt-icon-h">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.9 11.4"
                    width="13.9"
                    height="11.4"
                  >
                    <path
                      d="M12.9 6.4h-.1c-.4-.2-.7-.6-1.1-.9-.4-.3-.8-.6-1.2-1-.9-.6-1.7-1.3-2.6-1.9-.1-.1-1-.8-1-.8-.2.1-.4.3-.6.4-.5.4-1 .8-1.4 1.1-.6.5-1.2.9-1.7 1.4-.4.2-.7.4-1 .7l-.3.3C1.4 6 .6 6.8.1 6c-.3-.4 0-.9.4-1.2.3-.3.6-.5.9-.7.2-.1.4-.3.7-.5.6-.4 1.1-.9 1.7-1.3C4.7 1.6 5.6.9 6.6.2c0 0 .1 0 .1-.1.1-.1.3-.1.4 0 0 0 5.7 4.5 5.8 4.5.4.3 1.3.9.9 1.6-.3.2-.6.3-.9.2zm-1.5.7v3.8c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5V7.1c0-.2.1-.3.2-.4l4-3c.2-.1.4-.1.6 0l4 3c.1.1.2.2.2.4z"
                      fill="#363636"
                    ></path>{" "}
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="explorer-components-list-container">
        <div
          className="explorer-component-header"
          onClick={handleMainClick} //rotador del arrow
          id="components"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="explorer-arrow1"
            style={isMainSelected.components ? { rotate: "0deg" } : { rotate: "-90deg" }}
            id="components"
          >
            <path id="components" d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span id="components" className="explorer-title1">
            Components
          </span>
        </div>
        <ul
          className="explorer-components"
          style={isMainSelected.components ? { display: "flex" } : { display: "none" }}
        >
          {components.map(({ name, id }, idx) => (
            <li
              key={idx}
              id={id}
              className={selectedPage === id ? "explorer-li explorer-selected" : "explorer-li"}
              onClick={() => handleComponentClick(id)}
            >
              <div class="pt-icon-e">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="#363636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6.667 1.733c0-.374 0-.56-.073-.703a.667.667 0 00-.291-.291C6.16.666 5.973.666 5.6.666H2a2 2 0 00-2 2v10.667a2 2 0 002 2h8a2 2 0 002-2V7.066c0-.373 0-.56-.073-.703a.667.667 0 00-.291-.291c-.143-.073-.33-.073-.703-.073H8a1.333 1.333 0 01-1.333-1.333V1.733z"
                  ></path>
                  <path d="M10.298 4.666c.404 0 .606 0 .7-.08a.333.333 0 00.115-.28c-.01-.122-.152-.265-.438-.55L8.91 1.99c-.285-.286-.428-.429-.55-.438a.333.333 0 00-.28.116C8 1.762 8 1.964 8 2.368v1.765c0 .186 0 .28.036.351a.333.333 0 00.146.146c.071.036.165.036.351.036h1.765z"></path>
                </svg>
              </div>
              <span
                className="explorer-text3"
                id={id}
                onDoubleClick={() => handleEditable(id, true)}
                onBlur={() => handleEditable(id, false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Escape") handleEditable(e, id, false);
                }}
              >
                {isComponentEditable && isComponentEditable[id] ? (
                  <input
                    type="text"
                    value={editName[id] || name}
                    onChange={(e) => handleInput(e, id)}
                    autoFocus
                    className="editable-input"
                  />
                ) : (
                  name
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explorer;
