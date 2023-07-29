import React, { useState, useRef, useEffect } from 'react'
import {
  addClassProperties,
  updateClassProperties
} from '@/redux/actions/projects'
import { useSelector, useDispatch } from 'react-redux'

export function InputsProperties({
  propertyAddList,
  propertyKeys,
  objProperties,
  inputProperty,
  showFourthList,
  showFifthList,
  showList,
  handleAddProperty,
  handleAddValue,
  handleDeleteProperties,
  classnameChange
}) {
  const [propertyListChange, setPropertyListChange] = useState([])
  const [propertyObjsList, setPropertyObjsList] = useState([])
  const [checked, setChecked] = useState([])
  const { projectSelected } = useSelector((state) => state.project)
  const dispatch = useDispatch()

  useEffect(() => {
    if (propertyAddList && typeof propertyAddList === 'object') {
      const result = Object.entries(propertyAddList).map(
        ([key, value]) => key && value && { key, value }
      )
      setPropertyObjsList(result)
      if (result.length > 0) {
        setChecked((prevChecked) => {
          const newChecked = [...prevChecked]
          result.forEach((item, index) => {
            newChecked[index] = true
          })
          return newChecked
        })

        setPropertyListChange((prevProperties) => {
          const newProperties = [...prevProperties]
          result.forEach((item, index) => {
            newProperties[index] = item.key
          })
          return newProperties
        })
      }
    }
  }, [propertyAddList])

  const handleChange = (e, index) => {
    const newChecked = [...checked]
    newChecked[index] = e.target.checked
    // console.log(e.target.checked)
    setChecked(newChecked)
  }
  const handleshowFourthList = (index) => {
    showFourthList(index)
    // console.log(propertyObjsList)
  }
  const handleshowFifthList = (key, index) => {
    showFifthList(key, index)
  }
  const handleAddPropertyList = (index, item) => {
    const listObject = propertyObjsList[showList.indexMenu]
    handleAddProperty(index, item, listObject)
    // showFifthList(index)
    // console.log(index)
  }
  const handleAddValueList = (item) => {
    handleAddValue(item)
    // console.log(propertyObjsList)
  }
  const handlePropertyNameListChange = (e, index) => {
    const newPropertyChange = [...propertyListChange]
    newPropertyChange[index] = e.target.value
    setPropertyListChange(newPropertyChange)

    /*
         else if (e.target.value != ""){
       const listObject = {key: propertyListChange[index], value: item.value}
       const newIndex = propertyKeys.indexOf(item?.key)
       const newItem = propertyKeys[newIndex]
       if(newIndex && newItem){
         //console.log("newItem", newItem)
          handleAddProperty(newIndex, newItem, listObject)
     }
   }
    */
  }

  const handleDeleteProperty = (index) => {
    const filteredResult = propertyObjsList.filter(
      (item) => item != propertyObjsList[index]
    )

    const newObject = filteredResult.reduce((result, element) => {
      result[element.key] = element.value
      return result
    }, {})

    handleDeleteProperties(newObject)
  }
  const handleBlurAddDeleteProperty = (e, index) => {
    if (e.target.value == '') {
      const filteredResultList = propertyObjsList.filter(
        (item) => item != propertyObjsList[index]
      )
      const newObject = filteredResultList.reduce((result, element) => {
        result[element.key] = element.value
        return result
      }, {})

      handleDeleteProperties(newObject)
    }
  }

  return (
    <>
      {propertyObjsList.map((item, index) => {
        return (
          <div className="left-property" key={index}>
            {item.key && item.value && (
              <label className="pt-ckbox">
                <input
                  name={index}
                  type="checkbox"
                  id={index}
                  className="checkbox-property"
                  checked={checked[index]}
                  onChange={(e) => handleChange(e, index)}
                ></input>
                {/* <span className="checkmark"></span>
                        <span className="label-text"></span> */}
              </label>
            )}
            <div className="jsx-108338622">
              <div className=".pt-input-adaptive">
                {item.key && item.value && (
                  <div className="input-addon-wrapper">
                    <input
                      type="text"
                      className={`jsx-2523288086 ${
                        checked[index] ? null : 'text-decoration'
                      }`}
                      value={propertyListChange[index] || ''}
                      title="color"
                      onChange={(e) => handlePropertyNameListChange(e, index)}
                      onFocus={() => handleshowFourthList(index)}
                      onBlur={(e) => handleBlurAddDeleteProperty(e, index)}
                    ></input>
                    &nbsp;&nbsp; :
                    <input
                      type="text"
                      className={`jsx-2523288086 ${
                        checked[index] ? null : 'text-decoration'
                      }`}
                      value={item.value}
                      title="Black (Gray)"
                      onChange={handlePropertyNameListChange}
                      // style="color: rgb(252, 229, 172); width: 13ch;"
                      onFocus={() => handleshowFifthList(item.key, index)}
                    ></input>
                    ;
                    {showList.indexMenu == index && showList.fourth && (
                      <div className="collapsable-container-fourth">
                        {propertyKeys.map((item, index) => {
                          return (
                            <div
                              className="collapsable-container-list"
                              key={index}
                              onClick={() => handleAddPropertyList(index, item)}
                            >
                              <span className="collapsable-item">{item}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    {showList.indexMenu == index && showList.fifth && (
                      <div className="collapsable-container-fifth">
                        {objProperties[inputProperty || 'align-content']?.map(
                          (item, index) => {
                            return (
                              <div
                                className="collapsable-container-list"
                                key={index}
                                onClick={() => handleAddValueList(item)}
                              >
                                <span className="collapsable-item">{item}</span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {item.key && item.value && (
              <button
                className="input-delete-button"
                onClick={() => handleDeleteProperty(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                  />
                </svg>
              </button>
            )}
          </div>
        )
      })}
    </>
  )
}
