 import { useEffect, useState } from 'react'
import style from './FilterBody.module.css'

const FilterBody=({data,positionData, handleSelector})=>{
    const [position,setPosition]=useState(positionData)
    const[filters,setFilters]=useState(data)
    useEffect(()=>{
        setPosition(positionData)
    },[positionData])
    const handlePosicion=(position)=>{
        handleSelector(position);
    }


    return <div className={style.container}>
     
        <h1>Creating a proyect</h1>
        {filters.map((data,index)=>
        <div className={position===index?style.itemSelect:style.item} onClick={()=>handlePosicion(index)}>
            {data.name}
        </div>)}
      
         
    </div>

}
export default FilterBody