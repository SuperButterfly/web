import React from 'react'
import ResizeHandle from './Resize'
import { useDispatch, useSelector } from 'react-redux'
import {
  cleanEventAndUpdateComponent,
  createComponent
} from '@/redux/actions/component'

const ComponentRenderer = ({ target, imageSize, onResize }) => {
  const { componentSelected } = useSelector((state) => state?.component)
  const dispatch = useDispatch()

  const handleTarget = (ev) => {
    dispatch(cleanEventAndUpdateComponent(componentSelected, ev.target.id))
  }

  const handleDrop = (ev) => {
    ev.preventDefault()
    const tag = localStorage.getItem('text')
    dispatch(createComponent(ev.target.id, tag))
  }

  const handleonDragOver = (ev) => {
    ev.preventDefault()
  }

  function createTreeFromJSON(json, idx) {
    if (!json) {
      return null
    }

    let { tag, children, properties, attributes, classes } = json
    attributes = { ...attributes, id: json.id }
    let componentStyle =
      target && target.id === json.id ? { border: '2px solid blue' } : {}
    let states = {}

    const event = properties?.event
    if (event && event.length) {
      states = properties?.states?.[event] || {}
    }
    if (properties?.style) {
      componentStyle = { ...componentStyle, ...properties.style }
    }
    if (json.tag === 'img' && target && target.id === json.id) {
      componentStyle = { ...componentStyle, ...imageSize }

      return (
        <div
          key={idx}
          onClick={handleTarget}
          onDrop={handleDrop}
          onDragOver={handleonDragOver}
          style={{ position: 'relative' }}
        >
          <img style={{ ...componentStyle }} {...attributes} />
          <div className="resize-handles" key="resizeHandles">
            {/* Render the resize handles */}
            {/* ... */}
          </div>
          {children && children[0]
            ? children.map((child, idx) => createTreeFromJSON(child, idx))
            : properties?.innerHTML || null}
        </div>
      )
    } else {
      return (
        <tag
          key={idx}
          onClick={handleTarget}
          onDrop={handleDrop}
          onDragOver={handleonDragOver}
          style={{ ...componentStyle, ...states }}
          {...attributes}
          {...classes}
        >
          {children && children[0]
            ? children.map((child, idx) => createTreeFromJSON(child, idx))
            : properties?.innerHTML || null}
        </tag>
      )
    }
  }

  return (
    <>
      {createTreeFromJSON(target)}
      <ResizeHandle onResize={onResize} />
    </>
  )
}

export default ComponentRenderer
