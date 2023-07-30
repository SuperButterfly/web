import { useEffect, useRef, useState } from 'react'
import style from './DataType.module.css' 
import Option1 from './options/option1'
import Option2 from './options/options2'
const TextData = ({ data, id, edit, deleteData, add, size }) => {
  const [html, setHtml] = useState(data.data)
  const contentRef = useRef(null)
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = data.data
    }
    // setHtml(data.data)
  }, [data.type, id, size])

  const [options, setOptions] = useState({
    option1: false,
    option2: false
  })

  
  const handleOptions = (data) => {
    switch (data) {
      case 'op1':
        if (options.option1 === false)
          setOptions({
            ...options,
            option1: true,
            option2: false
          })
        else {
          setOptions({
            option1: false,
            option2: false
          })
        }
        break
      case 'op2':
        if (options.option2 === false)
          setOptions({
            option2: true,
            option1: false
          })
        else {
          setOptions({
            option2: false,
            option1: false
          })
        }
        break
      default:
        break
    }
  }

  const addElement = (type) => {
    add(type, id)
  }
  const handleHtmlChange = (event) => {
    event.preventDefault() 
    const updatedData = { data: event.target.innerHTML, type: data.type }

    edit(updatedData, id)
    if (size === id + 1 && event.target.innerText !== ' ') {
      add('h2', id)
    }
  }
  const deleteHtml = () => {
    deleteData(id)
  }
  const handleKeyDown = async (event) => {
    if (contentRef.current === document.activeElement) {
      if (
        (event.key === 'Backspace' || event.key === 'Delete') &&
        event.target.innerText.trim().length === 0
      ) {
        event.preventDefault(); // Evitar el comportamiento de borrado predeterminado del navegador
        deleteData(id);
      }
      if (event.key === 'Enter') {
        event.preventDefault(); // Evitar la creación del nuevo <div> al presionar Enter
        if (data.type === 'unorderedlist') {
          const headingContainer = event.currentTarget.parentElement;
          // Agregar un salto de línea al contenedor
          headingContainer.appendChild(document.createElement("br"))
          
        }
      }
    }
  };
  
  return (
    <div className={style.container}>
      <div className={style.options}>
        <Option1
          options={options}
          handleoption={handleOptions}
          addElement={addElement}
        />
        <Option2
          deleteData={deleteHtml}
          options={options}
          handleoption={handleOptions}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        contentEditable={true}
        ref={contentRef}
        onInput={handleHtmlChange}
        className={style.html}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
export default TextData
