function traducirComponenteReact(componente) {
  const traducciones = {
    div: "View",
    h1: "Text",
    img: "Image",
    p: "Text",
    label: "Text",
    input: "TextInput",
  };

  const imports = {
    View: "import { View } from 'react-native';",
    Text: "import { Text } from 'react-native';",
    Image: "import { Image } from 'react-native';",
    TextInput: "import { TextInput } from 'react-native';",
  };

  let nuevoComponente = componente;

  Object.keys(traducciones).forEach((tag) => {
    const openingTagRegex = new RegExp(`<${tag}\\b`, "g");
    const closingTagRegex = new RegExp(`</${tag}>`, "g");

    nuevoComponente = nuevoComponente.replace(openingTagRegex, `<${traducciones[tag]}`);
    nuevoComponente = nuevoComponente.replace(closingTagRegex, `</${traducciones[tag]}>`);
  });

  Object.keys(imports).forEach((tag) => {
    if (nuevoComponente.includes(tag)) {
      nuevoComponente = imports[tag] + "\n" + nuevoComponente;
    }
  });

  return nuevoComponente;
}

module.exports = traducirComponenteReact;
