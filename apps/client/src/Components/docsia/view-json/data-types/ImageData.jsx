import { useEffect, useState } from 'react'
import style from './DataType.module.css'
import Option1 from './options/option1'
import Option2 from './options/options2'
const ImageData = ({ data, id, edit, deleteData, add, size }) => {
  useEffect(() => {
    if (data.data !== '') {
      setSelectedImage(data.data)
    }
  }, [data.data])
  const [selectedImage, setSelectedImage] = useState(null)
  const [options, setOptions] = useState({
    option1: false,
    option2: false
  })
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setSelectedImage(reader.result) // reader.result contains the base64 string
          console.log(reader.result)
          edit({ data: reader.result, type: data.type }, id) // Pass the base64 string to your function if needed
        }
        reader.readAsDataURL(file)
      } else {
        alert('Por favor, selecciona un archivo de imagen válido.')
      }
    }
  }
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
  const deleteHtml = () => {
    deleteData(id)
  }
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
      <div className={style.html}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Imagen seleccionada"
            className={style.image}
          />
        )}
      </div>
    </div>
  )
}
export default ImageData
