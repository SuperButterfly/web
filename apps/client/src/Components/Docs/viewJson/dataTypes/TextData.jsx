import {  useState } from "react";
import style from "./DataType.module.css"
import {SlOptions} from "react-icons/sl"
import Option1 from "./options/option1";
import Option2 from "./options/options2";
const TextData = ({ data, id, edid,deleteData,add,size}) => {
  const [html, setHtml] = useState(data.data);
  const [options,setOptions]=useState({
    option1:false,
    option2:false,
  });
  const handleOptions=(data)=>{
    switch (data) {
        case "op1":
            if(options.option1===false)
            setOptions({
                ...options,
                option1:true,
                option2:false
            })
            else{
                setOptions({
                    option1:false,
                    option2:false
                })
            }    
            break;
        case "op2":
            if(options.option2===false)
            setOptions({
                option2:true,
                option1:false
            })
            else{
                setOptions({
                    option2:false,
                    option1:false
                })
            }          
            break;
        default:
            break;
    }
  }

  const addElement=(type)=>{
    add(type,id)
  }


  //this function modifies the html
  const handleHtmlChange = (event) => {
    const updatedHtml = event.target.innerHTML;
    const updatedData = { data: updatedHtml, type: data.type };
    edid(updatedData, id);
    if(size===id+1&&event.target.innerText.length)
    {
        add()
    }
  };
  const deleteHtml=()=>{
    deleteData(id)
  }




  return (
    <div className={style.container}>
        <div className={style.options}>
            <Option1  options={options} handleoption={handleOptions} addElement={addElement}/>
            <Option2 deleteData={deleteHtml}   options={options} handleoption={handleOptions}/>
        </div>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      contentEditable={true}
      onInput={handleHtmlChange}
      className={style.html}
    />
    </div>
  );
};
export default TextData;