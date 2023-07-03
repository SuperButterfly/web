export function traducirComponenteReactNative(fileContent, componentName) {
  const traducciones = {
    div: "View",
    span: "Text",
    h1: "Text",
    h2: "Text",
    h3: "Text",
    h4: "Text",
    h5: "Text",
    h6: "Text",
    p: "Text",
    a: "Text",
    img: "Image",
    button: "Button",
    input: "TextInput",
    textarea: "TextInput",
    label: "Text",
    select: "Picker",
    option: "Picker.Item",
    ul: "FlatList",
    ol: "FlatList",
    li: "View",
    form: "View",
    hr: "View",
    br: "Text",
    strong: "Text",
    em: "Text",
    table: "View",
    tr: "View",
    td: "View",
    th: "Text",
    tbody: "View",
    thead: "View",
    tfoot: "View",
    caption: "Text",
    col: "View",
    colgroup: "View",
    section: "View",
    article: "View",
    aside: "View",
    header: "View",
    footer: "View",
    nav: "View",
    main: "View",
    figure: "View",
    figcaption: "Text",
    pre: "Text",
    code: "Text",
    samp: "Text",
    kbd: "Text",
    var: "Text",
    abbr: "Text",
    address: "Text",
    b: "Text",
    bdi: "Text",
    bdo: "Text",
    cite: "Text",
    del: "Text",
    dfn: "Text",
    i: "Text",
    ins: "Text",
    mark: "Text",
    q: "Text",
    rp: "Text",
    rt: "Text",
    rtc: "Text",
    ruby: "Text",
    s: "Text",
    small: "Text",
    sub: "Text",
    sup: "Text",
    time: "Text",
    u: "Text",
    wbr: "Text",
  };

  const imports = {
    View: "import { View } from 'react-native';",
    Text: "import { Text } from 'react-native';",
    Image: "import { Image } from 'react-native';",
    TouchableOpacity: "import { TouchableOpacity } from 'react-native';",
    TextInput: "import { TextInput } from 'react-native';",
    Picker: "import { Picker } from 'react-native';",
  };

  let nuevoComponente = fileContent;

  Object.keys(traducciones).forEach((tag) => {
    const openingTagRegex = new RegExp(`<${tag}\\b`, "g");
    const closingTagRegex = new RegExp(`</${tag}>`, "g");

    nuevoComponente = nuevoComponente.replace(openingTagRegex, `<${traducciones[tag]}`);
    nuevoComponente = nuevoComponente.replace(closingTagRegex, `</${traducciones[tag]}>\n`);

    if (nuevoComponente.match(openingTagRegex) || nuevoComponente.match(closingTagRegex)) {
      nuevoComponente = nuevoComponente.replace(openingTagRegex, `<${traducciones[tag]}`);
      nuevoComponente = nuevoComponente.replace(closingTagRegex, `</${traducciones[tag]}>;\n\n`);

      if (!(traducciones[tag] in imports)) {
        imports[traducciones[tag]] = `import { ${traducciones[tag]} } from 'react-native';\n`;
      }
    }
  });

  const importsFinal = Object.keys(imports).map((tag) => imports[tag]);
  const formattedImports = importsFinal.join("\n");

  nuevoComponente = nuevoComponente.replace(
    /<Image\s([^>]*?)src=\{([^>]+)\}\s*alt=\{([^>]+)\}\s*\/>/g,
    "<Image source={{ uri: $2 }} alt={$3} />\n"
  );

  return `${formattedImports}\n\n export function ${componentName} () => {\n\nreturn (\n${nuevoComponente}\n)}`;
}

//
