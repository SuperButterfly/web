import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PiFileCss } from 'react-icons/pi';

const IconsDictionary = ( type ) => {
  const iconsTab = {
    react : <FaReact size={15} color="#0f8fff" /> ,
    css : <PiFileCss size={15} color="#0f8fff" />,
  }

  return iconsTab[type]
}

export default IconsDictionary