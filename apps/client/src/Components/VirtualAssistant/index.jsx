import { useState, useEffect } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import { FaSpinner } from 'react-icons/fa'
import styles from './virtualAssistant.module.css'
import ContextMenu from '../Shared/ContextMenu'
import { useSelector, useDispatch } from 'react-redux';
import { addCommandToAssistant } from '../../redux/actions/projects'
import { setIsLoadingJson, setChangeCodeDecline, setOpenaiJson } from '../../redux/slices/projectSlices'

const VirtualAssistant = ({ initialMouseX, initialMouseY }) => {
  const [command, setCommand] = useState('')
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

  const [openMenu, setOpenMenu] = useState(false)
  const { prompt, isPromptLoading, openaiJson } = useSelector((state) => state.project)
  const [commandResult, setCommandResult] = useState(false)
  const dispatch = useDispatch()

  const handlePrompChange = (e) => {
    setCommand(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setIsLoadingJson())
    const obj = { ...prompt, command }
    dispatch(addCommandToAssistant(obj))
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

  useEffect(
    () => {
      if (openaiJson.Action) setCommandResult(true)
    }, [openaiJson]
  )

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

  const onDeclineCode = () => {
    setCommandResult(false)
    setCommand('')
    dispatch(setChangeCodeDecline())
  }

  const onAcceptCode = () => {
    setCommandResult(false)
    setCommand('')
    dispatch(setOpenaiJson({}))
  }

  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      className={styles.containerAssistanVirtual}
      style={position}
    >
      {commandResult
        ? <div className={styles.containerAssistanVirtualForm}>
          <button className={styles.buttonAccept} onClick={onAcceptCode}>Accept</button>
          <button className={styles.buttonDecline} onClick={onDeclineCode}>Decline</button>
        </div>
        :
        <form
          onSubmit={handleSubmit}
          className={styles.containerAssistanVirtualForm}
        >
          <input
            className={styles.inputPromp}
            type='text' value={command}
            onChange={handlePrompChange}
            placeholder='Ask the Assistant'
            onFocus={onContextMenu}
          />

          <button
            type='submit'
            onClick={handleSubmit}
            className={styles.buttonSend}
            disabled={isPromptLoading}
          >
            {
              isPromptLoading
                ? <FaSpinner className={styles.spinner} size={18} color="#0f8fff" />
                : <BiSolidSend size={18} color="#0f8fff" />
            }
          </button>
        </form>}
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