import React from 'react'

export const Buttons = () => {
  return (
    <div style={{width:"100%"}}>
        <button type='button' style={{backgroundColor: "white", width: "40%"}} className='buttonToolBar'>Properties</button>
        <button type='button' style={{borderBottom: "1px solid rgba(120, 120, 120, 0.4)", borderRight: "1px solid rgba(120, 120, 120, 0.4)", width:"30%"}} className='buttonToolBar'>Code</button>
        <button type='button' style={{borderBottom: "1px solid rgba(120, 120, 120, 0.4)", width: "30%"}} className='buttonToolBar'>Export</button>
    </div>
  )
}