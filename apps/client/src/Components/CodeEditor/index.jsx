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
import { useDispatch, useSelector } from 'react-redux'
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
  const [isConnected, setIsConnected] = useState(false)
  const [code, setCode] = useState(String(text))
  const [promptJson, setPromptJson] = useState({})
  const [idScreen, setIdScreen] = useState(id)
  const [currentProvider, setCurrentProvider] = useState(null)
  const [currentEditor, setCurrentEditor] = useState(null)
  const { openaiJson, isPromptDecline } = useSelector((state) => state.project)
  const [indexScreen, setIndexScreen] = useState(index)
  const [toggle, setToggle] = useState(false)
  const [currentBinding, setCurrentBinding] = useState(null)
  const styleContainer = {
    height: 'calc(100% - 30px)',
  }

  useEffect(
    () => {
      if (openaiJson.Action) {
        const newContent = openaiJson.Code;
        const startPosition = { line: 0, ch: 0 };
        const endPosition = { line: newContent.split('\n').length, ch: 0 };
        if (currentEditor) currentEditor.replaceRange(newContent, startPosition, endPosition);
      }
    }, [openaiJson]
  )

  useEffect(
    () => {
      const obj = { ...promptJson, code }
      dispatch(setPromptOfVirtualAssistant(obj))
    }, [code, promptJson]
  )

  useEffect(
    () => {
      if (isPromptDecline) {
        if (currentEditor) {
          currentEditor.undo()
        }
      }
    }, [isPromptDecline]
  )

  useEffect(
    () => {
      const editorContainer = document.getElementById(`indexScreen${indexScreen}`);

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
        setPromptJson({ selected: selectedText, position: cursorIndex, id })
      })
      setCurrentEditor(editor)
      setToggle(true)
      return () => {
        editor.toTextArea()
      }

    }, []
  )

  useEffect(() => {
    if (toggle && currentEditor) {
      const ydoc = new Y.Doc()
      const ytext = ydoc.getText('codemirror')
      ytext.insert(0, text);
      const provider = new WebsocketProvider(
        'ws://localhost:1234',
        `team00${id}`,
        ydoc
      )
      provider.awareness.setLocalStateField('user', {
        name: 'Anonymous ' + Math.floor(Math.random() * 100),
        color: userColor.color,
        colorLight: userColor.light
      })
      const binding = new CodemirrorBinding(ytext, currentEditor, provider.awareness)

      setCurrentBinding(binding)
      setCurrentProvider(provider)
      setIsConnected(provider.shouldConnect)
    
      return () => {
        provider.disconnect()
        binding.destroy()
      }
    }
  }, [id, toggle])

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
      <textarea
        className={styleds.codeMirrorContainer}
        id={`indexScreen${indexScreen}`}
        style={styleContainer}
      />
    </div>
  )
}

export default CodeEditor

