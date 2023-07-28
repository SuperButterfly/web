import styles from './leftPanel.module.css'

const TabMenu = ({ selected, change }) => {
  return (
    <div className={styles.elementsSectionContainer}>
      <span
        className={styles.elementsSectionText}
        style={
          !selected
            ? { borderColor: 'transparent' }
            : { borderColor: '#5ca9fd' }
        }
        onClick={() => change(true)}
      >
        Version History
      </span>
      {/* Aqui deberia un explorador o alguna especie de menu para guardar y recuperar, usar plantillas, etc. */}
      {/* <span
        className={styles.elementsSectionText}
        style={!selected ? { borderColor: '#5ca9fd' } : { borderColor: 'transparent' }}
        onClick={() => change(false)}
      >Advanced</span> */}
    </div>
  )
}

export default TabMenu
