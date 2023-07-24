import { useState, useEffect } from 'react'
import { SiSendinblue } from 'react-icons/si'
import styles from './virtualAssistant.module.css'
import ContextMenu from '../Shared/ContextMenu'
import { onContextMenu } from 'codemirror/src/edit/mouse_events';

const VirtualAssistant = ({ initialMouseX, initialMouseY }) => {
  const [promp, setPromp] = useState('')
  const [isMoving, setIsMoving] = useState(false)
  const [position, setPosition] = useState({
    top: initialMouseY,
    left: initialMouseX
  })
  const [mousePosition, setMousePosition] = useState(
    useState({
      top: 0,
      left: 0
    })
  )
  const [contextMenuModal, setContextMenuModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handlePrompChange = (e) => {
    setPromp(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(promp)
  }

  const handleMouseMove = (e) => {
    if (isMoving) {
      setPosition({
        top: position.top + (- mousePosition.top + e.clientY),
        left: position.left + (- mousePosition.left + e.clientX),
      })
    }
  }

  const handleMouseUp = () => {
    setIsMoving(false)
  }

  const handleMouseDown = (e) => {
    setIsMoving(true)
    setMousePosition({
      top: e.clientY,
      left: e.clientX,
    })
  }

  const onOptionClickMenu = (handler) => {
    // handler(index)
    setOpenMenu(false)
  }
  const onContextMenu = (event) => {
    event.preventDefault();
    setOpenMenu(true)
  }

  const onCloseMenu = () => {
    setOpenMenu(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMoving]);

  const positionMenu = {
    top: 35,
    left: 0
  }

  const optionesMenu = [
    { label: 'Refactoring Suggestions', handler: (i) => { } },
    { label: 'Fix Errors', handler: (i) => { } },
    { label: 'Code Optimization', handler: (i) => { } },
    { label: 'Documentation Generation', handler: (i) => { } }
  ]


  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      className={styles.containerAssistanVirtual}
      style={position}
    >
      <form
        onSubmit={handleSubmit}
        className={styles.containerAssistanVirtualForm}
      >
        <input
          className={styles.inputPromp}
          type='text' value={promp}
          onChange={handlePrompChange}
          placeholder='Ask the Assistant'
          onFocus={onContextMenu}
        />

        <button
          type='submit'
          onClick={handleSubmit}
          className={styles.buttonSend}
        >
          <SiSendinblue size={15} color="#0f8fff" />
        </button>
      </form>
      {openMenu &&
        <ContextMenu
          options={optionesMenu}
          onOptionClick={onOptionClickMenu}
          close={onCloseMenu}
          position={positionMenu}
        />}
    </div>
  )
};

export default VirtualAssistant