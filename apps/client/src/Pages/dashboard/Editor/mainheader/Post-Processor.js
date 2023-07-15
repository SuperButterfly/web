function generateJSXFromJSON(jsonData, indentLevel = 0) {
  const { tag, properties, children } = jsonData

  // Generate component HTML
  let componentHTML = ''

  const indentation = '  '.repeat(indentLevel)

  componentHTML += `${indentation}<${tag}`

  // Add properties to the component
  if (properties) {
    Object.keys(properties).forEach((key) => {
      if (key === 'style') {
        const styles = properties[key]
        const styleString = Object.keys(styles)
          .map((styleKey) => `${styleKey}: '${styles[styleKey]}'`)
          .join(', ')

        componentHTML += ` style={{ ${styleString} }}`
      } else {
        componentHTML += ` ${key}="${properties[key]}"`
      }
    })
  }

  componentHTML += '>'

  // Add children components
  if (children && children.length > 0) {
    componentHTML += '\n'
    children.forEach((child) => {
      const childHTML = generateJSXFromJSON(child, indentLevel + 1)
      componentHTML += childHTML
      componentHTML += '\n'
    })

    componentHTML += `${indentation}`
  }

  componentHTML += `</${tag}>`

  return componentHTML
}

export function generateStylesFromJSON(jsonData) {
  const { tag, properties, children } = jsonData
  const styles = {}

  if (tag) {
    if (properties && properties.style) {
      const stylesObj = properties.style

      if (styles[tag]) {
        Object.keys(stylesObj).forEach((key) => {
          styles[tag][key] = stylesObj[key]
        })
      } else {
        styles[tag] = { ...stylesObj }
      }
    }
  }

  if (children && children.length > 0) {
    children.forEach((child) => {
      const childStyles = generateStylesFromJSON(child)

      Object.keys(childStyles).forEach((childTag) => {
        if (styles[childTag]) {
          Object.keys(childStyles[childTag]).forEach((key) => {
            styles[childTag][key] = childStyles[childTag][key]
          })
        } else {
          styles[childTag] = { ...childStyles[childTag] }
        }
      })
    })
  }

  return styles
}

export function generateParentComponent(jsonData) {
  const { name } = jsonData
  const jsxCode = generateJSXFromJSON(jsonData)

  const parentComponent = `const ${name} = () => {
    return (
      ${jsxCode}
    );
  };
  export default ${name}
  `

  return parentComponent
}
