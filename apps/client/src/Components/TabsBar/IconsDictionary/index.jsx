import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PiFileCss } from 'react-icons/pi';
import { BsTerminal } from 'react-icons/bs';
import { IoLogoCss3 } from 'react-icons/io';

const IconsDictionary = ( type ) => {
  const iconsTab = {
    react : <FaReact size={15} color="#0f8fff" /> ,
    css : <IoLogoCss3 size={15} color="#0f8fff" />,
    terminal: <BsTerminal size={15} color="#0f8fff" />,
  }
  return iconsTab[type]
}

export default IconsDictionary