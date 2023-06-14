import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import './CodePanel.css';
import { STYLES } from './dictionaries.js';
import { input, text } from './test';

export default function ShowCode({ jsonData, Prueba }) {
  const [codeState, setCodeState] = useState({
    code: false,
    css: false,
  });
  const handleSelectChange = (event) => {
    setValorSelect(event.target.value);
  };

  const [show, setShow] = useState(true);
  const [opciones, setOpciones] = useState([
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'html', label: 'HTML' },
    { value: 'uidl', label: 'UIDL' },
  ]);
  
  const [styleSelected, setStyleSelected] = useState(STYLES.cssModules);
  
  
  const [valorSelect, setValorSelect] = useState('react');
  
  const handleStyleSelected = (e) => {
    setStyleSelected(e.target.value);
  }
  const handleDisplay = () => {
    const newShow = !show;
    setShow(newShow);
  };
  
  const contenidoPrueba = Prueba
  
  const renderComponentToString = () => {
    const jsxString = ReactDOMServer.renderToString(contenidoPrueba);
    const formattedCode = prettier.format(jsxString, {
      parser: 'babel',
      plugins: [parserBabel],
    });
    return formattedCode;
  };


  const htmlString = renderComponentToString();
  const htmlStringVue = "Vue"


  const handleClick = (codeType) => {
    
    
    setCodeState((prevState) => ({
      ...prevState,
      [codeType]: !prevState[codeType],
      [codeType === 'code' ? 'css' : 'code']: false,
    }));
    console.log(valorSelect)
  };
  
  return (
  <div className={show ? "codePanel" : "codePanelDisplay"}>
  <div>
    <div className="containerOptions">
    
      <button className="btnClose" value={show} onClick={() => handleDisplay()}>
        X
      </button>
      <div className='languageOptions'>
            <select className='' onChange={handleSelectChange} value={valorSelect}>
              {opciones.map((opcion) => (
              <option key={opcion.value} value={opcion.value}>
              {opcion.label}
              </option>
             ))}
            </select>
            
            <select className='editorSelect' value={styleSelected} onChange={handleStyleSelected}> 
                {Object.keys(STYLES).map((key, idx) => (
                <option key={idx} value={key}>
                  {STYLES[key]}
                </option>
              ))}
            </select>

      </div>
    </div>
    
    <div>
    <div className='btnGroupEditor'>
      <div className='editorTabs'>
        <button
          className={codeState.code ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick("code")}
        >
          code.js
        </button>
  
        <button
          className={codeState.css ? "btnShowCss" : null}
          value={codeState.css}
          onClick={() => handleClick("css")}
        >
          code.css
        </button>
      </div>
    </div>
      <div
        className={codeState.code ? "codeContentShow" : "codeContentDisable"}
      >
      {valorSelect === "react" && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {htmlString}
      </SyntaxHighlighter>}
      {valorSelect === "vue" && <div className='background'  language="jsx" style={ oneLight }>
        { `
                    <template>
          <div class="home-container">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1684570174141-440c0892987f?ixid=M3w5MTMyMXwwfDF8YWxsfDE4fHx8fHx8Mnx8MTY4NTAyNzA3NHw&amp;ixlib=rb-4.0.3&amp;h=400"
              class="home-image textarea"
            />
            <img
              alt="pastedImage"
              src="/pastedimage-e5js-300w.png"
              class="home-pasted-image"
            />
            <img
              alt="pastedImage"
              src="/pastedimage-knft-300w.png"
              class="home-pasted-image1"
            />
          </div>
        </template>
        
        <script>
        export default {
          name: 'Home',
          props: {},
        }
        </script>
                  ` }
      </div>}
      </div>
      <textarea
        className={
          codeState.css ? "codeContentShowCss" : "codeContentDisableCss"
        }
        defaultValue={`
            // Aquí puedes colocar tu código de script
            .codePanel {
              background-color: rgb(255 255 255);
              width: 1200px;
              height: 100vh;
              margin: auto;
              padding: auto;
              border: 1px solid red;
            }
            
            .codePanelDisplay {
              display: none;
            }
            
            .containerOptions button {
              /* border: 2px solid blue; */
              cursor: pointer;
              font-weight: 600;
            }
            
            button {
              background-color: transparent;
              border: 1px solid white;
              margin: 0 2px 0 2px;
              padding: 5px;
            }
            
            .btnShowCode {
              border-bottom: 2px solid rgb(70 160 255);
            }
            
            .btnShowCss {
              border-bottom: 2px solid rgb(70 160 255);
            }
            
            .codeContentDisable {
              display: none;
            }
            
            .codeContentShow {
              display: block;
              width: 80%;
              height: 60vh;
              border: 0;
              outline: 0;
              margin: auto;
              padding: auto;
              margin-top: 5px;
            }
            
            .codeContentShowCss {
              display: block;
              display: block;
              width: 80%;
              height: 60vh;
              border: 0;
              outline: 0;
              margin: auto;
              padding: auto;;
              margin-top: 5px;
            }
            
            .codeContentDisableCss {
              display: none;
            }
          `}
      ></textarea>
    </div>
  </div>
</div>
  )
}
