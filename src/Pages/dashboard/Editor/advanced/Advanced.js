import './advanced.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Properties from './Properties.js';
import Clases from './Clases.js';
import TextStyle from './TextStyle.js';
import States from '../states/States.js';
import Attributes from '../attributes/Attributes.js';
//import States from '../states/States.js';

const {
  wide,
  computer,
  pcIcon,
  tabletIcon,
  phonelandsIcon,
  phoneIcon
} = require('./iconsPath.js');

const Advanced = () => {

  const { breakpoints } = useSelector(state => state.breakpoints);
  const [isDefault, setIsDefault] = useState(5);

  const { componentSelected } = useSelector(state => state.component);
  const [componentProperties, setComponentProperties] = useState({
    style: [],
    mq1600: [],
    mq1200: [],
    mq991: [],
    mq767: [],
    mq479: [],
    states: []
  });

  useEffect(() => {
    if (componentSelected&&componentSelected.properties) {
      getProperties(componentSelected.properties);
    }
  }, [componentSelected]);

  const getProperties = (componentProps) => {
    const compKeys = Object.keys(componentProps);
    for(let key of compKeys) {
      if (key !== 'innerHTML' && key !== 'event' && (Object.keys(componentProps[key])).length > 0) {
        if (key !== 'value') {
          let aux = [];
          const stylesProps = componentProps[key];
          const stylesKeys = Object.keys(componentProps[key]);
          for(let key of stylesKeys) {
            aux.push({ propertyName: key, valueName: stylesProps[key] });
          }
          aux.push({ propertyName: "", valueName: "" });
          setComponentProperties({
            ...componentProperties,
            [key]: aux
          });
        }
      }
    }
  };
  
  
  

  useEffect(() => {
    const last = [...breakpoints].reverse().findIndex(value => value === true);
    setIsDefault(5 - last);
  }, [breakpoints]);

  return (
    <div className="advanced-container"> 
        {/*<Attributes/>
        <States />*/}
        <Clases />
        <TextStyle />
        { breakpoints[5] &&
          <Properties 
            title={ 'Properties' } 
            deviceIcon={wide} 
            properties={componentProperties.style} 
          />
        }
        { breakpoints[4] &&
          <Properties
            title={
              isDefault == 4 ? 'Properties' : 'Media Query ≤ 1600px'
            } 
            deviceIcon={computer}
            properties={componentProperties.mq1600}
          />
        }
        { breakpoints[3] &&
          <Properties 
            title={
              isDefault == 3 ? 'Properties' : 'Media Query ≤ 1200px'
            } 
            deviceIcon={pcIcon}
            properties={componentProperties.mq1200}
          />
        }
        { breakpoints[2] &&
          <Properties 
            title={
              isDefault == 2 ? 'Properties' : 'Media Query ≤ 991px'
            }
            deviceIcon={tabletIcon}
            properties={componentProperties.mq991}
          />
        }
        { breakpoints[1] &&
          <Properties 
            title={
              'Media Query ≤ 767px'
            } 
            deviceIcon={phonelandsIcon}
            properties={componentProperties.mq767}
          />
        }
        { breakpoints[0] &&
          <Properties 
            title={'Media Query ≤ 479px'} 
            deviceIcon={phoneIcon} 
            properties={componentProperties.mq479}
          />
        }
      </div>
  );
};

export default Advanced;
