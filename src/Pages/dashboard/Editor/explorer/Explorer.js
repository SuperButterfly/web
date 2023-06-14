import "./explorer.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTarget,
  createComponent,
  getProject,
  update,
  updateClassProperties,
} from "@/redux/actions/projects.js";

const Explorer = () => {
  const dispatch = useDispatch();
  const { projectSelected, target } = useSelector((state) => state.project);
  const [isMainSelected, setIsMainSelected] = useState({
    pages: true,
    components: true,
  });
  const [isSelected, setIsSelected] = useState({ Home: true });
  const [openMenu, setOpenMenu] = useState(false);
  const [last, setLast] = useState("");
  const [components, setComponents] = useState([]);
  const [pages, setPages] = useState([]);

  const [isComponentEditable, setComponentEditable] = useState(null);
  const [editName, setEditName] = useState({});

  useEffect(() => {
    if (!target || !target.tag) {
      if (projectSelected.pages && projectSelected.pages[0]) {
        dispatch(getTarget(projectSelected.pages[0].id));
      }
    }
  }, [dispatch, projectSelected, target]);

  useEffect(() => {
    if (target && target.children && target.children.length > 0) {
      // Perform actions when target children are available
    }
  }, [target]);

  useEffect(() => {
    if (pages.length > 0) {
      handleComponentClick(pages[0]?.id);
    }
  }, [pages]);

  useEffect(() => {
    let aux = {};
    if (!projectSelected || Object.keys(projectSelected).length === 0) {
      dispatch(getProject());
    }

    if (
      projectSelected &&
      projectSelected.pages &&
      projectSelected.pages.length > 0
    ) {
      setPages(
        projectSelected.pages.map((p) => {
          return { name: p.name, id: p.id, tag: p.tag };
        })
      );

      for (let page of projectSelected.pages) {
        if (page.name === "Home") {
          if (last === "") {
            aux.Home = true;
            localStorage.setItem("componentId", page.id);
          } else aux.Home = false;
        } else if (last === page.name) aux[last] = true;
        else aux[page.id] = false;
      }
    }

    if (
      projectSelected &&
      projectSelected.components &&
      projectSelected.components.length > 0
    ) {
      setComponents(
        projectSelected.components.map((p) => {
          return { name: p.name, id: p.id, tag: p.tag };
        })
      );
      for (let component of projectSelected.components) {
        if (component.id === last) aux[last] = true;
        else aux[component.id] = false;
      }
    }

    setIsSelected({ ...aux });
    let aux1 = { ...aux };
    if (aux1 && Object.keys(aux1).length !== 0) {
      for (let item in aux1) {
        aux1[item] = false;
      }
      setComponentEditable({ ...aux1 });
    }
  }, [dispatch, projectSelected, last]);

  useEffect(() => {
    const nameClassname = ".Button";
    const proyectId = window.localStorage.getItem("projectid");
    dispatch(
      updateClassProperties(proyectId, {
        nameClass: nameClassname,
        properties: {},
      })
    );
  }, [dispatch]);

  const handleInput = (e, id) => {
    e.preventDefault();
    const name = e.currentTarget.textContent;
    if (name !== "" && name !== null) {
      setEditName({ name, id });
    }
  };

  const handleEditable = (e, id, isEditable) => {
    e.preventDefault();
    console.log("handleEditable1: entró");
    let aux = { ...isComponentEditable };
    for (let item in aux) {
      aux[item] = false;
    }
    aux[id] = isEditable;

    setComponentEditable({ ...aux });

    if (!isEditable && editName.name && editName.name !== "") {
      dispatch(update({ name: editName.name }, editName.id));
    }
  };

  const handleMainClick = (ev) => {
    ev.preventDefault();
    const { id } = ev.target;
    let change = !isMainSelected[id];
    setIsMainSelected({
      ...isMainSelected,
      [id]: change,
    });
  };

  const handleComponentClick = (name) => {
    const keys = Object.keys(isSelected);
    let aux = {};
    for (let key of keys) {
      if (key === name) aux[key] = true;
      else aux[key] = false;
    }
    setIsSelected({ ...aux });

    dispatch(getTarget(name));
  };

  const handleMenuClick = (selection) => {
    if (selection === "Page") {
      var name = "Page";
      let size = projectSelected.pages.length;
      console.log(size);
      console.log(projectSelected.components);
      console.log(projectSelected);
      if (size > 0) {
        name += size;
      }
      setLast(name);
      dispatch(createComponent(projectSelected.id, name, true));
    } else {
      var name = "Component";
      let size = projectSelected.components.length;
      if (size > 0) {
        name += size;
      }
      setLast(name);
      dispatch(createComponent(projectSelected.id, name, false));
    }
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
            <span
              className="pop-menu-text"
              id="Page"
              onClick={() => handleMenuClick("Page")}
            >
              New Page
            </span>
            <div
              className="pop-pop"
              id="Component"
              onClick={() => handleMenuClick("Component")}
            >
              <span
                className="pop-menu-text1"
                onClick={() => handleMenuClick("Component")}
                id="Component"
              >
                New Component
              </span>
              <span className="pop-menu-text2" id="Component">
                Ctrl + Alt + k
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="explorer-pages-list-container">
        <div
          className="explorer-pages-header"
          onClick={handleMainClick}
          id="pages"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="explorer-arrow"
            style={
              isMainSelected.pages ? { rotate: "0deg" } : { rotate: "-90deg" }
            }
            id="pages"
          >
            <path
              id="pages"
              d="M316 366l196 196 196-196 60 60-256 256-256-256z"
            ></path>
          </svg>

          <span id="pages" className="explorer-title">
            Pages
          </span>
        </div>

        <ul
          className="explorer-pages"
          style={
            isMainSelected.pages ? { display: "flex" } : { display: "none" }
          }
        >
          {pages &&
            pages.length > 0 &&
            pages.map(({ name, id }, idx) => (
              <li
                key={idx}
                id={name}
                className={
                  isSelected && isSelected[id]
                    ? "explorer-li explorer-selected"
                    : "explorer-li"
                }
                onClick={() => handleComponentClick(id)}
                onDoubleClick={(e) => handleEditable(e, id, true)}
                onBlur={(e) => handleEditable(e, id, false)}
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
                  id={name}
                  className="explorer-text3"
                  contentEditable={isComponentEditable[id]}
                  onDoubleClick={(e) => handleEditable(e, id, true)}
                  onBlur={(e) => handleEditable(e, id, false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === "Escape")
                      handleEditable(e, id, false);
                  }}
                  onInput={(e) => handleInput(e, id)}
                >
                  {name}
                </span>
                {name === "Home" ? (
                  <div class="pt-icon-h ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 13.9 11.4"
                      width="13.9"
                      height="11.4"
                    >
                      <path
                        d="M12.9 6.4h-.1c-.4-.2-.7-.6-1.1-.9-.4-.3-.8-.6-1.2-1-.9-.6-1.7-1.3-2.6-1.9-.1-.1-1-.8-1-.8-.2.1-.4.3-.6.4-.5.4-1 .8-1.4 1.1-.6.5-1.2.9-1.7 1.4-.4.2-.7.4-1 .7l-.3.3C1.4 6 .6 6.8.1 6c-.3-.4 0-.9.4-1.2.3-.3.6-.5.9-.7.2-.1.4-.3.7-.5.6-.4 1.1-.9 1.7-1.3C4.7 1.6 5.6.9 6.6.2c0 0 .1 0 .1-.1.1-.1.3-.1.4 0 0 0 5.7 4.5 5.8 4.5.4.3 1.3.9.9 1.6-.3.2-.6.3-.9.2zm-1.5.7v3.8c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5V7.1c0-.2.1-.3.2-.4l4-3c.2-.1.4-.1.6 0l4 3c.1.1.2.2.2.4z"
                        fill="#363636"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            ))}
        </ul>
      </div>
      <div className="explorer-components-list-container">
        <div
          className="explorer-component-header"
          onClick={handleMainClick}
          id="components"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="explorer-arrow1"
            style={
              isMainSelected.components
                ? { rotate: "0deg" }
                : { rotate: "-90deg" }
            }
            id="components"
          >
            <path
              id="components"
              d="M316 366l196 196 196-196 60 60-256 256-256-256z"
            ></path>
          </svg>
          <span id="components" className="explorer-title1">
            Components
          </span>
        </div>
        <ul
          className="explorer-components"
          style={
            isMainSelected.components
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {components &&
            components.length > 0 &&
            components.map(({ name, id }, idx) => (
              <li
                key={idx}
                id={name}
                className={
                  isSelected[id]
                    ? "explorer-li explorer-selected"
                    : "explorer-li"
                }
                onClick={() => handleComponentClick(id)}
                onDoubleClick={(e) => handleEditable(e, id, true)}
                onBlur={(e) => handleEditable(e, id, false)}
              >
                {" "}
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
                  key={idx}
                  id={name}
                  contentEditable={isComponentEditable[id]}
                  onDoubleClick={(e) => handleEditable(e, id, true)}
                  onBlur={(e) => handleEditable(e, id, false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === "Escape")
                      handleEditable(e, id, false);
                  }}
                  onInput={(e) => handleInput(e, id)}
                >
                  {name}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Explorer;
