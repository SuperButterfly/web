import {
  generateParentComponent,
  generateStylesFromJSON
} from '../../../mainheader/Post-Processor'
const generateDocuments = (target) => {
  const jsxCode = generateParentComponent(target)
  const jsxStyles = generateStylesFromJSON(target)
  return [
    {
      file: `${target.id}jsx`,
      name: `${target.name}.jsx`,
      language: 'javascript',
      text: jsxCode
    },
    {
      file: `${target.id}css`,
      name: `${target.name}.css`,
      language: 'css',
      text: JSON.stringify(jsxStyles, null, 2)
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