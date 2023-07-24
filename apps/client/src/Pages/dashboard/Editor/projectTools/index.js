import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VisualAdvanced from '../visualadvanced/VisualAdvanced.js'
import Settings from '../settings/Settings.js'
import Advanced from '../advanced/Advanced.js'
import ContextMenu from '../contextmenu/ContextMenu.js'
import Attributes from '../attributes/Attributes.js'
import States from '../states/States.js'
import PressetsMain from '../pressets/PressetsMain.js'
import {
  pasteComponent,
  deleteComponent,
  getParentId,
  updateComponent
} from '../../../../redux/actions/component.js'
import PressetsText from '../pressets/TextTab/PressetsText.js'
import PressetsLayout from '../pressets/LayoutTab/PressetsLayout.js'
import PressetsColor from '../pressets/ColorTab/PressetsColor.js'
import EditorPanel from '../../Editor/editorpanel/EditorPanel.js'

const ProjectTools = ({ isAdvancedSelected, setIsAdvancedSelected }) => {
  const [selected, change] = useState('text')
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [idElementContext, setIdElementContext] = useState('')
  const dispatch = useDispatch()

  const { componentSelected } = useSelector((state) => state.component)
  const handleHideMenu = (ev) => {
    setPos({ top: 0, left: 0 })
    setIdElementContext(ev.target.id)
    console.log(`${ev.target.id} este es el click`)
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

  const handleContextMenu = (ev) => {
    ev.preventDefault()
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    setIdElementContext(ev.target.id)
    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX - 300

    setPos({ top, left })
  }
  // -----------------Edit-------------------///
  const editComponent = (id) => {
    setIsAdvancedSelected(id)
  }

  // ------------------copy ------------------///

  const copyComponent = (content) => {
    localStorage.setItem('copyComponent', content)
    console.log('copy', content)
  }
  // --------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedComponent = localStorage.getItem('copyComponent')
    const body = {
      component: pastedComponent,
      parentId: componentSelected.id
    }
    console.log('paste', body)
    dispatch(pasteComponent(body))
  }
  // --------------------- Duplicate ------------------//
  const duplicate = (content) => {
    copyComponent(content)
    console.log(`este es el duplicate ${content}`)

    const pasteID = pasteFromClipboard()
    console.log(`este es el dupli paste ${pasteID}`)
  }
  // --------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log('cut', content)
    copyComponent(content)
    dispatch(deleteComponent(componentSelected.id))
  }
  // ---------------------Select Parent ------------------//
  const selectParent = async (idChildren) => {
    // eslint-disable-next-line no-useless-catch
    try {
      dispatch(getParentId(idChildren))
    } catch (error) {
      throw error
    }
  }
  // ----------------------- Group --------------------------//+

  const groupComponent = () => {
    // dispatch(groupComponent(componentsSelected));
  }
  // ----------------------- unGroup --------------------------//+
  const unGroupComponent = () => {
    // dispatch(unGroupComponent(componentSelected.id));
  }

  // ----------------------- Hide --------------------------//+
  const hideComponent = async (componentSelected) => {
    const newIsShow = !componentSelected.isshow
    const newVisibility = newIsShow
      ? { ...componentSelected.properties.style, display: 'block' }
      : { ...componentSelected.properties.style, display: 'none' }

    await dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        isshow: newIsShow,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newVisibility
          }
        }
      })
    )
  }

  // ---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault()
      console.log(`${componentSelected.id} keydown`)
      copyComponent(componentSelected)
    }

    if (event.ctrlKey && event.key === 'v') {
      event.preventDefault()
      pasteFromClipboard()
    }

    if (event.ctrlKey && event.key === 'x') {
      event.preventDefault()
      cutComponent(componentSelected)
    }

    if (event.ctrlKey && event.key === 'd') {
      event.preventDefault()
      copyComponent(componentSelected)
      pasteFromClipboard()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  }, [componentSelected])

  return (
    <>
      <div
        className="home-container"
        onClick={handleHideMenu}
        onContextMenu={handleContextMenu}
      >
        <ContextMenu
          pos={pos}
          close={setPos}
          componentSelected={componentSelected}
          copyComponent={copyComponent}
          pasteFromClipboard={pasteFromClipboard}
          duplicate={duplicate}
          cutComponent={cutComponent}
          selectParent={selectParent}
          editComponent={editComponent}
          groupComponent={groupComponent}
          unGroupComponent={unGroupComponent}
          hideComponent={hideComponent}
        />

        {/* - - - -  en lugar de Outlet renderizar editor datamanager y codepanel   - - - - */}
        {/* <Outlet /> */}
        {/* negro del medio */}
        <EditorPanel />

        <div
          className="home-settings"
          style={{
            display:
              componentSelected && Object.keys(componentSelected).length
                ? 'block'
                : 'none',
            width: '270px',
            padding: '0px 10px',
            overflow: 'hidden scroll'
          }}
        >
          <VisualAdvanced
            selected={isAdvancedSelected}
            change={setIsAdvancedSelected}
          />
          <Attributes />
          <States />
          {!isAdvancedSelected && <Settings />}
          {isAdvancedSelected && <Advanced />}
        </div>
        <div
          className="home-settings"
          style={{
            display:
              componentSelected && Object.keys(componentSelected).length
                ? 'none'
                : 'block',
            width: '270px'
          }}
        >
          {/* derecha */}
          <PressetsMain selected={selected} change={change} />
          {selected === 'text' && <PressetsText />}
          {selected === 'layout' && <PressetsLayout />}
          {selected === 'color' && <PressetsColor />}
        </div>
      </div>
    </>
  )
}

export default ProjectTools
