import { useEffect, useState } from 'react';
import { listText } from './listText';
import style from './viewJson.module.css';
const ViewjsonData = ({ datas, properties }) => {
  const [view, setView] = useState([]);
  useEffect(() => {
    const datasjson = listText(datas.data); // <-- Accedemos a datas.data para obtener el array de datos
    const json = {
      title: datas.data[0]?.type === 'headings' ? datas.data[0] : datas.data[0]?.type==="basic Block"?datas.data[0]:"",
      sync: properties.sync,
      path: properties.path,
      menu: properties.menu,
      data: datasjson,
      code: []
    };
    setView([json]);
  }, [datas, properties]);

  return<div className={style.container}>
    <div><h1>Response</h1></div>
    <pre>{view.length ? JSON.stringify(view, null, 2) : null}</pre></div> 
};

export default ViewjsonData;
