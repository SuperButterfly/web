import './advanced.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComponent } from '../../../../../src/redux/actions/component.js';
import Properties from './Properties.js';
import Clases from './Clases.js';
import TextStyle from './TextStyle.js';

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
  const dispatch = useDispatch();
  const { componentSelected } = useSelector(state => state.component);
  const [componentProperties, setComponentProperties] = useState({});

  useEffect(() => {
    if (componentSelected && componentSelected.properties) {
      setComponentProperties(componentSelected.properties);
    }
  }, [componentSelected]);

  useEffect(() => {
    const last = [...breakpoints].reverse().findIndex(value => value === true);
    setIsDefault(5 - last);
  }, [breakpoints]);

  const handleProperties = (target, properties) => {
    let updateProperties = {
      ...componentProperties,
      [target]: properties
    };

    dispatch(updateComponent(componentSelected.id, {
      properties: updateProperties
    }));
  };

  return (
    <div className="advanced-container"> 
        <Clases />
        <TextStyle />
        { breakpoints[5] &&
          <Properties 
            title={ 'Properties' } 
            deviceIcon={wide} 
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'style'}
          />
        }
        { breakpoints[4] &&
          <Properties
            title={
              isDefault === 4 ? 'Properties' : 'Media Query ≤ 1600px'
            }
            deviceIcon={computer}
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'mq1600'}
          />
        }
        { breakpoints[3] &&
          <Properties 
            title={
              isDefault === 3 ? 'Properties' : 'Media Query ≤ 1200px'
            }
            deviceIcon={pcIcon}
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'mq1200'}
          />
        }
        { breakpoints[2] &&
          <Properties 
            title={
              isDefault === 2 ? 'Properties' : 'Media Query ≤ 991px'
            }
            deviceIcon={tabletIcon}
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'mq991'}
          />
        }
        { breakpoints[1] &&
          <Properties 
            title={'Media Query ≤ 767px'}
            deviceIcon={phonelandsIcon}
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'mq767'}
          />
        }
        { breakpoints[0] &&
          <Properties 
            title={'Media Query ≤ 479px'}
            deviceIcon={phoneIcon}
            properties={componentProperties}
            handleProperties={handleProperties}
            target={'mq479'}
          />
        }
      </div>
  );
};

export default Advanced;
