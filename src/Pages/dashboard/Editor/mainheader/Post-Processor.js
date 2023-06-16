function generateJSXFromJSON(jsonData, importedComponents = new Set()) {
  const { name, tag, properties, children } = jsonData;

  let jsxCode = '';

  // Add import statements for new components
  if (!importedComponents.has(name)) {
    importedComponents.add(name);
    jsxCode += `import ${name} from './${name}';\n\n`;
  }

  jsxCode += `
const ${name} = () => {
  return (
    <${tag}`;

  // Add properties to the component
  if (properties) {
    Object.keys(properties).forEach((key) => {
      if (key === 'style') {
        const styles = properties[key];
        const styleString = Object.keys(styles)
          .map((styleKey) => `${styleKey}: '${styles[styleKey]}'`)
          .join(', ');

        jsxCode += ` style={{ ${styleString} }}`;
      } else {
        jsxCode += ` ${key}="${properties[key]}"`;
      }
    });
  }

  jsxCode += `>`;

  // Add children components
  if (children && children.length > 0) {
    children.forEach((child) => {
      jsxCode += generateJSXFromJSON(child, importedComponents);
    });
  }

  jsxCode += `</${tag}>`;

  jsxCode += `);\n};\n\nexport default ${name};\n\n`;

  return jsxCode;
}

export default generateJSXFromJSON;

