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
      text: String(jsxStyles)
    }
  ]
}

export default generateDocuments