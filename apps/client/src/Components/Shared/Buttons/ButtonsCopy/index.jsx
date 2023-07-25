import { useState } from "react"
import styles from './buttonsCope.module.css'
import { LuCopy, LuCopyCheck } from 'react-icons/lu';

const ButtonCopy = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Code copied to clipboard')
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 3000)
      })
      .catch((error) => {
        console.error('Failed to copy code:', error)
        setIsCopied(false)
      })
  }

  return (
    <button onClick={handleCopy} className={styles.copyBtn}>
      {isCopied ? (
        <>
          <LuCopyCheck size={20} color="green" />
          Copied!
        </>
      ) : (
        <>
          <LuCopy size={20} color="#0f8fff" />
          Copy
        </>
      )}
    </button>
  )
}

export default ButtonCopy