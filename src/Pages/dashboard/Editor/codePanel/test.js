import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import Prueba from '../prueba/Prueba.js';
 
const renderComponentToString = (component) => {
  const jsxString = ReactDOMServer.renderToString(<Prueba />);
  const formattedCode = prettier.format(jsxString, {
    parser: 'babel',
    plugins: [parserBabel],
  });
  return formattedCode;
};

export const htmlStringReact = `
  import React from 'react'
  
  import projectStyles from '.style.module.css'
  import styles from './home.module.css'

  const Home = (props) => {
    return (
        ${renderComponentToString()}
    )
  }

  export default Home
  `
export const htmlStringVue = `
        <template>
           ${renderComponentToString()}
        </template>
        
        <script>
        export default {
          name: 'Home',
          props: {},
        }
        </script>
                  ` 
export const htmlStringAngular = `
  import { Component } from '@angular/core'
  
  @Component({
    selector: 'la-costumbre',
    templateUrl: 'la-costumbre.html',
    styleUrls: ['la-costumbre.css'],
  })
  export class LaCostumbre {
    constructor() {}
  }
  `
export const htmlStringHtml = `
${renderComponentToString()}
`;

export const htmlStringUidl = `
json
`;