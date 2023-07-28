import { useEffect, useState } from "react";
import style from "./DataTable.module.css"
 
const DatasTable=({data,index,edidData})=>{  
    const[objectId,setobjtId]=useState(Object.keys(data)[0])
    const[dataInput,setDataInput]=useState(data[objectId])

 useEffect(()=>{
    setobjtId(Object.keys(data)[0]);    
    setDataInput(data[objectId]);
    },[data,index])    
    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        const newDaTA={
          ...dataInput,
          [name]:value
        }
      
        edidData(objectId,newDaTA)
        setDataInput({
          ...dataInput,
          [objectId]:value
        })
      };



    return  (
        <tr className={style.tableEdit}>
          {Object.keys(dataInput).map((attributeName) => (
            <td key={attributeName}>
                <input
            type="text"
            name={attributeName}
            value={dataInput[attributeName]}
            onChange={handleInputChange}
            className={style.inputData}
          />         
                </td>
          ))}
        </tr>
      );
}
export default DatasTable