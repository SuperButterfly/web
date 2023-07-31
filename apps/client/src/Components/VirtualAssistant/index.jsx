import { useState, useEffect } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import { FaSpinner } from 'react-icons/fa'
import styles from './virtualAssistant.module.css'
import ContextMenu from '../Shared/ContextMenu'
import { useSelector, useDispatch } from 'react-redux';
import { addCommandToAssistant } from '../../redux/actions/projects'
import { setIsLoadingJson, setChangeCodeDecline, setOpenaiJson } from '../../redux/slices/projectSlices'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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

  const handleShortCut = (shortCut) => {
    dispatch(setIsLoadingJson())
    const obj = { ...prompt, command: shortCut }
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
    handler()
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
      if (openaiJson.id) setCommandResult(true)
      if (openaiJson.error) {
        dispatch(setOpenaiJson({}))
        toast.error(
          'Error: Something went wrong!')
      }
    }, [openaiJson]
  )

  const positionMenu = {
    top: 35,
    left: 0
  }

  const optionesMenu = [
    { label: 'Refactoring Suggestions', handler: () => handleShortCut('refactor this code') },
    { label: 'Fix Errors', handler: () => handleShortCut('Fix Errors') },
    { label: 'Code Optimization', handler: () => handleShortCut('Optimize the code') },
    { label: 'Documentation Generation', handler: () => handleShortCut('add code comments') }
  ]

  const onDeclineCode = () => {
    setCommandResult(false)
    setCommand('')
    dispatch(setChangeCodeDecline(true))
    dispatch(setOpenaiJson({}))
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
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {commandResult && <div className={styles.backgroundModalResponse}></div>}
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