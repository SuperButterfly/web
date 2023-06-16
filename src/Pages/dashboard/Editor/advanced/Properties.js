import './properties.css';
import { useState, useEffect } from 'react';
import Property from './Property.js';

const Properties = ({ title, deviceIcon, properties, handleProperties, target }) => {

  const initialState = { isCheked: true, propertyName: '', valueName: '' };
  const [statesSelected, setStatesSelected] = useState([]);

  useEffect(() => {
    if (Object.keys(properties).length > 1) {
      const localproperties = [];
      const keys = Object.keys(properties);
      if (keys.includes(target)) {
        const targetProperties = properties[target];
        Object.keys(targetProperties).forEach((key, idx) => {
          localproperties.push({
            isCheked: true,
            propertyName: key,
            valueName: targetProperties[key]
          });
        });
      }
      localproperties.push(initialState);
      setStatesSelected(localproperties);
    }
  }, [properties]);

  const update = (newproperties) => {
    let updateproperties = {};
    let aux = [...newproperties];
    aux.pop();
    aux.forEach(({ propertyName, valueName, isCheked }) => {
      if (isCheked) {
        updateproperties[propertyName] = valueName;
      }
    });
    handleProperties(target, updateproperties);
  };
 
  const handleChange = ev => {
    ev.preventDefault();
    const [id, name] = ev.target.name.split('/');
    const aux = [...statesSelected];
    aux.forEach((state, idx) => {
      if (parseInt(id) == idx) {
        if (name === 'isCheked' && idx === id) {
          state.isCheked = !state.isCheked;
        }
        else {
          state[`${name}Name`] = ev.target.value;
        }
      }
      return state;
    });
    setStatesSelected(aux);
    const last = aux.length - 1;
    if(aux[last].propertyName !== '' && aux[last].valueName !== '' && last > 0) {
      update(aux);
    }
  };

  const addProperty = (ev) => {
    const aux = statesSelected;
    let last = statesSelected.length - 1;
    if (statesSelected[last].propertyName != '') {
      if (statesSelected[last].valueName != '') {
        aux.push(initialState);
      }
      else return;
    }
    else return;
    setStatesSelected(aux);
    update(aux);
  };

  const discardProperty = (stateId, ev) => {
    ev.preventDefault();
    const id = stateId;
    const aux = statesSelected.filter((state, idx) => idx != id);
    setStatesSelected(aux);
  };

  return (
    <div className="properties-container" >
      <div className="properties-header">
        <span className="properties-heading">{title}</span>
        <svg viewBox="0 0 1024 1024" className="properties-icon">
          <path d={deviceIcon}></path>  
        </svg>
      </div>
      {
        statesSelected && statesSelected.length > 0 ? 
          statesSelected.map(({ isCheked, propertyName, valueName} , idx) => (
          <Property 
            key={idx} 
            stateId={idx}
            isCheked={isCheked}
            propertyName={ propertyName } 
            valueName={ valueName } 
            isLast={idx === statesSelected.length - 1}  
            addProperty={addProperty} 
            discardProperty={ discardProperty } 
            functionChange={ handleChange }
          />
        )) : null
      }
    </div>
  )
}

export default Properties
