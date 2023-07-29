import React, { useState, useEffect, useRef } from 'react'
import './menu.css'
import {
  addClassProperties,
  deleteClassProperties
} from '@/redux/actions/projects'
import { useSelector, useDispatch } from 'react-redux'

export const MenuCssClass = ({
  index,
  itemName,
  selectedIndex,
  setShowDotAythen,
  setShowMenu,
  handleDotAythenClick,
  buttonsFixedList,
  updateState,
  deleteElement
}) => {
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false)
  const isDisabled = buttonsFixedList.includes(itemName)
  const [propertyAddList, setPropertyAddList] = useState([])
  const { projectSelected } = useSelector((state) => state.project)
  const [propertyElements, setPropertyElements] = useState({})

  useEffect(() => {
    if (projectSelected.classList) {
      const result = projectSelected.classList.filter(
        (item) => item.nameClass == itemName
      )
      if (result?.length > 0) {
        const newPropertiesList = result[0].properties.style
        setPropertyAddList(newPropertiesList)
        setPropertyElements(result[0].properties)
      }
    }
  }, [itemName, projectSelected])

  const showDotAythen = () => {
    setShowDotAythen(false)
  }
  const ShowMenu = () => {
    setShowMenu(true)
  }

  const dispatch = useDispatch()

  const handleEdit = () => {
    console.log('Editando elemento con índice:', index)
    setShowDotAythen(true)
    setShowMenu(false)
    handleDotAythenClick(index)
  }

  const handleDuplicate = () => {
    console.log('Duplicando elemento con índice:', index)
    updateState(`${itemName}1`, index)
    if (propertyAddList) {
      console.log('propertyAddList', propertyAddList)
      console.log('itenName', itemName)
      dispatch(
        addClassProperties(projectSelected.id, {
          nameClass: `${itemName}1`,
          properties: {
            ...propertyElements,
            style: propertyAddList || {}
          }
        })
      )
    }
    setShowMenu(false)
  }

  const handleDelete = () => {
    if (buttonsFixedList.includes(itemName)) {
      console.log('boton desactivado', projectSelected)
      return
    }
    console.log('boton activado')
    deleteElement(index)
    dispatch(
      deleteClassProperties(projectSelected.id, {
        nameClass: itemName,
        properties: {}
      })
    )
    setShowMenu(false)
  }

  return (
    <div className="cssClasses-container">
      <div className="menu-container-cssClasses">
        <ul className="items-container">
          <li className="item" onClick={handleEdit}>
            Edit
          </li>
          <li className="item" onClick={handleDuplicate}>
            Duplicate<span className="item-word">Ctrl + D</span>
          </li>
          <li
            className={isDisabled ? 'disabled-item' : 'item'}
            onClick={handleDelete}
            disabled={isDeleteDisabled}
          >
            Delete
          </li>
        </ul>
      </div>
    </div>
  )
}
