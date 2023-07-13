export const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'input' },
      position: { x: 0, y: 0 }
    },
    {
      id: '2',
      data: { label: 'Gmail' },
      position: { x: 0, y: 100 }
    },
    {
      id: '2a',
      data: { label: 'Trello' },
      position: { x: 0, y: 200 }
    },
    {
      id: '2b',
      data: { label: 'Slack' },
      position: { x: 0, y: 300 }
    },
    {
      id: '2c',
      data: { label: 'Ayhen' },
      position: { x: 0, y: 400 }
    }
  ]
  
  export const initialEdges = [
      { id: 'e12', source: '1', target: '2', animated: true, label: '' },
      { id: 'e13', source: '1', target: '3', animated: true, label: '' },
      { id: 'e22a', source: '2', target: '2a', animated: true, label: '' },
      { id: 'e22b', source: '2', target: '2b', animated: true, label: '' },
      { id: 'e22c', source: '2', target: '2c', animated: true, label: '' },
      { id: 'e2c2d', source: '2c', target: '2d', animated: true, label: '' }
  ]
  