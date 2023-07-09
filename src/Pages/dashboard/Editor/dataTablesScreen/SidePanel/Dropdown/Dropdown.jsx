import React, { useState } from 'react'
import styles from './dropdown.module.css'

function Dropdown ({ title, id, list, handler }) {
  const [state, setState] = useState({
    isListOpen: false,
    headerTitle: title,
    selected: undefined
  })
  const toggleList = () => {
    setState(s => ({
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
            <button
                type="button"
                className={styles.ddHeader}
                onClick={toggleList}
            >
                <div className={styles.ddHeader}>
                    <div className={styles.ddHeaderTitle}>{state.headerTitle}</div>
                    {state.isListOpen
                      ? '-'
                      : '+'}
                </div>
            </button>
            {state.isListOpen && (
                <div className={styles.ddList}>
                    {list.map((item) => (
                        <button
                            className={styles.ddListItem}
                            key={item.key}
                            onClick={() => selectItem(item)}
                        >
                            {`${item.value}${item.key === state.selected ? ' 👈' : ''}`}
                        </button>
                    ))}
                </div>
            )}
        </div >
  )
}

export default Dropdown
