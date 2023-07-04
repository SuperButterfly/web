import "./component.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback, useState } from "react";
import {
  getSelectedComponent,
  addComponentSelected,
  addMultipleComponentSelected,
  updateComponent,
  deletedMultipleComponents
} from "@/redux/actions/component.js";
import {
  Arrow,
  Image,
  Container,
  Text,
  List,
  ListItem,
  Video,
  H1,
  Button,
  Iframe,
  Link,
  Lottie,
  Form,
  Input,
  Textarea,
  Label,
  Select,
  Icon,
} from "./svglist.js";
import { setEditingIdAction } from "../../../../redux/actions/component";

const Component = ({
  name,
  id,
  tagType,
  nestedlevel,
  tag,
  arrow,
  icon,
  children,
  handleChPa,
  brothers,
}) => {
  const dispatch = useDispatch();
  const { componentSelected, componentsSelected } = useSelector((state) => state.component);
  const { target } = useSelector((state) => state.project);
  const [currentArrow, setArrow] = useState({
    isVisible: !!(children && children.length),
    isOpen: false,
  });
  const [componentName, setComponentName] = useState(name);
  const editingId = useSelector((state) => state.component.editingId);
  const handleClick = useCallback((ev) => {
    
    if (ev.ctrlKey) {
      dispatch(addComponentSelected(id));
    }
    else if (ev.shiftKey) {
      if(target.id!==id)
        dispatch(addComponentSelected(id))

      const selectComponentsLS = localStorage.getItem('componentSelectWithShift')
      const selectComponents = selectComponentsLS?JSON.parse(selectComponentsLS):[...componentsSelected.map(component=>component.id)]
      selectComponents.push(id)
      localStorage.setItem('componentSelectWithShift',JSON.stringify(selectComponents))
      findIndexComponent();
    }else{
      dispatch(getSelectedComponent(id));
    }
  }, [dispatch,componentsSelected]);
  
  const findIndexComponent = ()=> {
    const component = JSON.parse(localStorage.getItem('componentSelectWithShift'))
    if(component&&component.length){
      const lastComponentSelected = component[component.length-1];
      if(brothers.find(c=>c.id===component[0])){
        const lastI = brothers.findIndex(c=>c.id===lastComponentSelected)
        let minI = Math.min(...component.slice(0,2).map(id=>brothers.findIndex(c=>c.id===id))) 
        let maxI = Math.max(...component.slice(0,2).map(id=>brothers.findIndex(c=>c.id===id)))
        if(component.length>2){
          if(lastI<minI){
            minI=lastI
          }else{
            maxI=lastI
          }
        }
        localStorage.setItem('componentSelectWithShift',JSON.stringify([brothers[minI].id,brothers[maxI].id]))
        dispatch(addMultipleComponentSelected(brothers.slice(minI,maxI+1)))
      }else{
        dispatch(getSelectedComponent(lastComponentSelected))
      }
    }
  };

  const TagComponent = useMemo(() => {
    switch (tag) {
      case "img":
        return Image;
      case "span":
        return Text;
      case "ul":
        return List;
      case "ol":
        return List;
      case "li":
        return ListItem;
      case "video":
        return Video;
      case "h1":
        return H1;
      case "button":
        return Button;
      case "iframe":
        return Iframe;
      case "a":
        return Link;
      case "Player":
        return Lottie;
      case "form":
        return Form;
      case "input":
        return Input;
      case "textarea":
        return Textarea;
      case "label":
        return Label;
      case "select":
        return Select;
      case "svg":
        return Icon;
      default:
        return Container;
    }
  }, [tag]);

  const handleArrow = () => {
    if (currentArrow.isVisible) {
      setArrow({ ...currentArrow, isOpen: !currentArrow.isOpen });
    }
  }
  
  const handleDelete = useCallback((ev) => {
    if (ev.key === "Delete") {
      const componentsId = componentsSelected.map(component=>component.id)
      dispatch(deletedMultipleComponents(componentsId,target.id))
      localStorage.removeItem('componentSelectWithShift')
    }
  },[componentsSelected])
  
  useEffect(()=>{
    window.addEventListener('keydown',handleDelete)
    return ()=>{
      window.addEventListener('keydown',handleDelete)
    }
  },[componentsSelected])

  useEffect(()=>{
    setArrow({...currentArrow,isOpen:false})
  },[])
  
  useEffect(()=>{
    if(componentSelected.id===id)
      handleChPa()

    return ()=>localStorage.removeItem('componentSelectWithShift')
  },[componentSelected.id])
  
  
  useEffect(()=>{
    handleChPa()
  },[currentArrow.isOpen])
  
  const handleArrParent = (idChild) => {
    if (children.find((child) => child.id === idChild)) {
      setArrow((state) => {
        return {
          ...state,
          isOpen: true,
        };
      });
    }
  };

  //------------------handle double click---------------------------//
  const handleDoubleClick = (id) => {
    dispatch(setEditingIdAction(id));
  };
  const handleChangeName = (event, id) => {
    setComponentName(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(setEditingIdAction(null));
    }
  };
  useEffect(() => {
    if (componentSelected.id === id && componentName !== name) {
      dispatch(getSelectedComponent(id, componentName));
      dispatch(updateComponent(id, { name: componentName }));
    }
  }, [componentSelected.id, componentName, id]);

  return (
    <>
      <div
        onClick={handleClick}
        className={`component-layout-container1 ${
          componentsSelected.find((component) => component.id === id) ? "selected-component" : ""
        }`}
        id={1}
        style={{ marginLeft: `${nestedlevel * 20}px`, width:`${230-(nestedlevel * 20)}px` }}
      >
        <div
          className="component-layout-contain"
          id={1}
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Arrow
            isVisible={currentArrow.isVisible}
            handleClick={handleArrow}
            isOpen={currentArrow.isOpen}
            id={1}
          />
          <TagComponent mode={tagType.mode} />
          {editingId === id ? (
            <input
              style={{ paddingLeft: "8px", fontSize: ".75rem" }}
              type="text"
              value={componentName}
              autoFocus
              onChange={handleChangeName}
              onKeyDown={(event) => handleKeyDown(event, id)}
            />
          ) : (
            <span style={{ paddingLeft: "8px", fontSize: ".75rem" }}>{componentName}</span>
          )}
        </div>

        <div
          className="component-layout-container2"
          style={{
            flexDirection: icon.isOpen ? "column-reverse" : "column",
            visibility: icon.isVisible ? "visible" : "hidden",
          }}
        >
          <svg viewBox="0 0 1024 1024" className="component-icon4">
            <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="component-icon6">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </div>
      <div style={{ display: currentArrow.isOpen ? "block" : "none" }}>
        {children?.map((child, idx) => (
          <Component
            key={child.id}
            id={child.id}
            {...child}
            idControl={child.id}
            nestedlevel={nestedlevel+1} 
            brothers={children}
            icon={{isVisible: false , isOpen: false }}
            tagType={{name:'Container' , mode: 'row'}}
            handleChPa={()=>handleArrParent(child.id)}
          />
        ))}
      </div>
    </>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  idControl: PropTypes.string.isRequired,
  tagType: PropTypes.object.isRequired,
  nestedlevel: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  arrow: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.array,
};

export default Component;
