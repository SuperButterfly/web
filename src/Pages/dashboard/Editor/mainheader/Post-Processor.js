function generateJSXFromJSON(jsonData) {
  const { name, tag, properties, children } = jsonData;

  let jsxCode = `<${tag}`;

  // Agregar propiedades al componente
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

  // Agregar contenido de los hijos
  if (children && children.length > 0) {
    children.forEach((child) => {
      jsxCode += generateJSXFromJSON(child);
    });
  }

  jsxCode += `</${tag}>`;

  return jsxCode;
}





// function generateJSXFromJSON(jsonData) {
//   const { component, props } = jsonData;

//   const jsxContent = `
//     import React from 'react';

//     const GeneratedComponent = () => {
//       return (
//         ${
//           component && component !== ""
//             ? `<${component} ${
//                 props && props !== "" ? ` {...${props}}` : ""
//               } />`
//             : ""
//         }
//       );
//     };

//     export default GeneratedComponent;
//   `;

//   // const element = document.createElement("a");
//   // const file = new Blob([jsxContent], { type: "text/plain" });
//   // element.href = URL.createObjectURL(file);
//   // element.download = "GeneratedComponent.jsx";
//   // element.click();
//   return jsxContent;
// }

export default generateJSXFromJSON;
