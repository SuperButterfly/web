import './clases.css'
import { useState } from 'react'
import EditClasses from './EditClasses.js'

const Clases = () => {
  const classesListInitial = [
    { name: 'input', isChecked: true },
    { name: 'button', isChecked: true },
    { name: 'list', isChecked: true }
  ]

  const [menuOpen1, setMenuOpen1] = useState(false)
  const [menuOpen2, setMenuOpen2] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [classesList, setClassesList] = useState(classesListInitial)
  const [classesSelected, setClassesSelected] = useState([])

  const handleclassesList = (ev) => {
    ev.preventDefault()
    let { id } = ev.target
    if (id === 'inputValue') id = inputValue
    const found = classesSelected.find((item) => item.name === id)
    if (found) return
    const selected = classesSelected.find((item) => item.name === id)
    if (selected) {
      setClassesSelected([...classesSelected, selected])
    } else {
      setClassesSelected([...classesSelected, { name: id, isChecked: true }])
    }
    setMenuOpen1(false)
    setInputValue('')
  }

  const handleInputChange = (ev) => {
    ev.preventDefault()
    setInputValue(ev.target.value)
    if (ev.target.value === '') {
      setMenuOpen2(false)
      setClassesList(classesListInitial)
    } else {
      const found = classesList.filter((item) =>
        item.name.includes(ev.target.value)
      )
      if (found) {
        setClassesList(found)
      }
      setMenuOpen2(true)
    }
  }

  const handleCheck = (ev) => {
    const aux = classesSelected.map((item) => {
      if (item.name === ev.target.name) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    setClassesSelected(aux)
  }

  const releaseClass = (ev) => {
    const aux = classesSelected.filter(
      (classSelected) => classSelected.name === ev.target.id
    )
    console.log(aux)
    setClassesSelected(aux)
  }

  return (
    <div className="clases-container">
      <div className="clases-container1">
        <span className="clases-heading-clases">Clases</span>
        <svg viewBox="0 0 1024 1024" className="clases-icon">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="clases-icon2">
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="clases-container5">
        <input
          type="text"
          value={inputValue}
          placeholder="Type to search or create a class"
          className="clases-textinput1"
          onFocus={(e) => setMenuOpen1(true)}
          onChange={handleInputChange}
        />
      </div>
      {menuOpen1 && (
        <div className="clases-container6">
          {menuOpen2 ? (
            <div
              className="clases-container10"
              id={'inputValue'}
              onClick={handleclassesList}
            >
              <span id={inputValue}>Create a class</span>
              <span className="clases-text1" id={'inputValue'}>
                {inputValue}
              </span>
            </div>
          ) : null}
          {classesList && classesList.length > 0
            ? classesList.map(({ name }, idx) => (
                <span
                  key={idx}
                  id={name}
                  className="clases-text"
                  onClick={handleclassesList}
                >
                  .{name}
                </span>
            ))
            : null}
        </div>
      )}

      <div className="clases-container-list">
        {classesSelected && classesSelected.length
          ? classesSelected.map(({ name, isChecked }, idx) => (
              <div className="clases-container2" key={idx}>
                <div className="clases-container3">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onClick={handleCheck}
                    className="checkinput"
                    name={name}
                  />
                  <span>{name}</span>
                </div>
                <div className="clases-container4">
                  <svg viewBox="0 0 1024 1024" className="clases-icon4">
                    <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
                  </svg>
                  <svg
                    id={name}
                    viewBox="0 0 1024 1024"
                    className="clases-icon6"
                    onClick={releaseClass}
                  >
                    <path
                      id={idx}
                      d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                    ></path>
                  </svg>
                </div>
              </div>
          ))
          : null}
      </div>
      <div className="clases-container7">
        <EditClasses />
      </div>
    </div>
  )
}

export default Clases
