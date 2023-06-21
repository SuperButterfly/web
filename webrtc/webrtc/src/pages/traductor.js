// guardarEnEscritorio.js
const fs = require("fs");
const path = require("path");
const admZip = require("adm-zip");
const traducirComponenteReact = require("./traductorFunction");

// Lee el contenido del archivo que contiene el componente React
const archivoComponente = fs.readFileSync("./Componente.jsx", "utf-8");

// Llama a la función traducirComponenteReact pasando el contenido del componente React
const componenteTraducido = traducirComponenteReact(archivoComponente);

// Ruta del archivo de destino en el escritorio
const rutaDestino = path.join(require("os").homedir(), "Desktop", "componenteTraducido.zip");

// Crea una instancia de adm-zip
const zip = new admZip();

// Agrega el archivo traducido al zip
zip.addFile(
  "componenteTraducido.js",
  Buffer.alloc(componenteTraducido.length, componenteTraducido)
);

// Guarda el archivo zip en la ruta de destino
zip.writeZip(rutaDestino);

console.log(`El archivo traducido se ha guardado como zip en: ${rutaDestino}`);
