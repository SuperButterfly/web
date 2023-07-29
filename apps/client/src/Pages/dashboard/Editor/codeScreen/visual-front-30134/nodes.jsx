import logoSlack from './icons/slack.png';
import logoAythen from './icons/logoAythen.png';
import logoTrello from './icons/trello.png';
import logoGmail from './icons/Gmail.png';
import logoExcel from './icons/excel.png';
import dotsBtn from './icons/3dots.png';

export const initialNodes = [
    {
        id: '1',
        type: 'excel',
        data: {
        label: (
            <div style={{display:'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0 8px 0 8px'}}>
            <img
            src={logoExcel}
            alt='Excel'
            style={{height:'20px', width:'30px'}}
            />
            <p>Info</p>
            <img
            src={dotsBtn}
            alt='dotsBtn'
            style={{height:'15px', width:'auto',cursor:'pointer'}}
            />
            </div>
            ),
        },
        position: { x: 0, y: 0 }
        },
    {
        id: '2',
        type:'gmail',
        data: { 
        label: (
            <div style={{display:'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0 8px 0 8px'}}>
            <img
            src={logoGmail}
            alt='Gmail'
            style={{height:'20px', width:'auto'}}
            />
            <p>Info</p>
            <img
            src={dotsBtn}
            alt='dotsBtn'
            style={{height:'15px', width:'auto',cursor:'pointer'}}
            />
            </div>
        ),
        },
        position: { x: 0, y: 100 }
        },
    {
        id: '2a',
        type:'trello',
        data: { 
        label: (
            <div style={{display:'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0 8px 0 8px'}}>
            <img
            src={logoTrello}
            alt='Trello'
            style={{height:'20px', width:'20px'}}
            />
            <p>Info</p>
            <img
            src={dotsBtn}
            alt='dotsBtn'
            style={{height:'15px', width:'auto',cursor:'pointer'}}
            />
            </div>
        ),
        },
        position: { x: 0, y: 200 }
        },
    {
        id: '2b',
        type:'slack',
        data: { 
        label:(
            <div style={{display:'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0 8px 0 8px'}}>
            <img
            src={logoSlack}
            alt='Slack'
            style={{height:'20px', width:'20px'}}
            />
            <p>Info</p>
            <img
            src={dotsBtn}
            alt='dotsBtn'
            style={{height:'15px', width:'auto',cursor:'pointer'}}
            />
            </div>
        ),
        },
        position: { x: 0, y: 300 }
        },
    {
        id: '2c',
        type:'aythen',
        data: {
        label: (
            <div style={{display:'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding:'0 8px 0 8px'}}>
            <img
            src={logoAythen}
            alt='Aythen'
            style={{height:'20px', width:'20px'}}
            />
            <p>Info</p>
            <img
            src={dotsBtn}
            alt='dotsBtn'
            style={{height:'15px', width:'auto',cursor:'pointer'}}
            />
            </div> 
        ),
        },
        position: { x: 0, y: 400 }
    },
]
  
export const initialEdges = [
    { id: 'e12', source: '1', target: '2', animated: true, label: '' },
    { id: 'e13', source: '1', target: '3', animated: true, label: '' },
    { id: 'e22a', source: '2', target: '2a', animated: true, label: '' },
    { id: 'e22b', source: '2', target: '2b', animated: true, label: '' },
    { id: 'e22c', source: '2', target: '2c', animated: true, label: '' },
    { id: 'e2c2d', source: '2c', target: '2d', animated: true, label: '' }
]