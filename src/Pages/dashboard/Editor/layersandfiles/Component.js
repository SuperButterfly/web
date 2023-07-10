import './component.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useCallback, useState } from 'react'
import {
  getSelectedComponent,
  addComponentSelected,
  addMultipleComponentSelected,
  updateComponent,
  deletedMultipleComponents,
  deleteComponentSelected
} from '@/redux/actions/component.js'
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
  Icon
} from './svglist.js'
import { setEditingIdAction } from '../../../../redux/actions/component'

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
  isshow
}) => {
  const dispatch = useDispatch()
  const { componentSelected, componentsSelected } = useSelector(
    (state) => state.component
  )
  const { target } = useSelector((state) => state.project)
  const [currentArrow, setArrow] = useState({
    isVisible: !!(children && children.length),
    isOpen: false
  })
  const [componentName, setComponentName] = useState(name)
  const editingId = useSelector((state) => state.component.editingId)

  // -------------------------- handleClick ----------------------------- //
  const handleClick = useCallback(
    (ev) => {
      if (ev.ctrlKey) {
        dispatch(addComponentSelected(id))
      } else if (ev.shiftKey) {
        if (target.id !== id) dispatch(addComponentSelected(id))

        const selectComponentsLS = localStorage.getItem(
          'componentSelectWithShift'
        )
        const selectComponents = selectComponentsLS
          ? JSON.parse(selectComponentsLS)
          : [...componentsSelected.map((component) => component.id)]
        selectComponents.push(id)
        localStorage.setItem(
          'componentSelectWithShift',
          JSON.stringify(selectComponents)
        )
        findIndexComponent()
      } else {
        dispatch(getSelectedComponent(id))
      }
    },
    [dispatch, componentsSelected]
  )

  const findIndexComponent = () => {
    const component = JSON.parse(
      localStorage.getItem('componentSelectWithShift')
    )
    if (component && component.length) {
      const lastComponentSelected = component[component.length - 1]
      if (brothers.find((c) => c.id === component[0])) {
        const lastI = brothers.findIndex((c) => c.id === lastComponentSelected)
        let minI = Math.min(
          ...component
            .slice(0, 2)
            .map((id) => brothers.findIndex((c) => c.id === id))
        )
        let maxI = Math.max(
          ...component
            .slice(0, 2)
            .map((id) => brothers.findIndex((c) => c.id === id))
        )
        if (component.length > 2) {
          if (lastI < minI) {
            minI = lastI
          } else {
            maxI = lastI
          }
        }
        localStorage.setItem(
          'componentSelectWithShift',
          JSON.stringify([brothers[minI].id, brothers[maxI].id])
        )
        dispatch(addMultipleComponentSelected(brothers.slice(minI, maxI + 1)))
      } else {
        dispatch(getSelectedComponent(lastComponentSelected))
      }
    }
  }

  const TagComponent = useMemo(() => {
    switch (tag) {
      case 'img':
        return Image
      case 'span':
        return Text
      case 'ul':
        return List
      case 'ol':
        return List
      case 'li':
        return ListItem
      case 'video':
        return Video
      case 'h1':
        return H1
      case 'button':
        return Button
      case 'iframe':
        return Iframe
      case 'a':
        return Link
      case 'Player':
        return Lottie
      case 'form':
        return Form
      case 'input':
        return Input
      case 'textarea':
        return Textarea
      case 'label':
        return Label
      case 'select':
        return Select
      case 'svg':
        return Icon
      default:
        return Container
    }
  }, [tag])

  const handleArrow = () => {
    if (currentArrow.isVisible) {
      setArrow({ ...currentArrow, isOpen: !currentArrow.isOpen })
    }
  }

  const handleDelete = useCallback(
    (ev) => {
      if (
        ev.key === 'Delete' &&
        componentsSelected &&
        componentsSelected.length
      ) {
        const componentsId = componentsSelected.map((component) => component.id)
        dispatch(deletedMultipleComponents(componentsId /* target.id */))
        localStorage.removeItem('componentSelectWithShift')
        dispatch(deleteComponentSelected())
      }
    },
    [componentsSelected]
  )

  const handleArrParent = (idChild) => {
    if (children.find((child) => child.id === idChild)) {
      setArrow((state) => {
        return {
          ...state,
          isOpen: true
        }
      })
    }
  }

  // ------------------handle double click---------------------------//
  const handleDoubleClick = (id) => {
    dispatch(getSelectedComponent(id))
    dispatch(setEditingIdAction(id))
  }
  // ------------------handle ChangeName---------------------------//
  const handleChangeName = (event, id) => {
    setComponentName(event.target.value)
  }
  // ------------------handle KeyDown---------------------------//
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(setEditingIdAction(null))
    }
  }

  // --------------- handle isshow property -----------------------//
  const handleIsShow = async (component) => {
    const newVisibility = !component.isshow
      ? { ...componentSelected.properties.style, display: 'block' }
      : { ...componentSelected.properties.style, display: 'none' }
    dispatch(
      updateComponent(id, {
        ...componentSelected,
        isshow: !component.isshow,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newVisibility
          }
        }
      })
    )
  }

  useEffect(() => {
    if (componentSelected.id === id && componentName !== name) {
      dispatch(getSelectedComponent(id, componentName))
      dispatch(updateComponent(id, { name: componentName }))
    }
  }, [componentSelected.id, componentName, id])

  useEffect(() => {
    window.addEventListener('keydown', handleDelete)
    return () => window.removeEventListener('keydown', handleDelete)
  }, [componentsSelected])

  useEffect(() => {
    setArrow({ ...currentArrow, isOpen: false })
  }, [])

  useEffect(() => {
    if (componentSelected.id === id) handleChPa()

    return () => localStorage.removeItem('componentSelectWithShift')
  }, [componentSelected.id])

  useEffect(() => {
    if (editingId) {
      window.addEventListener('click', () => dispatch(setEditingIdAction(null)))
    }
    return window.addEventListener('click', () =>
      dispatch(setEditingIdAction(null))
    )
  }, [editingId])

  useEffect(() => {
    handleChPa()
  }, [currentArrow.isOpen])

  return (
    <>
      <div
        onClick={handleClick}
        className={`component-layout-container1 ${
          componentsSelected.find((component) => component.id === id)
            ? 'selected-component'
            : ''
        }`}
        id={1}
        style={{
          marginLeft: `${nestedlevel * 20}px`,
          width: `${230 - nestedlevel * 20}px`
        }}
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
              style={{
                minWidth: '110px',
                marginLeft: '8px',
                width: `${7 * componentName.length}px`,
                fontSize: '.75rem'
              }}
              type="text"
              value={componentName}
              autoFocus
              maxLength="18"
              onChange={handleChangeName}
              onKeyDown={(event) => handleKeyDown(event, id)}
            />
          ) : (
            <span style={{ paddingLeft: '8px', fontSize: '.75rem' }}>
              {componentName}
            </span>
          )}
          {isshow ? (
            <svg
              className="layerandfiles-eye-icon"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleIsShow(componentSelected)}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
                <path
                  d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          ) : (
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleIsShow(componentSelected)}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          )}
        </div>
        {true ? ( // eslint-disable-line
          <svg
            className="layerandfiles-eye-icon"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
        ) : (
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
        )}
        <div
          className="component-layout-container2"
          style={{
            flexDirection: icon.isOpen ? 'column-reverse' : 'column',
            visibility: icon.isVisible ? 'visible' : 'hidden'
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
      <div style={{ display: currentArrow.isOpen ? 'block' : 'none' }}>
        {children?.map((child, idx) => (
          <Component
            key={child.id}
            id={child.id}
            {...child}
            idControl={child.id}
            nestedlevel={nestedlevel + 1}
            brothers={children}
            icon={{ isVisible: false, isOpen: false }}
            tagType={{ name: 'Container', mode: 'row' }}
            handleChPa={() => handleArrParent(child.id)}
          />
        ))}
      </div>
    </>
  )
}

Component.propTypes = {
  name: PropTypes.string.isRequired,
  idControl: PropTypes.string.isRequired,
  tagType: PropTypes.object.isRequired,
  nestedlevel: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  arrow: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.array
}

export default Component
