import { useState } from 'react'
import styles from './CodePanel.module.css'
import { STYLES, CODE_LANG, StylesForLang } from '../dictionaries.js'
import ReactDOMServer from 'react-dom/server'
import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import MultiScreen from '../MultiScreen/index'
import TerminalPanel from '../TerminalPanel'
import ResizeVertical from '../MultiScreen/ResizeVertical'

export default function CodePanel({
  closeCodePanel,
  componentStyles,
  code,
  Prueba,
  showTerminal,
  closeTerminal
}) {

  const [active, setActive] = useState({
    problems: false,
    output: false,
    terminal: false
  })

  const [langSelected, setLangSelected] = useState('react')
  const [styleSelected, setStyleSelected] = useState(STYLES.cssModules)

  /* const formatCode = () => {
    const jsxString = ReactDOMServer.renderToString(code)
    const formattedCode = prettier.format(jsxString, {
      parser: 'babel',
      plugins: [parserBabel]
    })
    return formattedCode
  } */

  const handleSelectedLang = (event) => {
    const selectedLang = event.target.value
    setLangSelected(selectedLang)
  }

  const handleStyleSelected = (e) => {
    setStyleSelected(e.target.value)
  }

  return (
    <ResizeVertical width="100%" height="100%">
      <MultiScreen
        width="100%"
        height="100%"
      />
      {showTerminal && 
      <TerminalPanel 
      active={active} 
      setActive={setActive} 
      closeTerminal={closeTerminal}/> }
    </ResizeVertical>
  )

  /* return (
     <div
       className={show ? `${styles.codePanel}` : `${styles.codePanelDisplay}`}
     >
       <div className={styles.containerOptionsCodePanel}>
         <button
           className={styles.btnClose}
           value={show}
           onClick={() => setShow(!show)}
         >
           X
         </button>
 
         <div className={styles.languageOptions}>
           <select
             className={styles.editorSelect}
             onChange={handleSelectedLang}
             value={langSelected}
           >
             {Object.keys(CODE_LANG).map((lang, idx) => (
               <option key={idx} value={lang}>
                 {CODE_LANG[lang]}
               </option>
             ))}
           </select>
           <select
             className={styles.editorSelect}
             value={styleSelected}
             onChange={handleStyleSelected}
           >
             {Object.keys(StylesForLang[langSelected]).map((key, idx) => (
               <option key={idx} value={key}>
                 {StylesForLang[langSelected][key]}
               </option>
             ))}
           </select>
         </div>
       </div>
       <main className={styles.codeContentShow}>
         <MultiScreen
           width="100%"
           height="75%"
         />
       </main>
       {showTerminal && <TerminalPanel active={active} setActive={setActive} />}
     </div>
   ) */
}
