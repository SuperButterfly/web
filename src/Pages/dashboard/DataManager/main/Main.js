import './main.css';
import { useState, useEffect } from 'react';
import Header from '../header/Header.js';
import DinamicTable from '../dinamictable/DinamicTable.js';
import Fields from '../fields/Fields.js';

const Main = () => {
  
  /*
  const sheet001 = {
    // 'AI', 'JSON', 'XML', 
    
    
    'DB','TypeA', son mas avanzados, quiza para mas tarde.
    /*
    columnsType:['Integer', 'String', 'Boolean'],
    columnsTitle:['Orden', 'Nombre completo', 'Comisiona este mes'],
    records:[
      {1,'Juancito',true},
      {2,'Pedro',false},
      {3,'Raul',true}
      ]
  }
*/
  const initialColection = { name: '', type: '', value: '' };
  const [colection, setColection] = useState([
    { name: 'field 1', type: 'string', value: 'field 1' },
    { name: 'field 2', type: 'string', value: 'field 2' },
    { name: 'field 3', type: 'string', value: 'field 3' },
    { name: 'field 4', type: 'string', value: 'field 4' },
    initialColection
  ]);
  const [heads, setHeads] = useState([]);

  useEffect(() => {
    if (colection.length > 0) {
      const aux = [];
      for (const item of colection) {
        aux.push(item.name);
      }
      setHeads(aux);
    }
    else setHeads([]);
  }, [colection]);

  return (
    <div className="data-manager-main-container">
      <Header />
      <div className="data-manager-main-container1">
        <DinamicTable colection={colection} changeColections={setColection} heads={heads} />
        <Fields colections={colection} changeColections={setColection} />
      </div>
    </div>
  );
};

export default Main;
