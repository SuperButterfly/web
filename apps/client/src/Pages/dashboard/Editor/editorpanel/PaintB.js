/* eslint-disable no-redeclare */
/* global localStorage */
import './PaintAll.css'
import { useState, useEffect, createElement } from 'react'
import Loader from './Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {
  createComponent,
  cleanEventAndUpdateComponent
} from '@/redux/actions/component.js'
import { getTarget, cleanTarget } from '@/redux/actions/projects.js'

const PaintAll = () => {
  const { target } = useSelector((state) => state.project)
  const { componentSelected, width } = useSelector((state) => state?.component)
  const { properties } = useSelector(
    (state) => state?.component?.componentSelected
  )
  const { breakpoints } = useSelector((state) => state.breakpoints)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    dispatch(getTarget())
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    return () => dispatch(cleanTarget())
  }, [])

  useEffect(() => {
    setIsLoading(!(target && target.tag))
  }, [target])

  useEffect(() => {
    if (properties && Object.keys(properties).length) {
      dispatch(getTarget())
    }
  }, [properties])

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

  const selectStyles = (incomingProps, states) => {
    let properties = {}
    const sizes = [479, 767, 991, 1200, 1600, 1920]
    if (width <= sizes[0]) {
      if (
        breakpoints[0] &&
        incomingProps.mq479 &&
        Object.keys(incomingProps.mq479).length > 0
      ) {
        properties = { ...incomingProps.style, ...incomingProps.mq479 }
      }
    } else if (width <= sizes[1] && width > sizes[0]) {
      if (
        breakpoints[1] &&
        incomingProps.mq767 &&
        Object.keys(incomingProps.mq767).length > 0
      ) {
        properties = { ...incomingProps.style, ...incomingProps.mq767 }
      }
    } else if (width <= sizes[2] && width > sizes[1]) {
      if (
        breakpoints[2] &&
        incomingProps.mq991 &&
        Object.keys(incomingProps.mq991).length > 0
      ) {
        properties = { ...incomingProps.style, ...incomingProps.mq991 }
      }
    } else if (width <= sizes[3] && width > sizes[2]) {
      if (
        breakpoints[3] &&
        incomingProps.mq1200 &&
        Object.keys(incomingProps.mq1200).length > 0
      ) {
        properties = { ...incomingProps.style, ...incomingProps.mq1200 }
      }
    } else if (width <= sizes[4] && width > sizes[3]) {
      if (
        breakpoints[4] &&
        incomingProps.mq1600 &&
        Object.keys(incomingProps.mq1600).length > 0
      ) {
        properties = { ...incomingProps.style, ...incomingProps.mq1600 }
        // console.log('target: styles: ',incomingProps.style)
      }
    }
    if (!Object.keys(properties).length) {
      if (incomingProps.mq1920 && incomingProps.mq1920) {
        properties = { ...incomingProps.style, ...incomingProps.mq1920 }
      } else {
        properties = incomingProps.style
      }
    }
    if (states && Object.keys(states).length > 0) {
      properties = { ...properties, ...states }
    }
    return properties
  }

  function createTreeFromJSON(json, idx) {
    let { tag, children, properties, attributes, classes } = json
    attributes = { ...attributes, id: json.id }
    let componentStyle = target.id === json.id ? initialStylesTarget : {}
    let states = {}

    const event = properties?.event
    if (event && event.length) {
      states = properties?.states[event]
    }

    if (componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, border: '5px solid #14A9FF' }
    }
    if (properties?.style) {
      const dinamicStyles = selectStyles(properties, states, json.id)
      // console.log(properties.style)
      componentStyle = { ...componentStyle, ...dinamicStyles }

      return createElement(
        tag || 'div',
        {
          key: idx,
          onClick: handleTarget,
          onDrop: handleDrop,
          onDragOver: handleonDragOver,
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

  return isLoading ? <Loader /> : createTreeFromJSON(target)
}

export default PaintAll
