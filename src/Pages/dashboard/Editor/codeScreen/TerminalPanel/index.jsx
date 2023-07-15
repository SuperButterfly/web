import styles from './terminalPanel.module.css'

const TerminalPanel = ({ active, setActive }) => {
  return (
    <div className={styles.codeTerminal}>
          <ul className={styles.consoleMenu}>
            <li
              className={
                active.problems
                  ? `${styles.terminalActive}`
                  : `${styles.terminalOption}`
              }
              onClick={() =>
                setActive({ output: false, terminal: false, problems: true })
              }
            >
              PROBLEMS
            </li>
            <li
              className={
                active.output
                  ? `${styles.terminalActive}`
                  : `${styles.terminalOption}`
              }
              onClick={() =>
                setActive({ terminal: false, problems: false, output: true })
              }
            >
              OUTPUT
            </li>
            <li
              className={
                active.terminal
                  ? `${styles.terminalActive}`
                  : `${styles.terminalOption}`
              }
              onClick={() =>
                setActive({ output: false, problems: false, terminal: true })
              }
            >
              TERMINAL
            </li>
          </ul>
        </div>
  )
}

export default TerminalPanel