//ultima version de handlers

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createComponent,
  cleanEventAndUpdateComponent,
  updateComponent
} from '@/redux/actions/component.js'
import { getTarget } from '@/redux/actions/projects.js'
import Loader from '../Loader/Loader'
import '../PaintAll.css'

const PaintAllE = () => {
  const { target } = useSelector((state) => state.project)
  const { componentSelected } = useSelector((state) => state?.component)
  const { properties } = useSelector(
    (state) => state.component.componentSelected
  )
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState('')
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const { width, height } = properties?.style || {}
  const [imageSize, setImageSize] = useState({
    width: `${width}px`,
    height: `${height}px`
    // transform: `rotate(${rotation}deg)`
  })

  // const handleRotationChange = (e) => {
  //   setRotation(e.target.value)
  // }

  //   const handleMouseDown = (direction) => {
  //     setIsResizing(true)
  //     setResizeDirection(direction)
  //   }

  //   const handleMouseUp = () => {
  //     setIsResizing(false)
  //     setResizeDirection('')
  //   }

  //   const handleMouseMove = (event) => {
  //     if (isResizing) {
  //       handleResize(resizeDirection, event.movementX, event.movementY)
  //     }
  //   }

  //   const handleUpdateComponent = (updatedProperties) => {
  //     dispatch(updateComponent(componentSelected.id, updatedProperties))
  //   }

  const handleResize = (direction, movementX, movementY) => {
    const { width, height } = properties?.style || {}
    let newWidth = parseInt(width, 10)
    let newHeight = parseInt(height, 10)

    switch (direction) {
      case 'top-left':
        newWidth += movementX
        newHeight += movementY
        break
      case 'top':
        newHeight += movementY
        break
      case 'top-right':
        newWidth += movementX
        newHeight -= movementY
        break
      case 'left':
        newWidth += movementX
        break
      case 'right':
        newWidth += movementX
        break
      case 'bottom-left':
        newWidth += movementX
        newHeight += movementY
        break
      case 'bottom':
        newHeight += movementY
        break
      case 'bottom-right':
        newWidth += movementX
        newHeight += movementY
        break
      default:
        break
    }

    const updatedProperties = {
      properties: {
        ...componentSelected.properties,
        style: {
          width: `${newWidth}px`,
          height: `${newHeight}px`
        }
      }
    }

    setImageSize(updatedProperties.properties.style)
    // handleUpdateComponent(updatedProperties)
  }

  useEffect(() => {
    dispatch(getTarget())
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  useEffect(() => {
    setIsLoading(!(target && target.tag))
  }, [target])

  const handleTarget = (ev) => {
    setDragStart({ x: ev.clientX, y: ev.clientY })
    dispatch(cleanEventAndUpdateComponent(componentSelected, ev.target.id))
  }

  useEffect(() => {
    const handleDrag = (event) => {
      const movementX = event.clientX - dragStart.x
      const movementY = event.clientY - dragStart.y
      handleResize(resizeDirection, movementX, movementY)
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleDrag)
    } else {
      document.removeEventListener('mousemove', handleDrag)
    }

    return () => {
      document.removeEventListener('mousemove', handleDrag)
    }
  }, [isResizing, dragStart, resizeDirection])

  const handleMouseDown = (direction) => {
    setIsResizing(true)
    setResizeDirection(direction)
  }

  const handleMouseUp = () => {
    setIsResizing(false)
    setResizeDirection('')
  }

  const handleDrop = (ev) => {
    ev.preventDefault()
    const tag = localStorage.getItem('text')
    dispatch(createComponent(ev.target.id, tag))
  }

  const handleDragOver = (ev) => {
    ev.preventDefault()
  }

  function createTreeFromJSON(json, idx) {
    let { tag, children, properties, attributes, classes } = json
    attributes = { ...attributes, id: json.id }
    let componentStyle = target.id === json.id ? initialStylesTarget : {}
    let states = {}

    const event = properties.event
    if (event && event.length) {
      states = properties?.states[event]
    }
    if (componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, border: '5px solid #14A9FF' }
    }
    if (properties.style) {
      componentStyle = { ...componentStyle, ...properties.style }
    }
    if (json.tag === 'img' && componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, ...imageSize }

      return (
        <div
          key={idx}
          onClick={handleTarget}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ position: 'relative' }}
        >
          <img style={{ ...componentStyle }} {...attributes} />

          <div className="resize-handles" key="resizeHandles">
            <div
              className="resize-handle top-left"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('top-left')}
            />
            <div
              className="resize-handle top"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('top')}
            />
            <div
              className="resize-handle top-right"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('top-right')}
            />
            <div
              className="resize-handle left"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('left')}
            />
            <div
              className="resize-handle right"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('right')}
            />
            <div
              className="resize-handle bottom-left"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('bottom-left')}
            />
            <div
              className="resize-handle bottom"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('bottom')}
            />
            <div
              className="resize-handle bottom-right"
              onMouseUp={handleMouseUp}
              onMouseDown={() => handleMouseDown('bottom-right')}
            />
          </div>
          {children && children[0]
            ? children.map((child, idx) => createTreeFromJSON(child, idx))
            : properties?.innerHTML || null}
        </div>
      )
    } else {
      return React.createElement(
        tag ? tag : 'div',
        {
          key: idx,
          onClick: handleTarget,
          onDrop: handleDrop,
          onDragOver: handleDragOver,
          style: { ...componentStyle, ...states },
          ...attributes,
          ...classes
        },
        children && children[0]
          ? children.map((child, idx) => createTreeFromJSON(child, idx))
          : properties?.innerHTML || null
      )
    }
  }

  const initialStylesTarget = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  return isLoading ? <Loader /> : createTreeFromJSON(target)
}

export default PaintAllE
