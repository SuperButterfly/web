

export const initialNodes = [
    {
        id: '1',
        type: 'excel',
        data: {
          label: 'excel',
          image: './icons/excel-svgrepo-com.svg',// Ruta de la imagen para el nodo 'input'
        },
        position: { x: 0, y: 0 }
      },
    {
      id: '2',
      type:'gmail',
      data: { 
        label: 'Gmail' ,
        image: './icons/gmail-svgrepo-com.svg',
    },
      position: { x: 0, y: 100 }
    },
    {
      id: '2a',
      type:'trello',
      data: { 
        label: 'Trello',
        image: './icons/trello-logo-svgrepo-com.svg',
    },
      position: { x: 0, y: 200 }
    },
    {
      id: '2b',
      type:'slack',
      data: { 
        label: 'Slack',
        image: './icons/slack-new-logo-logo-svgrepo-com.svg',
    },
      position: { x: 0, y: 300 }
    },
    {
      id: '2c',
      type:'aythen',
      data: {
        label: 'Aythen',
        image:'./icons/logoAythen.png',
    },
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