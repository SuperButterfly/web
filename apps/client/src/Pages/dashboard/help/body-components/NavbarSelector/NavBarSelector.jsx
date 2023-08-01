import { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import style from './NavBarSelector.module.css'
const NavBarSelector=({positionName})=>{
    console.log(positionName)
const[name,setName]=useState(positionName)
useEffect(() => {
  setName(positionName)
  }, [positionName]);
  return (
    name && name.name ? (
      <div className={style.container}>
        <AiOutlineArrowLeft className={style.ico} />
        <div className={style.bottons}>Back</div>
        <h1>Article on:</h1>
        <div className={style.bottons}>{name.name}</div>
        <div className={style.information}><p>{name.description}</p></div>
      </div>
    ) : null
  );
    }
export default NavBarSelector