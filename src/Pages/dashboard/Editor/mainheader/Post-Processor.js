function generateJSXFromJSON(jsonData, indentLevel = 0) {
  const { tag, properties, children } = jsonData;

  // Generate component HTML
  let componentHTML = "";

  const indentation = "  ".repeat(indentLevel);

  componentHTML += `${indentation}<${tag}`;

  // Add properties to the component
  if (properties) {
    Object.keys(properties).forEach((key) => {
      if (key === "style") {
        const styles = properties[key];
        const styleString = Object.keys(styles)
          .map((styleKey) => `${styleKey}: '${styles[styleKey]}'`)
          .join(", ");

        componentHTML += ` style={{ ${styleString} }}`;
      } else {
        componentHTML += ` ${key}="${properties[key]}"`;
      }
    });
  }

  componentHTML += ">";

  // Add children components
  if (children && children.length > 0) {
    componentHTML += "\n";
    children.forEach((child) => {
      const childHTML = generateJSXFromJSON(child, indentLevel + 1);
      componentHTML += childHTML;
      componentHTML += "\n";
    });

    componentHTML += `${indentation}`;
  }

  componentHTML += `</${tag}>`;

  return componentHTML;
}

function generateParentComponent(jsonData) {
  const { name } = jsonData;
  const jsxCode = generateJSXFromJSON(jsonData);

  const parentComponent = `const ${name} = () => {
    return (
      ${jsxCode}
    );
  };
  export default ${name}
  `;
  console.log(parentComponent);
  return parentComponent;
}

export default generateParentComponent;
