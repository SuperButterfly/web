import { useEffect, useState } from "react"
import Option1 from "../options/option1"
import Option2 from "../options/options2"
import style from "../DataType.module.css"
import DatasTable from "./DatasTable"
const Tables=({   id, edit,deleteData,add,size})=>{
  const [datas, setDatas] = useState({
  d1:
   {
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
  },
 
  d2:
   {
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
  },
  d3:{
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
 },

 d4:
   {
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
  },
 
  d5:
   {
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
  },
  d6:
  {
    city : "City A",
    country : "US",
    line1 : "123 Main Street",
    line2 : "Apt 4B",
    postal_code : "12345",
    state : "California"
 },
}
  );
  const [options,setOptions]=useState({
    option1:false,
    option2:false,
  });
  const [tableData, setTableData] = useState([]);
  const [objOne, setObjOne] = useState([]); // Utiliza un array vacío para el estado de objOne
  const [page, setpage] = useState(0);
    
  useEffect(() => {
    const maxElements = 3;
    const groupedData = [];
    let group = [];
    let count = 0;
    for (const key in datas) {
      if (count >= maxElements) {
        groupedData.push(group);
        group = [];
        count = 0;
      }
      group.push({ [key]: datas[key] });
      count++;
    }
    if (group.length > 0) {
      groupedData.push(group);
    }
    setTableData(groupedData);

    // Obtén el nombre del primer objeto dentro de datas
    const primerObjeto = Object.keys(datas)[0];
    // Obtén los nombres de las propiedades del primer objeto
    const objOne = Object.keys(datas[primerObjeto]);
    setObjOne(objOne); 
    console.log(groupedData);
  }, [datas]);
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
      const deleteHtml=()=>{
        deleteData(id)
      }
      return (
        <div className={style.container}>
          <div className={style.options}>
            <Option1 options={options} handleoption={handleOptions} addElement={addElement} />
            <Option2 deleteData={deleteHtml} options={options} handleoption={handleOptions} />
          </div>
          <div className={style.html}>
            {tableData.length > 0 && objOne.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    {objOne.map((propiedad) => (
                      <th key={propiedad}>{propiedad}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                {tableData[page].map((dataObj, index) => (
    <DatasTable data={dataObj} key={index}/>

))}

    
                </tbody>
              </table>
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      );
    };
export default Tables