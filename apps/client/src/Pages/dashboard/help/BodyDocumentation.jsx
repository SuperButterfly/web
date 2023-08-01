import { useState } from 'react';
import style from './BodyDocymentation.module.css'
import FilterBody from './body-components/FilterBody';
import NavBarSelector from './body-components/NavbarSelector/NavBarSelector'; 
const BodyDocumentation=()=>{
    const[position,setPosition]=useState(0);
    const[data,setData]=useState( 
       [ {name:'Getting stared' ,content:"data" ,description:"Stard your learming the basics of Teleport HQ"},
        {name:'Elements',content:'Elements',description:'find your elements here'},
        {name:'Layout & Design',content:'Layout & Design',description:'  Design here'},
        {name:'Asset management',content:'Asset management',description:'Asset management here'},
        {name:'Code snippets & Inter...',content:'Code snippets & Inter...',description:'Code snippets & Inter...'},
        {name:'Project settings',content:'Project settings',description:'Project settings'},
        {name:'Hosting',content:'Hosting',description:'Hosting'},
        {name:'Code export',content:'Code export',description:'Code export'},
        {name:'Collaboration',content:'Collaboration',description:'Collaboration'},
        {name:'Account',content:'Account',description:'Account'},
        {name:'Billing',content:'Billing',description:'Billing'},
        {name:'Figma integration',content:'Figma integration',description:'Figma integration'},
        {name:'FAQ',content:'FAQ',description:'FAQ'}]
)
const handleSelector=(number)=>{
   
    setPosition(number)
}
    return <div className={style.container}>
        <NavBarSelector positionName={data[position]}/>
            <div className={style.BodyFlex}>
                <div style={{width:'30%'}}>
                <FilterBody data={data} positionData={position}  handleSelector={handleSelector}/>
                </div>
                <div style={{width:'60%'}}>   </div>

         
            </div>
    </div>

}
export default BodyDocumentation;