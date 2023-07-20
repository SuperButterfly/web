import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css' // Import the styles for the grid layout
import 'react-resizable/css/styles.css' // Import the styles for the resizable elements

const ResponsiveGridLayout = WidthProvider(Responsive)

const RenderElement = React.memo(({ element }) => {
  const isVoidElement = ['img', 'input', 'br', 'hr', 'meta', 'link'].includes(
    element.tag
  )

  if (isVoidElement) {
    return React.createElement(element.tag, {
      ...element.attributes,
      ...element.properties?.style
    })
  }

  return React.createElement(
    element.tag,
    {
      ...element.attributes,
      style: element.properties?.style
    },
    element.properties?.innerHTML
  )
})

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
          w: 4, // initial width (cols) of the element
          h: 2, // initial height (rows) of the element
          minW: 2, // minimum width (cols) of the element
          minH: 1 // minimum height (rows) of the element
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
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
        style: {
          borderRadius: '4px',
          border: '1px solid #ccc'
        },
        grid: {
          x: 4,
          y: 0,
          w: 4,
          h: 2,
          minW: 2,
          minH: 1
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
          h: 2,
          minW: 2,
          minH: 1
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
    rowHeight="auto"
    margin={[10, 10]}
    isResizable={true}
    isDraggable={true}
  >
    {target.children.map((child) => (
      <div
        key={child.id}
        data-grid={{
          x: child.properties.grid.x,
          y: child.properties.grid.y,
          w: child.properties.grid.w,
          h: child.properties.grid.h,
          minW: child.properties.grid.minW,
          minH: child.properties.grid.minH
        }}
      >
        <RenderElement element={child} />
      </div>
    ))}
  </ResponsiveGridLayout>
)

export default Render
