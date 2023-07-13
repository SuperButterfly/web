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
      text: jsxCode
    },
    {
      file: `${target.id}css`,
      name: `${target.name}.css`,
      text: jsxStyles
    }
  ]
}

export default generateDocuments