import './main.css';
import { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import VisualAdvanced from '../visualadvanced/VisualAdvanced.js';
import Settings from '../settings/Settings.js';
import Advanced from '../advanced/Advanced.js';
import SidebarIcons from '../sidebaricons/SidebarIcons.js';
import MainHeader from '../mainheader/MainHeader.js';
import EditorPanel from '../editorpanel/EditorPanel.js';
import ContextMenu from '../contextmenu/ContextMenu.js'
import Attributes from '../attributes/Attributes.js';
import States from '../states/States.js';
import PressetsMain from '../pressets/PressetsMain.js'
import {deleteComponentSelected} from '../../../../redux/actions/component.js'
import PressetsText from '../pressets/PressetsText.js'
import PressetsLayout from '../pressets/PressetsLayout.js'
import PressetsColor from '../pressets/PressetsColor.js'

const Main = () => {
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false);
  const [selected,change] = useState("text")
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext,setIdElementContext] = useState('');
  const dispatch = useDispatch();
  const { componentSelected } = useSelector((state) => state.component);
  const handleHideMenu = ev=>{
    setPos({top:0,left:0})
  }
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
  
  const handleContextMenu = ev => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth= window.innerWidth;
    setIdElementContext(ev.target.id)
    console.log(idElementContext)
    const top = (ev.pageY > (windowHeight - 290)) ? (ev.pageY - 360) : (ev.pageY - 48);
    const left = (ev.pageX > (windowWidth -190)) ? (ev.pageX - 182) : ev.pageX ;

    setPos({ top, left });
  }

  return (
    <>
      <MainHeader />
      <div className="home-container" onClick={handleHideMenu} onContextMenu={handleContextMenu}>
        <ContextMenu pos={pos} close={setPos} idElement={idElementContext}/>  
        <SidebarIcons/>
        <EditorPanel />
        <div className="home-settings" style={{display:componentSelected&&Object.keys(componentSelected).length?"block":"none"}}>
          <VisualAdvanced selected={isAdvancedSelected} change={setIsAdvancedSelected}/>
          <Attributes/>
          <States/>
          { !isAdvancedSelected && <Settings /> }
          { isAdvancedSelected && <Advanced /> }
        </div>
        <div className="home-settings" style={{display: componentSelected&&Object.keys(componentSelected).length?"none":"block"}}>
          <PressetsMain selected={selected} change={change}/>
          {selected==="text"&& <PressetsText/>}
          {selected==="layout"&&<PressetsLayout/>}
          {selected==="color"&&<PressetsColor/>}
        </div>
      </div>
    </>
  );
};

export default Main;