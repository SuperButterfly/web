import { useState } from 'react'
import { Data } from './data'
import folder from "../../../assets/folder.svg"
import right from "../../../assets/angle-right.svg"
import down from "../../../assets/angle-down.svg"
const Menu = () => {

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className='menu'>
      
      <div style={{background: "whitesmoke", padding: "1rem"}}>
        <span className='text' style={{fontWeight:"400"}}>Pages</span>
      </div>

       {Data.map((item, index) => {
          return (
            <>
              <div className='menu-sections' onClick={() => toggle(index)} key={index}>
                <img src={clicked === index ? down : right} className='sidebar-icon'/>
                <img src={folder} alt="icon" className='sidebar-icon'/>
                <span style={{width: "5.5rem"}} className='text'>{item.name}</span>
              </div>
              {clicked === index ? (
                <div className='menu-sections2'>
                  {item.answer.map(el => 
                    <div style={{marginLeft: "4rem", display: "flex", gap:"10px"}}>
                      {item.name === "Content" ?  "Aa" :  <img src={folder} alt="icon" className='sidebar-icon'/>}
                      <span className='text-menu'> {el} </span>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          );
        })}

    </div>
  )
}

export default Menu