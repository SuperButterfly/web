import {
  generateParentComponent,
  generateStylesFromJSON
} from '../../../mainheader/Post-Processor'

import React from 'react';
import { FaReact } from 'react-icons/fa';
import { PiFileCss } from 'react-icons/pi';

const iconsTab = {
  react : <FaReact size={15} color="blue" /> ,
  css : <PiFileCss size={15} color="blue" />,
}


const generateDocuments = (target) => {
  const jsxCode = generateParentComponent(target)
  const jsxStyles = generateStylesFromJSON(target)
  return [
    {
      file: `${target.id}jsx`,
      name: `${target.name}.jsx`,
      language: 'javascript',
      text: jsxCode,
      icons: iconsTab.react
    },
    {
      file: `${target.id}css`,
      name: `${target.name}.css`,
      language: 'css',
      text: JSON.stringify(jsxStyles, null, 2),
      icons: iconsTab.css
    }
  ]
}

export default generateDocuments

// Logica para generar archivos con el lenguaje elegido 
/*  const typeOfLanguage = {
    react: [code.js, code.css ],
    vue: [],
    angular: [code.ts, code.html, code.css],
    html: [code.html, code.css],
    uidl: []
  } */