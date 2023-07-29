/* version fabric */

import React, { useEffect, useRef } from 'react'

import { fabric } from 'fabric'

const FabricVersion = () => {
  const canvasRef = useRef(null)
  const verticalGuideRef = useRef(null)
  const horizontalGuideRef = useRef(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)

    // Ejemplo de datos en formato JSON
    const jsonData = [
      {
        type: 'text',
        text: 'Hola',
        left: 100,
        top: 100,
        fontSize: 24
      },
      {
        type: 'text',
        text: 'Lorem ipsum',
        left: 190,
        top: 150,
        fontSize: 44
      },
      {
        type: 'image',
        src: 'https://example.com/image.jpg',
        left: 500,
        top: 300,
        width: 200,
        height: 150
      },

      {
        type: 'image',
        src: 'https://example.com/image.jpg',
        left: 600,
        top: 400,
        width: 300,
        height: 150
      }
    ]

    // Función para renderizar los elementos desde el JSON
    const renderElements = (data) => {
      data.forEach((element) => {
        if (element.type === 'text') {
          const text = new fabric.Text(element.text, {
            left: element.left,
            top: element.top,
            fontSize: element.fontSize
          })
          canvas.add(text)
        } else if (element.type === 'rect') {
          const rect = new fabric.Rect({
            width: element.width,
            height: element.height,
            fill: element.fill,
            left: element.left,
            top: element.top
          })
          canvas.add(rect)
        } else if (element.type === 'image') {
          fabric.Image.fromURL(element.src, (img) => {
            img.set({
              left: element.left,
              top: element.top,
              width: element.width,
              height: element.height
            })
            canvas.add(img)
          })
        }
      })
    }

    renderElements(jsonData)

    // Habilitar la interacción de arrastrar y soltar
    canvas.on('object:moving', (e) => {
      const activeObject = e.target
      const activeObjectCenterX = activeObject.left + activeObject.width / 2
      const activeObjectCenterY = activeObject.top + activeObject.height / 2

      const objects = canvas.getObjects().filter((obj) => obj !== activeObject)

      let closestHorizontal = null
      let closestVertical = null

      objects.forEach((obj) => {
        const objCenterX = obj.left + obj.width / 2
        const objCenterY = obj.top + obj.height / 2

        // Buscar la guía horizontal más cercana
        if (Math.abs(objCenterY - activeObjectCenterY) < 10) {
          if (
            !closestHorizontal ||
            Math.abs(objCenterY - activeObjectCenterY) <
              Math.abs(closestHorizontal - activeObjectCenterY)
          ) {
            closestHorizontal = objCenterY
          }
        }

        // Buscar la guía vertical más cercana
        if (Math.abs(objCenterX - activeObjectCenterX) < 10) {
          if (
            !closestVertical ||
            Math.abs(objCenterX - activeObjectCenterX) <
              Math.abs(closestVertical - activeObjectCenterX)
          ) {
            closestVertical = objCenterX
          }
        }
      })

      if (closestHorizontal !== null) {
        activeObject.top = closestHorizontal - activeObject.height / 2
      }

      if (closestVertical !== null) {
        activeObject.left = closestVertical - activeObject.width / 2
      }

      if (closestHorizontal !== null || closestVertical !== null) {
        canvas.renderAll()
        showGuideLines()
      }
    })

    // Crear las líneas guía
    const createGuideLine = () => {
      const guideLine = new fabric.Line([0, 0, 0, canvas.height], {
        stroke: '#999999',
        strokeWidth: 1,
        selectable: false,
        evented: false,
        visible: false
      })
      canvas.add(guideLine)
      return guideLine
    }

    const showGuideLines = () => {
      const activeObject = canvas.getActiveObject()
      if (!activeObject) return

      const activeObjectCenterX = activeObject.left + activeObject.width / 2
      const activeObjectCenterY = activeObject.top + activeObject.height / 2

      let verticalGuideVisible = false
      let horizontalGuideVisible = false

      canvas.getObjects().forEach((obj) => {
        if (obj === activeObject) return

        const objCenterX = obj.left + obj.width / 2
        const objCenterY = obj.top + obj.height / 2

        // Mostrar la línea guía vertical si el objeto está cerca del centro horizontal
        if (Math.abs(objCenterX - activeObjectCenterX) < 10) {
          verticalGuideRef.current.set({
            x1: objCenterX,
            x2: objCenterX,
            visible: true
          })
          verticalGuideVisible = true
        }

        // Mostrar la línea guía horizontal si el objeto está cerca del centro vertical
        if (Math.abs(objCenterY - activeObjectCenterY) < 10) {
          horizontalGuideRef.current.set({
            y1: objCenterY,
            y2: objCenterY,
            visible: true
          })
          horizontalGuideVisible = true
        }
      })

      // Ocultar las líneas guía si no están siendo utilizadas
      if (!verticalGuideVisible) {
        verticalGuideRef.current.set({ visible: false })
      }
      if (!horizontalGuideVisible) {
        horizontalGuideRef.current.set({ visible: false })
      }

      canvas.renderAll()
    }

    verticalGuideRef.current = createGuideLine()
    horizontalGuideRef.current = createGuideLine()

    canvas.selection = true // Habilitar la selección de objetos
  }, [])

  return <canvas ref={canvasRef} width={'1200px'} height={'1000px'} />
}

export default FabricVersion
