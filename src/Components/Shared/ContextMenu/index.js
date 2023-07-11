import styles from './ContextMenu.module.css'

const ContextMenu = ({ options, onOptionClick, close, position }) => {
  const handleClick = (option) => {
    onOptionClick(option)
  }

  return (
    <>
      <div className={styles.menuCloser} onClick={close}></div>
      <div
        className={styles.menu}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          display: position.top === 0 && position.left === 0 ? 'none' : 'flex'
        }}
      >
        <div className={styles.container}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleClick(option.handler)} className={styles.option}>
              {typeof option.label === 'object' ? (
                <>
                  <span className={styles.label}>{option.label.main}</span>
                  <span className={styles.label}> {option.label.secondary}</span>
                </>
              ) : (
                <span className={styles.label}>{option.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContextMenu
