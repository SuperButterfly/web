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

export function translateComponentToHTML(fileContent, componentName) {
  console.log("Contenido del archivo:", fileContent);
  const lines = fileContent.split("\n");
  let htmlResult = "";
  let cssResult = "";

  let indentationLevel = 0;
  let isParentComponent = true;
  const classMap = new Map();

  lines.forEach((line) => {
    // Añadir indentación según el nivel
    const indentation = "  ".repeat(indentationLevel);

    // Añadir salto de línea antes de la etiqueta de apertura del componente padre
    if (isParentComponent) {
      htmlResult += "\n";
      isParentComponent = false;
    }

    // Añadir apertura de etiqueta <p> con la indentación
    htmlResult += `${indentation}<p>`;

    // Eliminar estilos en línea de la línea y extraer estilos
    line = line.replace(/ style="([^"]*)"/g, (match, styles) => {
      const classNames = styles.split(";").map((style) => {
        const [property, value] = style.split(":").map((s) => s.trim());
        if (property && value) {
          let className;
          if (classMap.has(styles)) {
            className = classMap.get(styles);
          } else {
            className = `class${Math.random().toString(36).substr(2, 9)}`;
            classMap.set(styles, className);
            cssResult += `.${className} {\n  ${property}: ${value};\n}\n`;
          }
          return className;
        }
        return "";
      });
      return ` class="${classNames.join(" ")}"`;
    });

    line = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Añadir contenido de la línea
    htmlResult += line;

    // Cerrar etiqueta </p> con la indentación
    htmlResult += `</p>${indentation}`;

    // Añadir salto de línea después del cierre de etiqueta
    htmlResult += "\n";

    // Incrementar el nivel de indentación si la línea contiene una apertura de etiqueta
    if (line.includes("<")) {
      indentationLevel++;
    }

    // Decrementar el nivel de indentación si la línea contiene un cierre de etiqueta
    if (line.includes("</")) {
      indentationLevel--;
    }
  });

  // Devolver estructura HTML resultante y contenido CSS
  return {
    html: htmlResult,
    css: cssResult,
  };
}

//el de react aun no esta terminado
export function translateComponentToReact(fileContent, componentName) {
  let componentCode = `export function ${componentName}() {\n  return (\n`;
  const lines = fileContent.split("\n");

  let indentationLevel = 2;

  lines.forEach((line) => {
    const indentation = " ".repeat(indentationLevel);

    // Agregar apertura de etiqueta con la indentación
    componentCode += `${indentation}<${line}>\n`;

    // Incrementar el nivel de indentación si la línea contiene una apertura de etiqueta
    if (line.includes("<")) {
      indentationLevel += 2;
    }

    // Decrementar el nivel de indentación si la línea contiene un cierre de etiqueta
    if (line.includes("</")) {
      indentationLevel -= 2;
    }
  });

  componentCode += "  );\n}";

  return componentCode;
}
