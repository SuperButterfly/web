import React, { useEffect, useState } from 'react'
import style from './View.module.css'
import ViewjsonData from './responseJson/ViewjsonData'
import TextData from './data-types/TextData'
import ImageData from './data-types/ImageData'
import Tables from './data-types/tables/Tables'

const ViewJson = () => {
  const [item, setItem] = useState([
    { data: '<h1>titulo</h1>', type: 'headings' }
  ])

  const properties = {
    sync: 'crdt YJS /react/code/llamil',
    path: '/var/path/path0/',
    menu: true
  }

  useEffect(() => {
    if (item.length < 1) {
      setItem([{ data: '<h1>titulo</h1>', type: 'headings' }])
    } else {
      setItem(item)
    }
  }, [item])

  // ...
  const deleteData = (id) => {
    const newData = item.filter((data, index) => index !== id)
    setItem(newData)
  }
  // ...

  const addBasicData = (type, position) => {
    let newData
    switch (type) {
      case 'h1':
        newData = { data: '<h1><br></h1>', type: 'headings' }
        break
      case 'h2':
        newData = { data: '<h2><br></h2>', type: 'headings' }
        break
      case 'h3':
        newData = { data: '<h3><br></h3>', type: 'headings' }
        break
      case 'ol':
        newData = { data: '<ol><li><br></li></ol>', type: 'listorder' }
        break
      case 'ul':
        newData = { data: '<ul><li><br></li></ul>', type: 'unorderedlist' }
        break
      case 'p':
        newData = { data: '<p><br></p>', type: 'basic Block' }
        break
      case 'image':
        newData = { data: '', type: 'image' }
        break
      case 'table':
        newData = { data: '', type: 'table' }
        break
      default:
        break
    }

    // Agregar nuevos datos sin modificar el array original
    const updatedData = [...item]
    updatedData.splice(position + 1, 0, newData)
    setItem(updatedData)
  }

  const edit = (data, index) => {
    const updatedData = [...item]
    updatedData[index] = data
    setItem(updatedData)
  }

  return (
    <div className={style.container}>
      <div className={style.divcontainer}>
        {item?.map((data, index) =>
          data.type === 'headings' ||
          data.type === 'basic Block' ||
          data.type === 'listorder' ||
          data.type === 'unorderedlist' ? (
            <TextData
              data={data}
              key={index}
              id={index}
              edit={edit}
              deleteData={deleteData}
              size={item.length}
              add={addBasicData}
            />
          ) : data.type === 'image' ? (
            <ImageData
              data={data}
              key={index}
              id={index}
              edit={edit}
              deleteData={deleteData}
              size={item.length}
              add={addBasicData}
            />
          ) : data.type === 'table' ? (
            <Tables
              key={index}
              id={index}
              edit={edit}
              deleteData={deleteData}
              size={item.length}
              add={addBasicData}
            />
          ) : null
        )}
      </div>
      <div className={style.divcontainer}>
        {item.length !== 0 ? (
          <ViewjsonData properties={properties} datas={{ data: item }} />
        ) : null}
      </div>
    </div>
  )
}

export default ViewJson
