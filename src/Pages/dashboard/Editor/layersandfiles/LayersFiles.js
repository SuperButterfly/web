import './layersfiles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState,useMemo, useCallback } from 'react';
import Component from './Component.js';
import { getSelectedComponent } from '@/redux/actions/component.js';

const LayersFiles = () => {
  const { target } = useSelector(state => state.project);
  const dispatch = useDispatch()
  const hasChildren = Boolean(target && target.children && target.children.length > 0);
  const { componentSelected } = useSelector(state => state.component);
  
  const handleClick = useCallback(() => {
    dispatch(getSelectedComponent(target.id));
  },[dispatch, componentSelected, componentSelected?.id]);
  
  const isSelected = useMemo(()=>{
    return componentSelected && Object.keys(componentSelected).length > 0 && componentSelected?.id === target?.id;
  },[componentSelected])
  

  
  const typeIcon = tag =>{
    let types= {
      li:"li",
      ul:"ul",
      div:'Container',
      img:'Image', 
      video:'Image',
      span:'Text',
      h1:'Text'
    }
    return types[tag] || 'Container'
  };
  
  return (
    <div className="layers-files-container">
      <div  className={`layers-files-heading-container ${isSelected?"selected-component":""}`}
        onClick={handleClick}  
      >
    
        <svg viewBox="0 0 1024 1024" className="layers-files-layers">
              <path d="M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"></path>
        </svg>
        <span className="layers-files-component-name">
          {target && target.name ? target.name : 'Home'}
        </span>
      </div>
      <div style={{display: hasChildren?"block":"none"}}>
        {
          target&&target.children?.map(({name,tag,children,id},idx)=>{
            return (
            <Component 
              key={idx}
              id={id}
              name={name}
              nestedlevel={1}
              //arrow={{isVisible: !!(children&&children.length) , isOpen: false }}
              icon={{isVisible: false , isOpen: false }}
              tagType={{name:typeIcon(tag) , mode: 'row'}}
              tag={tag}
              children={children}
              handleChPa={()=>console.log("Component Target")}
            />)
          })
        }
      </div>
    </div>
  );
};

export default LayersFiles;
