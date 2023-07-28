

import style from "./options.module.css"
import {VscAdd} from "react-icons/vsc"
import {AiOutlineOrderedList,AiOutlineUnorderedList} from "react-icons/ai"
import {BsCardImage} from "react-icons/bs"
import {BiText} from "react-icons/bi"
const Option1=({options,handleoption,addElement})=>{

    const handleOptions=()=>{
        handleoption("op1")
    }
    const selectData=(data)=>{
        addElement(data)
        handleOptions()
    }

return <div>
        <VscAdd  onClick={handleOptions} className={style.buttonIco}/>
        {options.option1===true?   <div className={style.options}>
            <h2>Headings</h2>
            <hr/>
                <div onClick={()=>selectData("h1")} className={style.item}>
                    <div className={style.divIcon}>
                        <h1>H1</h1>
                    </div>
                    <div>
                    <h2>Heading</h2>
                    <p>use for a top-level </p>
                    </div>
                </div>
                <div onClick={()=>selectData("h2")}  className={style.item}>
                <div className={style.divIcon}>
                        <h1>H2</h1>
                    </div>
                    <h2>Heading 2</h2>
                </div>
                <div onClick={()=>selectData("h3")}  className={style.item}>
                <div className={style.divIcon}>
                        <h1>H2</h1>
                    </div>
                    <h2>Heading 3</h2>
                </div>
                <h2>Basic Blocks</h2>
            <hr/>



                <div onClick={()=>selectData("ol")}  className={style.item}>
                <div>
                        <AiOutlineOrderedList className={style.icon}/>
                    </div>
                    <h2>orden list</h2>
                </div>
                <div onClick={()=>selectData("ul")}  className={style.item}>
                <div>
                        <AiOutlineUnorderedList className={style.icon}/>
                    </div>
                    <h2>unordered list </h2>
                </div>
                <div onClick={()=>selectData("p")}  className={style.item}>
                <div>
                        <BiText className={style.icon}/>
                    </div>
                    <h2>paragrap </h2>
                </div>
                <h2>Files</h2>
            <hr/>
                <div onClick={()=>selectData("image")}  className={style.item}>
                <div>
                        <BsCardImage className={style.icon}/>
                 
                    </div>
                    <h2>Image </h2>
                </div>
        </div>:""}
     
</div>
}
export default Option1