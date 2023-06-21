import './component.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useCallback, useState } from 'react';
import { getSelectedComponent,addComponentSelected } from '@/redux/actions/component.js';
import { Arrow, Image, Container, Text, List, ListItem, Video, H1, Button, Iframe, Link, Lottie, Form, Input, Textarea, Label, Select, Icon} from './svglist.js'

const Component = ({ name, id, tagType, nestedlevel, tag, arrow, icon, children,handleChPa}) => {
  const dispatch = useDispatch();
  const { componentSelected,componentsSelected } = useSelector(state => state.component);
  const [currentArrow, setArrow] = useState({isVisible: !!(children&&children.length) , isOpen: false })
  /*const isSelected = useMemo(() => {
    //return componentSelected && Object.keys(componentSelected).length > 0 && componentSelected.id === id;
    console.log(componentsSelected && componentsSelected.length>0 && componentsSelected.find(component=>component.id===id))
    return componentsSelected && componentsSelected.length>0 && componentsSelected.find(component=>component.id===id)
  }, [componentSelected, id]);*/
  
  const handleClick = useCallback((ev) => {
    if(ev.ctrlKey){
      dispatch(addComponentSelected(id))
    }else{
      dispatch(getSelectedComponent(id));
    }
    
  }, [dispatch, id]);
  
  const TagComponent = useMemo(() => {
    switch (tag) {
      case 'img':
        return Image;
      case 'span':
        return Text;
      case 'ul':
        return List;
      case 'ol':
        return List;
      case 'li':
        return ListItem;
      case 'video':
        return Video;
      case 'h1':
        return H1;
      case 'button':
        return Button;
      case 'iframe':
        return Iframe;
      case 'a':
        return Link;
      case 'Player':
        return Lottie;
      case 'form':
        return Form;
      case 'input':
        return Input;
      case 'textarea':
        return Textarea;
      case 'label':
        return Label;
      case 'select':
        return Select;
      case 'svg':
        return Icon;
      default:
        return Container;
    }
  }, [tag]);
  
  const handleArrow = ()=>{
    if(currentArrow.isVisible){
      setArrow({...currentArrow, isOpen: !currentArrow.isOpen })
    }
  }
  
  useEffect(()=>{
    setArrow({...currentArrow,isOpen:false})
  },[])
  
  useEffect(()=>{
    if(componentSelected.id===id)
      handleChPa()
  },[componentSelected.id])
  
  
  useEffect(()=>{
    handleChPa()
  },[currentArrow.isOpen])
  
  const handleArrParent = (idChild) => {
    if(children.find(child=>child.id===idChild)){
      setArrow(state=>{
        return{
          ...state, 
          isOpen: true
        }
      })
    }
  }
  return (
    <>
      <div 
        onClick={handleClick} 
        className={`component-layout-container1 ${componentsSelected.find(component=>component.id===id) ? "selected-component" : ""}`} 
        id={1} 
        style={{ paddingLeft: `${nestedlevel * 11}px`}}
      >
        <div className="component-layout-contain" id={1}>
          <Arrow isVisible={currentArrow.isVisible} handleClick={handleArrow} isOpen={currentArrow.isOpen} id={1}/>
          <TagComponent mode={tagType.mode} />
          <span style={{ "paddingLeft":"8px","fontSize":".75rem"}}>{tag}</span>
        </div>
        
        <div className="component-layout-container2"
             style={{ flexDirection: icon.isOpen ? 'column-reverse' : 'column', visibility: icon.isVisible ? 'visible' : 'hidden' }}
        >
          <svg viewBox="0 0 1024 1024" className="component-icon4">
            <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="component-icon6">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </div>
      <div style={{display:currentArrow.isOpen?"block":"none"}}>
        {children?.map((child, idx) => 
          <Component 
            key={child.id}
            id={child.id}  
            {...child}
            idControl={child.id}
            nestedlevel={nestedlevel+1} 
            //arrow={{isVisible: !!(child&&child.children&&child.children.length) , isOpen: false}}
            icon={{isVisible: false , isOpen: false }}
            tagType={{name:'Container' , mode: 'row'}}
            handleChPa={()=>handleArrParent(child.id)}
          />
        )}
        
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
