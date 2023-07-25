import './componentsCommunity.css';
import { useState } from 'react';
import Navbar from './navbar/Navbar';
import Card from './card/Card'
import Cards from './cards/Cards';
const ComponentsCommunity = ()=>{
    const [categories, setCategories] = useState({})
    const handleClick = ev =>{
        
        const newState ={}// Object.keys(categories).filter(cat=>cat!==ev.target.name)
        for(const key in categories){
            if(key!==ev.target.name){
                newState[key]=categories[key]
            }
        }
        console.log(newState)
        setCategories(newState)
    }
    return(
        <div className={"componentsComunityContainer"}>
            <Navbar setCategories={setCategories}/>
            <div className='selectedCatContainer'>
                {
                    categories
                    &&
                    Object.keys(categories).map(icon=><img
                    name={icon}
                    onClick={handleClick}
                    className='imgIcons2'
                        src={categories[icon]}
                    />)
                }
            </div>
            <Cards/>
        </div>
    )
}

export default ComponentsCommunity