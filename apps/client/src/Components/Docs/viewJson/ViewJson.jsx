import { useEffect, useState } from 'react';
import style from './View.module.css';
import ViewjsonData from './ViewjsonData';
import TextData from './dataTypes/TextData';
import ListData from './dataTypes/ListData';

const ViewJson = () => {
  const [item, setItem] = useState([
    { data: "<h1>titulo</h1>", type: "headings" },
  ]);
  const properties = {
    sync: "crdt YJS /react/code/llamil",
    path: "/var/path/path0/",
    menu: true
};
useEffect(() => {
  if (item.length < 1) {
    setItem([ { data: "<h1>titulo</h1>", type: "headings" },]);
  }

}, [item]);

const deleteData = (position) => {
  const newData = item.filter((data, index) => {
    return index !== position;
  });
  setItem(newData);
};

const addBasicData = (type, position) => {
  let newData;
  switch (type) {
    case "h1":
      newData = [...item];
      newData.splice(position, 0, { data: "<h1></h1>", type: "headings" });
      setItem(newData);
      break;
    case "h2":
      newData = [...item];
      newData.splice(position + 1, 0, { data: "<h2></h2>", type: "basic Block" });
      setItem(newData);
      break;
    case "ol":
      newData = [...item];
      newData.splice(position + 1, 0, { data:  "<ol><li></li></ol>", type: "basic Block" });
      setItem(newData);
      break;
      case "ul":
      newData = [...item];
      newData.splice(position + 1, 0, { data:  "<ul><li></li></ul>", type: "unorderedlist" });
      setItem(newData);
      break;

    default:
      setItem([...item, { data: "<h2></h2>", type: "basic Block" }]);
      break;
  }
};

const edid = (data, index) => {
  let update = [...item]; // <-- Corregido, creamos una copia del array usando spread operator
  update[index] = data;
  setItem(update);
};

return (
  <div className={style.container}>
    <div className={style.divcontainer}>
    {item.length &&
item.map((data, index) => (
  data.type === "headings" || data.type === "basic Block" ||data.type === "listorder"||data.type === "unorderedlist"? (
    <TextData data={data} key={index} id={index} edid={edid} deleteData={deleteData} size={item.length} add={addBasicData}/>
  ) : data.type === "image" ? (
    <ImageData data={data} key={index} />
  ) : (
    null // O puedes mostrar otro componente o dejarlo en blanco si no hay un caso por defecto
  )
))
}
    </div>
    <div className={style.divcontainer}>
      {item.length !== 0 ? (
        <ViewjsonData properties={properties} datas={{ data: item }} /> // <-- Pasamos un objeto con la propiedad 'data' que contiene el array item
      ) : (
        ""
      )}
    </div>
  </div>
);
};

export default ViewJson;
