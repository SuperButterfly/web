import { saveAs } from 'file-saver';
import JSZip from 'jszip'

const generateZipReact = async(fileContent, componentName) => {

const zip = new JSZip();

  // Agregar el archivo draco.config al proyecto
  const dracoConfigContent = `
module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};
`;
  zip.file('draco.config.json', dracoConfigContent);

  // Agregar el archivo package.json al proyecto
  const packageJsonContent =  `
{
  "name": ${componentName},
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@craco/craco": "^7.0.0-alpha.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-helmet": "^6.1.0"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test --env=jsdom",
    "eject": "craco eject"
  },
  "engines": {
    "node": "16.x"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "react-scripts": "^5.0.1"
  }
}
`
  zip.file('package.json', packageJsonContent);

  // Agregar la carpeta "public" al proyecto
   const publicFolder = zip.folder('public');
  const publicFilePath = 'index.html'; // Reemplaza "nombre-del-archivo.extensión" con el nombre y extensión del archivo que deseas agregar dentro de "public"
  const publicFileContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`; // Reemplaza "Contenido del archivo" con el contenido real del archivo que deseas agregar
  publicFolder.file(publicFilePath, publicFileContent);
  // Agregar la carpeta "src" al proyecto
  const srcFolder = zip.folder('src');

  // Agregar la carpeta "views" dentro de "src"
  const viewsFolder = srcFolder.folder('views');

  // Agregar el archivo index.js dentro de "src/views"
  const indexPath = 'index.js';
  const indexContent = `import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
`;
  srcFolder.file(indexPath, indexContent);

  // Agregar el archivo style.css dentro de "src/views"
  const stylePath = 'style.css';
  const styleContent = `:root {
  --dl-color-gray-500: #595959;
  --dl-color-gray-700: #999999;
  --dl-color-gray-900: #D9D9D9;
  --dl-size-size-large: 144px;
  --dl-size-size-small: 48px;
  --dl-color-danger-300: #A22020;
  --dl-color-danger-500: #BF2626;
  --dl-color-danger-700: #E14747;
  --dl-color-gray-black: #000000;
  --dl-color-gray-white: #FFFFFF;
  --dl-size-size-medium: 96px;
  --dl-size-size-xlarge: 192px;
  --dl-size-size-xsmall: 16px;
  --dl-space-space-unit: 16px;
  --dl-color-primary-100: #003EB3;
  --dl-color-primary-300: #0074F0;
  --dl-color-primary-500: #14A9FF;
  --dl-color-primary-700: #85DCFF;
  --dl-color-success-300: #199033;
  --dl-color-success-500: #32A94C;
  --dl-color-success-700: #4CC366;
  --dl-size-size-xxlarge: 288px;
  --dl-size-size-maxwidth: 1400px;
  --dl-radius-radius-round: 50%;
  --dl-space-space-halfunit: 8px;
  --dl-space-space-sixunits: 96px;
  --dl-space-space-twounits: 32px;
  --dl-radius-radius-radius2: 2px;
  --dl-radius-radius-radius4: 4px;
  --dl-radius-radius-radius8: 8px;
  --dl-space-space-fiveunits: 80px;
  --dl-space-space-fourunits: 64px;
  --dl-space-space-threeunits: 48px;
  --dl-space-space-oneandhalfunits: 24px;
}
.button {
  color: var(--dl-color-gray-black);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.input {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.textarea {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.list {
  width: 100%;
  margin: 1em 0px 1em 0px;
  display: block;
  padding: 0px 0px 0px 1.5rem;
  list-style-type: none;
  list-style-position: outside;
}
.list-item {
  display: list-item;
}
.teleport-show {
  display: flex !important;
  transform: none !important;
}
.Content {
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
.Heading {
  font-size: 32px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
`;
  srcFolder.file(stylePath, styleContent);

  // Agregar el archivo home.js dentro de "src/views"
  const homeJSPath = 'home.js';
  const homeJSContent = `import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    ${fileContent}
  )
}

export default Home`;
  viewsFolder.file(homeJSPath, homeJSContent);

  // Agregar el archivo home.css dentro de "src/views"
  const homeCSSPath = 'home.css';
  const homeCSSContent = `.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
`;
  viewsFolder.file(homeCSSPath, homeCSSContent);

  // Agregar otros archivos y carpetas según sea necesario

  const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}.zip`);
}

const generateZipVue = async(fileContent, componentName) => {
  console.log('vue')
}

const generateZipNext = async(fileContent, componentName) => {
  console.log('next')
}

const generateZipNuxt = async(fileContent, componentName) => {
  console.log('nuxt')
}

const generateZipAngular = async(fileContent, componentName) => {
  console.log('angular')
}

const generateZipHtml = async(fileContent, componentName) => {
  console.log('html')
}


export { generateZipReact, generateZipVue, generateZipNext, generateZipNuxt, generateZipAngular, generateZipHtml };