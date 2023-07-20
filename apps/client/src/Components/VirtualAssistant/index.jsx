import { useState, useEffect } from 'react'
import { SiSendinblue } from 'react-icons/si'
import styles from './virtualAssistant.module.css'

const VirtualAssistant = ({initialMouseX, initialMouseY}) => {
  const [promp, setPromp] = useState('')
  const [isMoving, setIsMoving] = useState(false)
  const [ position, setPosition] = useState({
    top: initialMouseY,
    left: initialMouseX
  })
  const [mousePosition, setMousePosition] = useState(
    useState({
      top: 0,
      left: 0
    })
  )

  const handlePrompChange = (e) => {
    setPromp(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(promp)
  }

  const handleMouseMove = (e) => {
    if(isMoving){
      setPosition({
        top: position.top + ( - mousePosition.top + e.clientY),
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

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMoving]);


  return (
    <form 
    className={styles.containerAssistanVirtual} 
    onSubmit={handleSubmit} 
    onMouseUp={handleMouseUp}
    onMouseDown={handleMouseDown}
    style={position}
    >
      <input type='text' value={promp} onChange={handlePrompChange} />
      <button type='submit'><SiSendinblue size={15} color="blue" /></button>
    </form>
  )
};

export default VirtualAssistant