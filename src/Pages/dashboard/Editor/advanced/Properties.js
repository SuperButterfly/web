import './properties.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponent } from '../../../../../src/redux/actions/component.js';
import Property from './Property.js';

const Properties = ({ title, deviceIcon }) => {

  const dispatch = useDispatch();
  const { componentSelected } = useSelector(state => state.component);
  const initialState = { isCheked: true, propertyName: '', valueName: '' };
  const [statesSelected, setStatesSelected] = useState([]);
  const [titleSelected, setTitleSelected] = useState('');

  useEffect(() => {
    if (statesSelected.length > 1) {
      const properties = {};
      properties[titleSelected] = {};
      const last = statesSelected.length - 1;
      statesSelected.forEach((state, idx) => {
        if (idx != last && state.isCheked) {
          properties[titleSelected][state.propertyName] = state.valueName;
        }
      });
      let condition = areEqual(
        properties[titleSelected], componentSelected.properties[titleSelected]
      );
      if (condition) {
        return;
      }
      else {
        dispatch(updateComponent(componentSelected.id, {
          properties: { ...componentSelected.properties, ...properties }
        }));
      }
    }
  }, [statesSelected]);

  const areEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let i = 0; i < keys1.length; i++) {
      if (keys2[i] != keys1[i]) {
        return false;
      }

      if (obj2[keys2[i]] != obj1[keys1[i]]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (componentSelected.properties) {
      getProperties(componentSelected.properties);
    }
    else setStatesSelected([initialState]);
  }, [componentSelected]);

  const getProperties = (properties) => {
    let temp = '';
    if (title === 'Properties') {
      setTitleSelected('style');
      temp = 'style';
    }
    else {
      let aux = title.split(' ')[3];
      temp = aux.slice(0, aux.length - 2);
      setTitleSelected(
        'mq' + temp
      );
    }

    let aux = [];
    const someprops = properties[temp];
    if (someprops) {

      const keys = Object.keys(someprops);
      if (keys.length > 0) {
        for (let key of keys) {
          aux.push({ isCheked: true, propertyName: key, valueName: someprops[key] });
        }
      }
    }
    aux.push(initialState);
    setStatesSelected(aux);
  };

  const handleChange = ev => {
    ev.preventDefault();
    const [id, name] = ev.target.name.split('/');
    const aux = statesSelected.map((state, idx) => {
      if (id == idx) {
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
  };

  const addProperty = (ev) => {
    const aux = statesSelected
    let last = statesSelected.length - 1;
    if (statesSelected[last].propertyName != '') {
      if (statesSelected[last].valueName != '') {
        aux.push(initialState);
      }
      else return;
    }
    else return;
    setStatesSelected([...aux]);
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
