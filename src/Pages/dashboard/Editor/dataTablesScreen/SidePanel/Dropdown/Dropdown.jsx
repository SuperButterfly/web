import React, { useState } from 'react'

function Dropdown({ title, list, handle }) {
    const [state, setState] = useState({
        isListOpen: false,
        headerTitle: title
    })
    const toggleList = () => {
        setState(s => ({
            isListOpen: !s.isListOpen
        }))
    }
    const selectItem = (item) => {
        const { title, key } = item;
        setState({
            headerTitle: title,
            isListOpen: false,
        }, () => handle(key));
    }
    return (
        <div className="dd-wrapper">
            <button
                type="button"
                className="dd-header"
                onClick={toggleList}
            >
                <div className="dd-header">
                    <div className="dd-header-title">{state.headerTitle}</div>
                    {state.isListOpen
                        ? '-'
                        : '+'}
                </div>
            </button>
            {state.isListOpen && (
                <div className="dd-list">
                    {list.map((item) => (
                        <button
                            className="dd-list-item"
                            key={item.key}
                            onClick={() => selectItem(item)}
                        >
                            {`${item.title}${item.selected && ' 👈'}`}
                        </button>
                    ))}
                </div>
            )}
        </div >
    )
}

export default Dropdown