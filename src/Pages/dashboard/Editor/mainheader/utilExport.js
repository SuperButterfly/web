import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const generateZipReact = async(fileContent, componentName, language) => {

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
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

const generateZipNext = async(fileContent, componentName, language) => {
  const zip = new JSZip();
  
  const packageJsonContent =  `
{
  "name": ${componentName},
  "version": "1.0.0",
  "description": "A next project generated based on a UIDL document",
  "main": "index.js",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  "author": "TeleportHQ",
  "license": "MIT",
  "dependencies": {
    "next": "^12.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {}
}
`
  zip.file('package.json', packageJsonContent);
  
  const pagesFolder = zip.folder('pages');
  const pagesIndexPath = 'index.js';
  const pagesIndexContent = `import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    ${fileContent}
  )
}

export default Home`

const pagesAppPath = '_app.js'
const pagesAppContent = `import "./style.css";

import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return <Component {...pageProps} />;
}`

const pagesDocumentPath = '_document.js'
const pagesDocumentContent = `import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
`

const pagesStylePath = 'style.css'
const pagesStyleContent = `:root {
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
`

pagesFolder.file(pagesIndexPath, pagesIndexContent);
pagesFolder.file(pagesAppPath, pagesAppContent);
pagesFolder.file(pagesDocumentPath, pagesDocumentContent);
pagesFolder.file(pagesStylePath, pagesStyleContent);

const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

const generateZipVue = async(fileContent, componentName, language) => {
  const zip = new JSZip();
  const vueConfigContent = `const path = require('path')

module.exports = {
  devServer: {
    allowedHosts: "all",
  },
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
      const publicDir = path.resolve(process.VUE_CLI_SERVICE.context, 'public').replace(/\\/g, '/');
      const escapePublicDir= publicDir.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
      args[0].patterns[0].globOptions.ignore = args[0].patterns[0].globOptions.ignore.map(i => i.replace(publicDir, escapePublicDir));
      return args;
  });
  }
};`
  zip.file('vue.config.js', vueConfigContent);

const packageJsonContent = `{
  "name": ${componentName},
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "vue": "^2.6.7",
    "vue-router": "^3.0.2",
    "vue-meta": "^2.2.1",
    "@lottiefiles/vue-lottie-player": "1.0.4"
  },
  "devDependencies": {
    "@vue/babel-preset-app": "^5.0.8",
    "@vue/cli-plugin-babel": "^5.0.4",
    "@vue/cli-service": "^5.0.8",
    "vue-template-compiler": "^2.6.7"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}`
  zip.file('package.json', packageJsonContent)
  
  const babelConfigContent = `
module.exports = {
  presets: [
    '@vue/app'
  ]
}`
  zip.file('babel.config.js', babelConfigContent)
  
  const srcFolder = zip.folder('src')
  const viewsFolder = srcFolder.folder('views')
  const appContent = `<template>
  <router-view/>
</template>`
  const mainContent = `
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'

Vue.use(LottieVuePlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')`
const routerContent = `import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
`
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
`

const homeContent = `<template>
  ${fileContent}
</template>

<script>
export default {
  name: ${componentName},
  metaInfo: {
    title: ${componentName},
    meta: [
      {
        property: 'og:title',
        content: ${componentName},
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>`

srcFolder.file('App.vue', appContent)
srcFolder.file('main.js', mainContent)
srcFolder.file('router.js', routerContent)
srcFolder.file('style.js', styleContent)
viewsFolder.file('home.vue', homeContent)
  
  const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

const generateZipNuxt = async(fileContent, componentName, language) => {
  const zip = new JSZip();
  
  const layoutsFolder = zip.folder('layouts')
  const pagesFolder = zip.folder('pages')
  const pluginsFolder = zip.folder('plugins')
  const appContent = `<!DOCTYPE html>

<html lang="en">
  <head>
    <title>${componentName}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />
    <style data-tag="reset-style-sheet">
      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }
    </style>
    <style data-tag="default-style-sheet">
      html {
        font-family: Inter;
        font-size: 16px;
      }

      body {
        font-weight: 400;
        font-style:normal;
        text-decoration: none;
        text-transform: none;
        letter-spacing: normal;
        line-height: 1.15;
        color: var(--dl-color-gray-black);
        background-color: var(--dl-color-gray-white);

      }
    </style>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      data-tag="font"
    />
  </head>
  <body>
    {{APP}}
  </body>
</html>
`

const nuxtConfigContent = `export default {
  css: ["~/style.css"],
  plugins: ["~/plugins/lottie-vue-player.client.js"]
}`


const packageJsonContent = `{
  "name": ${componentName},
  "version": "1.0.0",
  "description": "A nuxt project generated based on a UIDL document",
  "author": "teleporthq.io",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
  },
  "devDependencies": {
    "nuxt": "^2.15.8"
  },
  "dependencies": {
    "vue": "2.7.14",
    "@lottiefiles/vue-lottie-player": "1.0.4"
  }
}`

const styleCssContent = `:root {
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
`

const layoutsDefaultContent = `
<template>
  <div><nuxt /></div>
</template>`

const pagesIndexContent = `<template>
  ${fileContent}
</template>

<script>
export default {
  name: 'Home',
  head: {
    title: ${componentName},
    meta: [
      {
        property: 'og:title',
        content: ${componentName},
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
`
const pluginsLottieContent = `
import Vue from 'vue';

import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

Vue.use(LottieVuePlayer);`

zip.file('app.html', appContent)
zip.file('nuxt.config.js', nuxtConfigContent)
zip.file('package.json', packageJsonContent)
zip.file('style.css', styleCssContent)
layoutsFolder.file('default.vue', layoutsDefaultContent)
pagesFolder.file('index.vue', pagesIndexContent)
pluginsFolder.file('lottie-vue-player.client.js', pluginsLottieContent)
  
  const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

const generateZipAngular = async(fileContent, componentName,language) => {
  const zip = new JSZip()
  const srcFolder = zip.folder('src')
  const srcAppFolder = srcFolder.folder('app')
  const appComponentsFolder = srcAppFolder.folder('components')
  const appPagesFolder = srcAppFolder.folder('pages')
  const componentsNavigationFolder = appComponentsFolder.folder('navigation-links')
  const srcEnvironmentsFolder = srcFolder.folder('environments')
  
  const gitignoreContent = `
# See http://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
/dist
/tmp
/out-tsc
# Only exists if Bazel was run
/bazel-out

# dependencies
/node_modules

# profiling files
chrome-profiler-events*.json
speed-measure-plugin*.json

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db`

const angularJsonContent = `
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "teleport-project-template-angular": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/teleport-project-template-angular",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "6kb",
                  "maximumError": "10kb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "teleport-project-template-angular:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "teleport-project-template-angular:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "teleport-project-template-angular:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json",
              "e2e/tsconfig.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        },
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "teleport-project-template-angular:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "teleport-project-template-angular:serve:production"
            }
          }
        }
      }
    }},
  "defaultProject": "teleport-project-template-angular"
}`

const browserlistContent = `# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries

# You can see what browsers were selected by your queries by running:
#   npx browserslist

> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-11 # For IE 9-11 support, remove 'not'.
`

const packageJsonContent = `{
  "name": ${componentName},
  "author": "teleportHQ",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^14.0.0",
    "@angular/compiler": "^14.0.0",
    "@angular/core": "^14.0.0",
    "@angular/forms": "^14.0.0",
    "@angular/platform-browser": "^14.0.0",
    "@angular/platform-browser-dynamic": "^14.0.0",
    "@angular/router": "^14.0.0",
    "core-js": "~3.0.1",
    "rxjs": "~6.6.0",
    "tslib": "^2.1.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^14.0.0",
    "@angular/cli": "^14.0.0",
    "@angular/compiler-cli": "^14.0.0",
    "@types/node": "^12.11.1",
    "typescript": "^4.7.3"
  }
}`

const tsConfigContent = `
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "esnext",
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}`

const tsConfigAppContent = `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/test.ts",
    "src/**/*.spec.ts"
  ]
}`

const tsLintContent = `
{
  "extends": "tslint:recommended",
  "rules": {
    "array-type": false,
    "arrow-parens": false,
    "deprecation": {
      "severity": "warning"
    },
    "component-class-suffix": true,
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      140
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-consecutive-blank-lines": false,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-use-before-declare": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [
      true,
      "single"
    ],
    "trailing-comma": false,
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true
  },
  "rulesDirectory": [
    "codelyzer"
  ]
}`

const srcIndex = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tempting Primary Gnu</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />
    <style data-tag="reset-style-sheet">
      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }
    </style>
    <style data-tag="default-style-sheet">
      html {
        font-family: Inter;
        font-size: 16px;
      }

      body {
        font-weight: 400;
        font-style:normal;
        text-decoration: none;
        text-transform: none;
        letter-spacing: normal;
        line-height: 1.15;
        color: var(--dl-color-gray-black);
        background-color: var(--dl-color-gray-white);

      }
    </style>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      data-tag="font"
    />
    <!--This is the head section-->
    <!-- <style> ... </style> -->
  </head>
  <body>
    <app-root></app-root>
    <!-- Your body code here -->
    <!-- <script type="text/javascript"> ... </script> -->
    <script
      data-section-id="header"
      src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
    ></script>
  </body>
</html>
`
const srcMain = `
import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));`

const srcPolyfills = `
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run npm install --save classlist.js.

/**
 * Web Animations @angular/platform-browser/animations
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run npm install --save web-animations-js.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before zone.js being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass zone.js patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'core-js/features/reflect';
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */`
 
 const srcStyles = `:root {
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
`

  zip.file('.gitignore', gitignoreContent)
  zip.file('angular.json', angularJsonContent)
  zip.file('browserlist', browserlistContent)
  zip.file('package.json', packageJsonContent)
  zip.file('ts.config.json', tsConfigContent)
  zip.file('ts.config.app.json', tsConfigAppContent)
  zip.file('tslint.json', tsLintContent)
  srcFolder.file('index.html', srcIndex)
  srcFolder.file('main.ts', srcMain)
  srcFolder.file('polyfills.ts', srcPolyfills)
  srcFolder.file('styles.css', srcStyles)
  
  const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

const generateZipHtml = async(fileContent, componentName, language) => {
  const zip = new JSZip()
  const componentsFolder = zip.folder('components')
  
  const homeCssContent = `.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
`

const indexContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tempting Primary Gnu</title>
    <meta property="og:title" content="Tempting Primary Gnu" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />

    <style data-tag="reset-style-sheet">
      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }
    </style>
    <style data-tag="default-style-sheet">
      html {
        font-family: Inter;
        font-size: 16px;
      }

      body {
        font-weight: 400;
        font-style:normal;
        text-decoration: none;
        text-transform: none;
        letter-spacing: normal;
        line-height: 1.15;
        color: var(--dl-color-gray-black);
        background-color: var(--dl-color-gray-white);

      }
    </style>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font"
    />
    <!--This is the head section-->
    <!-- <style> ... </style> -->
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div>
      <link href="./home.css" rel="stylesheet" />

      <div class="home-container"></div>
    </div>
    <script
      data-section-id="header"
      src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
    ></script>
  </body>
</html>
`
  const packageContent = `{
  "name": ${componentName},
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "parcel-bundler": "^1.6.1"
  },
  "scripts": {},
  "devDependencies": {}
}`

const styleCssContent = `:root {
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
`
const compoNavigationCssContent = `.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text2 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text3 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text4 {
  margin-left: var(--dl-space-space-twounits);
}
@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
`
const compoNavigationHtmlContentHtml = `<div>
  <link href="./navigation-links.css" rel="stylesheet" />
  <nav class="navigation-links-nav">
    <span class="navigation-links-text"><span>About</span></span>
    <span class="navigation-links-text1"><span>Features</span></span>
    <span class="navigation-links-text2"><span>Pricing</span></span>
    <span class="navigation-links-text3"><span>Team</span></span>
    <span class="navigation-links-text4"><span>Blog</span></span>
  </nav>
</div>
`
  
  zip.file('home.css', homeCssContent)
  zip.file('index.html', indexContent)
  zip.file('package.json', packageContent)
  zip.file('style.css', styleCssContent)
  componentsFolder.file('navigation-links.css', compoNavigationCssContent)
  componentsFolder.file('navigation-links.html', compoNavigationHtmlContentHtml)
  
  
  const zipContent = await zip.generateAsync({ type: 'blob' });
  saveAs(zipContent, `${componentName}-${language}.zip`);
}

export { generateZipReact, generateZipVue, generateZipNext, generateZipNuxt, generateZipAngular, generateZipHtml };