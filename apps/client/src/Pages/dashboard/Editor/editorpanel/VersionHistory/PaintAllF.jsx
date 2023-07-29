//version del grid pero mapeando el target real
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createComponent,
  cleanEventAndUpdateComponent
} from '@/redux/actions/component'
import { getTarget } from '@/redux/actions/projects'
import Loader from '../Loader/Loader'
import '../PaintAll.css'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive)

const PaintAll = () => {
  const { target } = useSelector((state) => state.project)
  const { componentSelected } = useSelector((state) => state?.component)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getTarget())
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false) // In case of an error, set isLoading to false to prevent infinite loading.
      })
  }, [dispatch])

  useEffect(() => {
    setIsLoading(!(target && target.tag))
  }, [target])

  const handleTarget = (ev) => {
    dispatch(cleanEventAndUpdateComponent(componentSelected, ev.target.id))
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
    if (!json) {
      return null
    }

    let { tag, children, properties, attributes, classes } = json
    attributes = { ...attributes, id: json.id }
    let componentStyle = target.id === json.id
    let states = {}
    if (properties && properties.event != null) {
      const event = properties.event || ''
      if (event && event.length && properties.states != null) {
        states = properties.states[event] || {}
      }
    }
    if (componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, border: '5px solid #14A9FF' }
    }
    if (properties.style) {
      componentStyle = { ...componentStyle, ...properties.style }
    }

    // Wrap the element in a React-Grid-Layout item
    return (
      <div key={idx} data-grid={json.layout}>
        {React.createElement(
          tag ? tag : 'div',
          {
            onClick: handleTarget,
            onDrop: handleDrop,
            onDragOver: handleDragOver,
            style: {
              ...componentStyle,
              ...states,
              width: '100%',
              height: '100%'
            },
            ...attributes,
            ...classes
          },
          children && children[0]
            ? children.map((child, idx) => createTreeFromJSON(child, idx))
            : properties?.innerHTML || null
        )}
      </div>
    )
  }

  return isLoading ? (
    <Loader />
  ) : (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      margin={[10, 10]}
      isResizable={true}
      isDraggable={true}
    >
      {createTreeFromJSON(target)}
    </ResponsiveGridLayout>
  )
}

export default PaintAll
