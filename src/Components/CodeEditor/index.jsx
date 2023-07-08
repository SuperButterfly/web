import React, { useEffect, useRef, useState } from 'react'
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'
import CodeMirror from 'codemirror'
import { CodemirrorBinding } from 'y-codemirror'
import styles from 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/matchbrackets'

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

const CodeEditor = ({ text = '', language = 'javascript' }) => {
  const editorContainerRef = useRef(null)
  const [isConnected, setIsConnected] = useState(false)
  const [code, setCode] = useState(String(text))
  const [currentProvider, setCurrentProvider] = useState(null)

  useEffect(() => {
    const ydoc = new Y.Doc()
    const ytext = ydoc.getText('codemirror')

    const provider = new WebsocketProvider(
      'ws://localhost:1234',
      'team001',
      ydoc
    )

    provider.awareness.setLocalStateField('user', {
      name: 'Anonymous ' + Math.floor(Math.random() * 100),
      color: userColor.color,
      colorLight: userColor.light
    })

    const editorContainer = editorContainerRef.current

    const editor = CodeMirror(editorContainer, {
      mode: language,
      lineNumbers: true,
      matchBrackets: true
    })
    editor.setValue(code)
    editor.on('change', (instance) => {
      setCode(instance.getValue())
    })

    const binding = new CodemirrorBinding(ytext, editor, provider.awareness)
    setCurrentProvider(provider)

    return () => {
      editorContainerRef.current = undefined
      binding.destroy()
      provider.disconnect()
    }
  }, [])

  const toggleConnection = () => {
    if (currentProvider.shouldConnect) {
      currentProvider.disconnect()
      setIsConnected(false)
    } else {
      currentProvider.connect()
      setIsConnected(true)
    }
  }

  useEffect(() => {
    setCode(String(text))
  }, [text])

  return (
    <div>
      <div ref={editorContainerRef} className={styles.editorContainer}></div>
      <button id="y-connect-btn" onClick={toggleConnection}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  )
}

export default CodeEditor
