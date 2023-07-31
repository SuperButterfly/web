import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PiFileCss } from 'react-icons/pi';
import { BsTerminal } from 'react-icons/bs';

const IconsDictionary = ( type ) => {
  const iconsTab = {
    react : <FaReact size={15} color="#0f8fff" /> ,
    css : <PiFileCss size={15} color="#0f8fff" />,
    terminal: <BsTerminal size={15} color="#0f8fff" />,
  }

  return iconsTab[type]
}

export default IconsDictionary