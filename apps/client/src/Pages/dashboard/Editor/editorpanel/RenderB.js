import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css' // Import the styles for the grid layout
import 'react-resizable/css/styles.css' // Import the styles for the resizable elements

const ResponsiveGridLayout = WidthProvider(Responsive)

const RenderElement = ({ element }) => {
  const renderChildren = (children) => {
    return children.map((child) => (
      <div key={child.id} data-grid={child.properties.grid}>
        <RenderElement element={child} />
      </div>
    ))
  }

  return React.createElement(
    element.tag,
    {
      ...element.attributes,
      style: element.properties?.style
      //className: Object.keys(element.classes)?.join(' '),
    },
    renderChildren(element.children)
  )
}
const HTMLDocument = ({ target }) => <RenderElement element={target} />
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
          y: 8,
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
const Render = () => (
  <ResponsiveGridLayout
    className="layout"
    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    rowHeight="auto" // Use "auto" for flexible row height
    margin={[10, 10]}
    isResizable={true}
    isDraggable={true}
  >
    <div key={target.id} data-grid={target.properties.grid}>
      <HTMLDocument target={target} />
    </div>
  </ResponsiveGridLayout>
)

export default Render
