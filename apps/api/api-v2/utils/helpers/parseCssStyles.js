// parseCssStyles.js
const parseCssStyles = (styleCssContent) => {
    const cssStyles = {}
  
    const styleBlocks = styleCssContent.split('}')
    for (const block of styleBlocks) {
      const selectorBlock = block.split('{')
      if (selectorBlock.length === 2) {
        const selector = selectorBlock[0].trim()
        const styles = selectorBlock[1].trim().split(';')
        const stylesObj = {}
        for (const style of styles) {
          const [property, value] = style.split(':')
          if (property && value) {
            const trimmedProperty = property.trim()
            const trimmedValue = value.trim()
            stylesObj[trimmedProperty] = { active: true, value: trimmedValue }
          }
        }
        cssStyles[selector] = stylesObj
      }
    }
  
    return cssStyles
  }
  
  module.exports = parseCssStyles
  