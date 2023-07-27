import React, { useEffect, useRef, useState } from 'react'
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'
import CodeMirror from 'codemirror'
import { CodemirrorBinding } from 'y-codemirror'
import styled from 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/matchbrackets'
// import styles from './codeEditor.css'
import styleds from './codeEditors.module.css'
import ButtonCopy from '@/Components/Shared/Buttons/ButtonsCopy'
import { useDispatch } from 'react-redux'
import { setPromptOfVirtualAssistant } from '@/redux/slices/projectSlices'

const usercolors = [
  { color: '#30bced', light: '#30bced33' },
  { color: '#6eeb83', light: '#6eeb8333' },
  { color: '#ffbc42', light: '#ffbc4233' },
  { color: '#ecd444', light: '#ecd44433' },
  { color: '#ee6352', light: '#ee635233' },
  { color: '#9ac2c9', light: '#9ac2c933' },
  { color: '#8acb88', light: '#8acb8833' },
  { color: '#1be7ff', light: '#1be7ff33' }
]

const userColor = usercolors[Math.floor(Math.random() * usercolors.length)]

const CodeEditor = ({ text, language, id, index }) => {
  const dispatch = useDispatch()
  // const editorContainerRef = useRef(null)
  const [isConnected, setIsConnected] = useState(false)
  const [code, setCode] = useState(String(text))
  const [promptJson, setPromptJson] = useState({})
  const [idScreen, setIdScreen] = useState(id)
  const [currentProvider, setCurrentProvider] = useState(null)

  const styleContainer = {
    height: 'calc(100% - 30px)',
  }

  useEffect(
    () => {
      const obj = {...promptJson, code}
      dispatch(setPromptOfVirtualAssistant(obj))
    }, [code, promptJson]
  )

  useEffect(() => {
    const ydoc = new Y.Doc()
    const ytext = ydoc.getText('codemirror')
/*
    const provider = new WebsocketProvider(
      'ws://localhost:1234',
      `team00${idScreen}`,
      ydoc
    )

    provider.awareness.setLocalStateField('user', {
      name: 'Anonymous ' + Math.floor(Math.random() * 100),
      color: userColor.color,
      colorLight: userColor.light
    })*/

    /*const editorContainer = editorContainerRef.current
    const editor = CodeMirror(editorContainer, {
      mode: language,
      lineNumbers: true,
      matchBrackets: true
    })*/

    const editorContainer = document.getElementById(idScreen + index);

    const editor = CodeMirror.fromTextArea(editorContainer, {
      mode: language,
      lineNumbers: true,
      matchBrackets: true
    })

    editor.on('change', (instance) => {
      setCode(instance.getValue())
    })

    editor.on('cursorActivity', () => {
      const selectedText = editor.getSelection()
      const cursorPosition = editor.getCursor()
      const cursorIndex = editor.indexFromPos(cursorPosition)
      setPromptJson({selected: selectedText, position: cursorIndex})
    })
/*
    const binding = new CodemirrorBinding(ytext, editor, provider.awareness)
    setCurrentProvider(provider)
    setIsConnected(provider.shouldConnect);-*/
    editor.setValue(text)

    return () => {
      editor.toTextArea()
      //editorContainerRef.current = undefined
      // binding.destroy()
      // provider.disconnect()
    }
  }, [id])

  const toggleConnection = () => {
    if (currentProvider.shouldConnect) {
      setIsConnected(!isConnected)
      currentProvider.disconnect()
    } else if (!currentProvider.shouldConnect) {
      setIsConnected(!isConnected)
      currentProvider.connect()
    }
  }

  return (
    <div className={styleds.container}>
      <div className={styleds.options}>
        <ButtonCopy text={code} />
        <button
          className={styleds.buttonConnect}
          onClick={toggleConnection}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      {/*<div 
      className={styleds.codeMirrorContainer} 
      id={idScreen + index} 
      key={idScreen} 
  ref={editorContainerRef}></div>*/}
      <textarea
        className={styleds.codeMirrorContainer}
        id={idScreen + index}
        key={idScreen}
        style={styleContainer}
      />

    </div>
  )
}

export default CodeEditor

