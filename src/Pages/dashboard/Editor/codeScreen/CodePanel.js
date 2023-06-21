import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodePanel.css';
import { STYLES, CODE_LANG } from './dictionaries.js';
import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { htmlStringReact, htmlStringAngular, htmlStringVue, htmlStringHtml, htmlStringUidl } from './test';

export default function CodePanel({ closeCodePanel, code, Prueba }) {
  const [codeState, setCodeState] = useState({
    code: false,
    css: false,
    files: 1,
  });
  console.log('El código', code);
  
  const formatCode = () => {
    const jsxString = ReactDOMServer.renderToString(code);
    const formattedCode = prettier.format(jsxString, {
    parser: 'babel',
    plugins: [parserBabel],
  });
  return formattedCode;
  };
  
  const [langSelected, setLangSelected] = useState('react');
  const [currentCode, setCurrentCode] = useState(code);

  const handleSelectedLang = (event) => {
    const selectedLang = event.target.value;
    setLangSelected(selectedLang);

    switch (selectedLang) {
      case 'react':
        setCurrentCode(code);
        break;
      case 'angular':
        setCurrentCode(htmlStringAngular);
        break;
      case 'vue':
        setCurrentCode(htmlStringVue);
        break;
      case 'html':
        setCurrentCode(htmlStringHtml);
        break;
      case 'uidl':
        setCurrentCode(htmlStringUidl);
        break;
      default:
        break;
    }
    
    setCodeState(prevState => ({
    ...prevState,
    files: 1
    }));
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {

    window.navigator.clipboard.writeText(currentCode)
      .then(() => {
        console.log('Code copied to clipboard');
        console.log(`El código copiado es: \n${currentCode}`);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to copy code:', error);
        setIsCopied(false);
      });
  };

  const [show, setShow] = useState(true);

  const [styleSelected, setStyleSelected] = useState(STYLES.cssModules);

  const handleStyleSelected = (e) => {
    setStyleSelected(e.target.value);
  }
  
  const handleDisplay = () => {
    closeCodePanel();
  };

  const handleClick = (codeType) => {


    setCodeState((prevState) => ({
      ...prevState,
      files: 1,
      [codeType]: !prevState[codeType],
      [codeType === 'code' ? 'css' : 'code']: false,
    }));
    
  };
  const handleClick2 = (codeType) => {


    setCodeState((prevState) => ({
      ...prevState,
      files: 2,
      [codeType]: !prevState[codeType],
      [codeType === 'code' ? 'css' : 'code']: false,
    }));
    
  };
  const handleClick3 = () => {

    setCodeState((prevState) => ({
      ...prevState,
      files: 3
    }));
    
  };

  return (
  <div className={show ? "codePanel" : "codePanelDisplay"}>
  <div>
    <div className="containerOptions">
    
      <button className="btnClose" value={show} onClick={() => setShow(!show)}>
        X
      </button>
      <div className='languageOptions'>
            <select className='' onChange={handleSelectedLang} value={langSelected}>
              {Object.keys(CODE_LANG).map((lang, idx) => (
              <option key={idx} value={lang}>
              {CODE_LANG[lang]}
              </option>
             ))}
            </select>
            {
              langSelected === 'react' && 
              <select className='editorSelect' value={styleSelected} onChange={handleStyleSelected}> 
                {Object.keys(STYLES).map((key, idx) => (
                <option key={idx} value={key}>
                  {STYLES[key]}
                </option>
                ))}
              </select>
            }
        </div> 
    </div>
    
    <div>
    <div className='btnGroupEditor'>
    { langSelected === "react" && <div>
      <div className='editorTabs'>
          <button
          className={codeState.files === 1 ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick("code")}
          >
          code.js
          </button>
                
          <button
          className={codeState.files === 2 ? "btnShowCss" : null}
          value={codeState.css}
          onClick={() => handleClick2("css")}
          >
          code.css
          </button>
        </div> 
      </div>}
      
      
      { langSelected === "vue" && <div>
      <div className='editorTabs'></div> 
      </div>}
      
      
      { langSelected === "angular" && <div>
      <div className='editorTabs'>
          <button
          className={codeState.files === 1 ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick("code")}
          >
          code.ts
          </button>
          
          <button
          className={codeState.files === 2 ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick2("code")}
          >
          code.html
          </button>
                
          <button
          className={codeState.files === 3 ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick3()}
          >
          code.css
          </button>
        </div> 
      </div>}
      
      
      { langSelected === "html" && <div>
      <div className='editorTabs'>
          <button
          className={codeState.files === 1 ? "btnShowCode" : null}
          value={codeState.code}
          onClick={() => handleClick("code")}
          >
          code.html
          </button>
                
          <button
          className={codeState.files === 2 ? "btnShowCode" : null}
          value={codeState.css}
          onClick={() => handleClick("css")}
          >
          code.css
          </button>
        </div> 
      </div>}
      
      { langSelected === "uidl" && <div>
      <div className='editorTabs'></div> 
      </div>}
      
          
      <button onClick={handleCopy}>
            { isCopied ?
                <>
                  <svg viewBox="0 0 24 24" className="editor-copy-icon" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="2">
                    <path d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H14.86C15.0589 3.25 15.2497 3.32902 15.3903 3.46967C15.531 3.61032 15.61 3.80109 15.61 4C15.61 4.19891 15.531 4.38968 15.3903 4.53033C15.2497 4.67098 15.0589 4.75 14.86 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V10.29C19.25 10.0911 19.329 9.90032 19.4697 9.75967C19.6103 9.61902 19.8011 9.54 20 9.54C20.1989 9.54 20.3897 9.61902 20.5303 9.75967C20.671 9.90032 20.75 10.0911 20.75 10.29V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z" fill="#000000"/>
                    <path d="M10.5 15.25C10.3071 15.2352 10.1276 15.1455 10 15L7.00001 12C6.93317 11.86 6.91136 11.7028 6.93759 11.5499C6.96382 11.3971 7.03679 11.2561 7.14646 11.1464C7.25613 11.0368 7.3971 10.9638 7.54996 10.9376C7.70282 10.9113 7.86006 10.9331 8.00001 11L10.47 13.47L19 4.99998C19.14 4.93314 19.2972 4.91133 19.4501 4.93756C19.6029 4.96379 19.7439 5.03676 19.8536 5.14643C19.9632 5.2561 20.0362 5.39707 20.0624 5.54993C20.0887 5.70279 20.0669 5.86003 20 5.99998L11 15C10.8724 15.1455 10.693 15.2352 10.5 15.25Z" fill="#000000"/>
                  </svg>
                  Copied!
                </>
              : <>
                  <svg viewBox="0 0 20 20" className="editor-copy-icon" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 
                      2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 
                      2 0 012-2h5zM8 8h9v9H8V8z">
                    </path>
                  </svg> 
                  Copy
              </>
              }
      </button> 
    </div>
      <div
        className= "codeContentShow" 
      >
      
      {langSelected === "react" && codeState.files === 1 && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {code}
      </SyntaxHighlighter>}
      
      {/*{langSelected === "vue" && codeState.files === 1 && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {htmlStringVue}
      </SyntaxHighlighter>}
      
      {langSelected === "angular" && codeState.files === 1 && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {htmlStringAngular}
      </SyntaxHighlighter>}
      
      {langSelected === "html" && codeState.files === 1 && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {htmlStringHtml}
      </SyntaxHighlighter>}
      
      {langSelected === "uidl" && codeState.files === 1 && <SyntaxHighlighter className='background'  language="jsx" style={ oneLight }>
        {htmlStringUidl}
      </SyntaxHighlighter>}
      {`este es el code muaajajja${code}`}*/}
      
      
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