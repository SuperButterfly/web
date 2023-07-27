

import style from "./options.module.css"
import {VscAdd} from "react-icons/vsc"
const Option1=({options,handleoption,addElement})=>{

    const handleOptions=()=>{
        console.log(options.option1)
        handleoption("op1")
    }

return <div>
        <VscAdd  onClick={handleOptions}/>
        {options.option1===true?   <div className={style.options}>
                <div onClick={()=>addElement("h1")}>
                    <h2>Heading h1</h2>
                </div>
                <div onClick={()=>addElement("h2")}>
                    <h2>basick bock h2</h2>
                </div>
                <div onClick={()=>addElement("ol")}>
                    <h2>orden list</h2>
                </div>
                <div onClick={()=>addElement("ul")}>
                    <h2>unordered list </h2>
                </div>
        </div>:""}
     
</div>
}
export default Option1