import { useEffect, useState } from "react";
import style from "./DataTable.module.css"
 
const DatasTable=({data,index})=>{  
    const[objectId,setobjtId]=useState(Object.keys(data)[0])
    const[dataInput,setDataInput]=useState(data[objectId])
 useEffect(()=>{
    setobjtId(Object.keys(data)[0]);    
    setDataInput(data[objectId]);
    },[data])    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataInput((prevDataInput) => ({
          ...prevDataInput,
          [name]: value,
        }));
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