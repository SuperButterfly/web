import React, { useState } from 'react'
import styles from './dropdown.module.css'
import ArrowRight from '../../../../../assets/angle-right.svg'
import ArrowDown from '../../../../../assets/angle-down.svg'
import checkbox from '../../../../../assets/checkbox.svg'

function Dropdown({ title, id, list, handler }) {
  const [state, setState] = useState({
    isListOpen: false,
    headerTitle: title,
    selected: undefined
  })
  const toggleList = () => {
    setState((s) => ({
      ...s,
      isListOpen: !s.isListOpen
    }))
  }
  const selectItem = (item) => {
    const { value, key } = item
    // console.log('KEY')
    // console.log(key+' '+value)
    setState({
      headerTitle: value,
      isListOpen: false,
      selected: key
    })
    handler(id, key)
  }
  return (
    <div className={styles.ddWrapper}>
      <button type="button" className={styles.ddHeader} onClick={toggleList}>
        <span>{state.headerTitle}</span>
        <img
          className={styles.ddArrows}
          src={`${state.isListOpen ? ArrowDown : ArrowRight}`}
          alt="arrows"
        />
      </button>
      {state.isListOpen && (
        <ul className={styles.ddList}>
          {list.map((item) => (
            <li
              className={styles.ddListItem}
              key={item.key}
              onClick={() => selectItem(item)}
            >
              {`${item.value}${item.key === state.selected ? ' 👈' : ''}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
