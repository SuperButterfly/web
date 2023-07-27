import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css' // Import the styles for the grid layout
//import "react-resizable/css/styles.css"; // Import the styles for the resizable elements
//import ResizableImg from "./ResizableImg";
import { ResizableBox } from 'react-resizable'

const ResponsiveGridLayout = WidthProvider(Responsive)

const RenderElement = ({ element }) => {
  const renderChildren = (children) => {
    return children.map((child) => (
      <div key={child.id} data-grid={child.properties.grid}>
        <RenderElement element={child} />
      </div>
    ))
  }

  const inlineStyle = element.properties?.style || {}

  // Check if the tag is an "img" tag
  if (element.tag === 'img') {
    return (
      <ResizableBox
        width={inlineStyle.width || 200} // Default width
        height={inlineStyle.height || 200} // Default height
        onResize={(e, data) => {
          // Update the width and height in the inline style
          inlineStyle.width = `${data.size.width}px`
          inlineStyle.height = `${data.size.height}px`
        }}
        resizeHandles={['se']} // Enable resizing for southeast (bottom-right) corner
      >
        <img
          src={element.properties?.src}
          style={{
            ...inlineStyle,
            display: 'block',
            width: '70%',
            height: '20%'
          }}
          alt="Resizable Image"
        />
      </ResizableBox>
    )
  }

  return React.createElement(
    element.tag,
    {
      ...element.attributes,
      style: {
        ...inlineStyle
      }
    },
    renderChildren(element.children)
  )
}

const HTMLDocument = ({ target }) => {
  const layoutElements = target.children.map((child) => (
    <div key={child.id} data-grid={child.properties.grid}>
      <RenderElement element={child} />
    </div>
  ))

  const onResize = (layout, oldItem, newItem, placeholder, e, element) => {
    if (element.tagName === 'IMG') {
      const imgElement = element
      const { width, height } = newItem
      imgElement.style.width = `${width}px`
      imgElement.style.height = `${height}px`
    }
  }

  return (
    <div className="layout-wrapper" style={{ height: '1000px' }}>
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        margin={[10, 10]}
        isResizable={true}
        isDraggable={true}
        resizeHandles={['se']}
        onResize={onResize}
      >
        {layoutElements}
      </ResponsiveGridLayout>
    </div>
  )
}

const target = {
  id: '6bbc4205-22ad-4e58-8368-405bd06a1678',
  name: 'Page 2',
  tag: 'div',
  order: 0,
  properties: {
    style: {
      width: 'auto',
      height: 'auto'
    },
    mq1600: {},
    mq1200: {},
    mq991: {},
    mq767: {},
    mq479: {},
    states: {},
    event: ''
  },
  attributes: {},
  nativeAttributes: [],
  clases: {},
  isDeleted: false,
  isshow: true,
  createdAt: '2023-07-08T20:39:56.337Z',
  updatedAt: '2023-07-18T19:21:16.402Z',
  children: [
    {
      id: '973fc33f-b344-4450-8601-40f4bf8feeab',
      name: 'Button',
      tag: 'button',
      order: 0,
      properties: {
        innerHTML: 'button',
        style: {
          padding: '8px 16px',
          borderRadius: '8px',
          border: '0.5px solid #3333ff',
          color: '#3333ff',
          display: 'block'
        },
        grid: {
          x: 0,
          y: 0,
          w: 2, // initial width (cols) of the element
          h: 2
        },
        mediaQueries: {},
        clases: {},
        states: {}
      },
      attributes: {
        value: 'button',
        id: ''
      },
      nativeAttributes: ['value'],
      clases: {},
      isDeleted: false,
      isshow: true,
      createdAt: '2023-07-14T17:46:17.516Z',
      updatedAt: '2023-07-17T14:53:23.060Z',
      ComponentChildren: {
        createdAt: '2023-07-14T17:46:17.548Z',
        updatedAt: '2023-07-14T17:46:17.548Z',
        parentId: '6bbc4205-22ad-4e58-8368-405bd06a1678',
        childrenId: '973fc33f-b344-4450-8601-40f4bf8feeab'
      },
      children: []
    },
    {
      id: '4c9a8d0f-5dca-42f5-96f7-678c888a132f',
      name: 'Image',
      tag: 'img',
      order: 1,
      properties: {
        src: 'https://i.blogs.es/ceda9c/dalle/1366_2000.jpg',
        alt: 'Example Image',
        style: {
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '150px',
          height: '150px'
        },
        grid: {
          x: 4,
          y: 0,
          w: 4,
          h: 2
        }
      },
      attributes: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image'
      },
      nativeAttributes: ['src', 'alt'],
      clases: {},
      isDeleted: false,
      isshow: true,
      createdAt: '2023-07-19T09:12:34.567Z',
      updatedAt: '2023-07-19T09:12:34.567Z',
      ComponentChildren: {
        createdAt: '2023-07-19T09:12:34.590Z',
        updatedAt: '2023-07-19T09:12:34.590Z',
        parentId: '6bbc4205-22ad-4e58-8368-405bd06a1678',
        childrenId: '4c9a8d0f-5dca-42f5-96f7-678c888a132f'
      },
      children: []
    },
    {
      id: 'ab3c9566-69db-48c0-8970-4328453679a2',
      name: 'Div',
      tag: 'div',
      order: 2,
      properties: {
        innerHTML: '<p>This is a default div content</p>',
        style: {
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ff9900',
          backgroundColor: '#ffffcc',
          display: 'block'
        },
        grid: {
          x: 8,
          y: 0,
          w: 4,
          h: 2
        }
      },
      attributes: {},
      nativeAttributes: [],
      clases: {},
      isDeleted: false,
      isshow: true,
      createdAt: '2023-07-20T08:30:45.123Z',
      updatedAt: '2023-07-20T08:30:45.123Z',
      ComponentChildren: {
        createdAt: '2023-07-20T08:30:45.148Z',
        updatedAt: '2023-07-20T08:30:45.148Z',
        parentId: '6bbc4205-22ad-4e58-8368-405bd06a1678',
        childrenId: 'ab3c9566-69db-48c0-8970-4328453679a2'
      },
      children: []
    }
  ]
}

const Render = () => <HTMLDocument target={target} />

export default Render
