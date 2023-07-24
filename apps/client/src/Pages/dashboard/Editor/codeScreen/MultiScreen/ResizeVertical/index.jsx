import React, { useState, useRef, useEffect } from 'react'
import styled from './ResizeVertical.module.css'

const ResizeVertical = ({ children, height = '100%', width = '100%' }) => {
  const [isResizing, setIsResizing] = useState(false)
  const [startPosition, setStartPosition] = useState(0)
  const [startheight1, setStartheight1] = useState(0)
  const [startheight2, setStartheight2] = useState(0)
  const [conditionalClass, setConditionalClass] = useState({})

  const containerRef = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)

  const styleContainer = {
    height,
    width
  }

  const handleMouseDown = (event) => {
    setIsResizing(true)
    setStartPosition(event.clientY)
    setStartheight1(
      parseInt(getComputedStyle(contentRef1.current).getPropertyValue('height'))
    )
    setStartheight2(
      parseInt(getComputedStyle(contentRef2.current).getPropertyValue('height'))
    )
  }

  const handleMouseMove = (event) => {
    if (!isResizing) return
    const height1 = startheight1 + (event.clientY - startPosition)
    const height2 = startheight2 - (event.clientY - startPosition)
    const maxheight =
      parseInt(
        getComputedStyle(containerRef.current).getPropertyValue('height')
      ) * 0.75
    if (height1 < maxheight && height2 < maxheight) {
      contentRef1.current.style.height = `${height1}px`
      contentRef2.current.style.height = `${height2}px`
    }
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  useEffect(
    () => {
      if (!children[1]) {
        setConditionalClass({ height, width })
      } else {
        setConditionalClass({})
      }
    }, [children]
  )

  return (
    <div
      className={styled.container}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={containerRef}
      style={styleContainer}
    >
      <div className={children[1] ? styled.content1 : styled.content0} ref={contentRef1}
        style={conditionalClass}>
        {children[0]}
      </div>
      {children[1] && <div className={styled.resizeHandle} onMouseDown={handleMouseDown}></div>}
      {children[1] && <div className={styled.content2} ref={contentRef2}>
        {children[1]}
      </div>}
    </div>
  )
}

export default ResizeVertical
