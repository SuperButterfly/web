import React, { useEffect, useRef, useState } from 'react'
import * as Y from 'yjs'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/matchbrackets'
import '../codeEditor.css'
import styleds from '../codeEditors.module.css'

const CodeTerminal = ({ text, language, id, index }) => {
  const editorContainerRef = useRef(null)
  const [code, setCode] = useState(String(text))
  const styleContainer = {
    height: '600px',
  }

  useEffect(() => {
    const ydoc = new Y.Doc()
    const ytext = ydoc.getText('codemirror')


    const editorContainer = editorContainerRef.current
    const editor = CodeMirror(editorContainer, {
      mode: language,
      lineNumbers: false,
      matchBrackets: true
    })

    editor.on('change', (instance) => {
      setCode(instance.getValue())
    })

    editor.setValue(text)

    return () => {
      editorContainerRef.current = undefined
    }
  }, [])


  return (
    <div className={styleds.container} id={id + index} key={id} ref={editorContainerRef}></div>
  )
}

export default CodeTerminal
