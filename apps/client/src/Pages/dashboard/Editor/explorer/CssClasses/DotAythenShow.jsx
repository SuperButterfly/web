import './optionCssStyles.css'
import { useState, useRef, useEffect } from 'react'
import { flushSync } from 'react-dom'
import { useLocalStorage } from './useLocalStorage'
import { objProperties } from './PropertiesInfo'
import { InputsProperties } from './InputsProperties'
import { FirstListInputsMedia } from './FirstListInputsMedia'
import { SecondListInputsMedia } from './SecondListInputsMedia'
import { ThirdListInputsMedia } from './ThirdListInputsMedia'
import {
  addClassProperties,
  updateClassProperties
} from '@/redux/actions/projects'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '@/redux/actions/component'

const AythenShow = ({
  indexList,
  onClose,
  inputValue,
  fixedList,
  handleChangeInput
}) => {
  const [classnameChange, setClassnameChange] = useState('')
  const [stateList, setStateList] = useState([
    'focus',
    'hover',
    'active',
    'disabled',
    'checked',
    'focus-within',
    'focus-visible'
  ])
  const [stateQuery, setStateQuery] = useState([])
  const [stateListAdd, setStateListAdd] = useState([])
  const [showList, setShowList] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    indexMenu: 0
  })
  const [showQuerys, setShowQuerys] = useState({
    showQuery1: false,
    showQuery2: false,
    showQuery3: false,
    showQuery4: false,
    showQuery5: false,
    showQuery6: false
  })
  const inputRef = useRef(null)
  const [inputProperty, setInputProperty] = useState('')
  // const inputProperty = useRef(null)
  const [propertyKeys, setPropertyKeys] = useState([])
  const [propertyAddList, setPropertyAddList] = useState([])
  const { projectSelected } = useSelector((state) => state.project)
  const { componentSelected } = useSelector((state) => state.component)
  const [propertyElements, setPropertyElements] = useState({})
  const breakpoints = useSelector((state) => state.breakpoints.breakpoints)
  const mediaQuerys = ['479', '767', '991', '1200', '1600', '1920']

  const { target } = useSelector((state) => state.project)

  const dispatch = useDispatch()
  /*
  {
    prop1: [],
    prop2: []
  }
  */

  useEffect(() => {
    setPropertyKeys(Object.keys(objProperties))
  }, [])
  /*
  useEffect(()=>{
     const statesResult = projectSelected.classList.filter((item)=> item.nameClass == inputValue)
     if(statesResult?.length > 0){
        const newStateList = statesResult[0].properties["states"]
        //console.log("result", result)
        //console.log("newPropertiesList", newPropertiesList)
        setStateListAdd(newStateList)
     }
  },[stateListAdd])
*/
  useEffect(() => {
    if (projectSelected.classList) {
      const result = projectSelected.classList?.filter(
        (item) => item.nameClass == inputValue
      )
      if (result?.length > 0) {
        const newPropertiesList = result[0].properties.states
        const resultingState = Object.entries(newPropertiesList || {}).map(
          ([key, value]) => ({ key, value })
        )
        if (resultingState) {
          setStateListAdd(resultingState)
        }
      }
    }
  }, [inputValue])

  /*
        dispatch(updateClassProperties(projectSelected.id, {
          nameClass: inputValue,
          properties: {
            ...propertyElements,
            style: newObject || {},
          }
        }));
    */
  useEffect(() => {
    console.log('inputValue', inputValue)
    setClassnameChange(inputValue)
    inputRef.current.focus()
    // console.log(objProperties)
    if (projectSelected.classList) {
      const result = projectSelected.classList.filter(
        (item) => item.nameClass == inputValue
      )
      if (result?.length > 0) {
        const newPropertiesList = result[0].properties.style
        // console.log("result", result)
        // console.log("newPropertiesList", newPropertiesList)
        setPropertyAddList(newPropertiesList)
        setPropertyElements(result[0].properties)
        console.log('propertyElements', propertyElements)
      }
      // const newResult = {...result}
      // setStateListAdd([])
    }
  }, [inputValue, projectSelected.classList])

  const handleBlurChange = () => {
    handleChangeInput(classnameChange)
  }
  const handleClassnameChange = (e) => {
    setClassnameChange(e.target.value)
  }
  const handleShowList = () => {
    if (classnameChange) {
      // console.log("inputValue",indexList)
      // console.log("inputValue",classnameChange)
      // revisar la primera lista cuando das click cuando se muestra
    }
    setShowList({
      first: !showList.first,
      second: false,
      third: false,
      fourth: false,
      fifth: false
    })
  }
  const showPropertiesList = () => {
    setShowList({
      first: false,
      second: !showList.second,
      third: false,
      fourth: false,
      fifth: false
    })
  }
  const showValueList = () => {
    setShowList({
      first: false,
      second: false,
      third: !showList.third,
      fourth: false,
      fifth: false
    })
  }
  const showFourthList = (index) => {
    // console.log(propertyAddList)
    setShowList({
      first: false,
      second: false,
      third: false,
      fourth: !showList.fourth,
      fifth: false,
      indexMenu: index
    })
  }
  const showFifthList = (key, index) => {
    setInputProperty(key)
    // setInputProperty(key)
    setShowList({
      first: false,
      second: false,
      third: false,
      fifth: !showList.fifth,
      fourth: false,
      indexMenu: index
    })
  }

  // añade los states
  const handleAddClick = (index) => {
    const newStateList = [...stateListAdd, { key: stateList[index], value: {} }]

    if (projectSelected.id && newStateList) {
      setStateListAdd(newStateList)
      const newObject = newStateList.reduce((result, element) => {
        result[element.key] = element.value
        return result
      }, {})

      const newProperties = {
        ...propertyElements,
        states: newObject
      }

      if (propertyElements) {
        dispatch(
          updateClassProperties(projectSelected.id, {
            nameClass: inputValue,
            properties: newProperties
          })
        )
      }
    }

    // console.log("newStateList",newStateList)
  }

  // elimina los states
  const handleRemoveItem = (itemkey) => {
    // stateList[index]
    const newList = [...stateListAdd]
    const resultingList = newList.filter((item) => item.key != itemkey)

    if (projectSelected.id && resultingList) {
      setStateListAdd(resultingList)

      const newObject = resultingList.reduce((result, element) => {
        result[element.key] = element.value
        return result
      }, {})

      const newProperties = {
        ...propertyElements,
        states: newObject
      }

      if (propertyElements) {
        dispatch(
          updateClassProperties(projectSelected.id, {
            nameClass: inputValue,
            properties: newProperties
          })
        )
      }
    }
  }
  const handleAddProperty = (index) => {
    const indexesList = `${propertyKeys[index]}` || undefined
    if (indexesList) {
      // inputProperty.current.value = indexesList
      setInputProperty(indexesList)

      setPropertyAddList((prev) => ({ ...prev, [indexesList]: '' }))
      setShowList({
        first: false,
        second: false,
        third: !showList.third,
        fourth: false,
        fifth: false
      })
    }
  }
  // cambia las propiedades de los inputs dinamicos
  const handleAddProperties = (index, item, listObject) => {
    const indexesList = `${propertyKeys[index]}`

    if (item) {
      setInputProperty(indexesList)

      if (listObject.key != [indexesList]) {
        const propertiesToFilter = Object.entries(propertyAddList)
        const itemList = propertiesToFilter.filter(
          ([key, value]) => key != listObject.key
        )
        const filteredElements = Object.fromEntries(itemList)
        const newObjProperty = {
          ...filteredElements,
          [indexesList]: listObject.value
        }

        setPropertyAddList(newObjProperty)
        console.log('itemList', newObjProperty)
        dispatch(
          updateClassProperties(projectSelected.id, {
            nameClass: inputValue,
            properties: {
              ...propertyElements,
              style: newObjProperty || {}
            }
          })
        )

        setShowList((prev) => ({ ...prev, fourth: !showList.fourth }))
      } else {
        setShowList((prev) => ({
          ...prev,
          fourth: false,
          fifth: !showList.fifth
        }))
      }
    }
  }

  const handleInputPropertyChange = (e) => {
    setInputProperty(e.target.value)
  }
  // añade los valores de los inputs fijos
  const handleAddValue = (itemList) => {
    if (itemList && inputProperty) {
      const newPropertyAddList = {
        ...propertyAddList,
        [inputProperty]: itemList
      }
      setPropertyAddList(newPropertyAddList)
      dispatch(
        updateClassProperties(projectSelected.id, {
          nameClass: inputValue,
          properties: {
            ...propertyElements,
            style: newPropertyAddList || {}
          }
        })
      )
    }
  }
  // borra las propiedades
  const handleDeleteProperties = (newObject) => {
    console.log('newObject', newObject)
    setPropertyAddList(newObject)
    if (newObject) {
      dispatch(
        updateClassProperties(projectSelected.id, {
          nameClass: inputValue,
          properties: {
            ...propertyElements,
            style: newObject || {}
          }
        })
      )
    }
    setShowList((prev) => ({ ...prev, fourth: false, fifth: false }))
  }
  console.log('showQuerys', showQuerys)
  return (
    <div tabIndex="0" className="panel-sidebar-position edit-className-panel">
      <div className="panel-separators">
        <div className="panel-header">
          <span className="panel-title">Edit className</span>

          <div className="update-container">
            <div className="jsx-2361534736">
              <button className="pt-btn-transparent-accent" onClick={onClose}>
                <div className="pt-icon-actions">
                  <svg
                    height="10"
                    viewBox="0 0 13 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#close_svg__clip0)">
                      <path d="M11.095 9.947L7.648 6.5l3.447-3.447a.812.812 0 10-1.148-1.148L6.5 5.352 3.053 1.905a.812.812 0 10-1.148 1.148L5.352 6.5 1.905 9.947a.812.812 0 101.148 1.148L6.5 7.648l3.447 3.447a.812.812 0 101.148-1.148z"></path>
                    </g>
                    <defs>
                      <clipPath id="close_svg__clip0">
                        <path d="M0 0h13v13H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="input-wrapper input-title">
          <span className="text-input-out">
            <input
              type="text"
              className="jsx-365448974 "
              ref={inputRef}
              // placeholder={inputValue}
              onBlur={handleBlurChange}
              onChange={handleClassnameChange}
              value={classnameChange}
              disabled={fixedList.includes(inputValue)}
            ></input>
          </span>
        </div>
        <div className="panel-content">
          <div
            data-section-title="States"
            className="jsx-2997701117 jsx-214949550 thq-panel-section headerClickable"
          >
            <div className="section-header-hover">
              <div
                className="panel-title-container panel-states-container"
                onClick={handleShowList}
              >
                <span className="panel-title">States</span>
                <div className="jsx-2997701117">
                  <button
                    className="pt-btn-transparent"
                    onClick={handleShowList}
                  >
                    <div className="pt-icon-add">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="3.808" width="1.5" height="9" rx="0.75"></rect>
                        <rect
                          x="9"
                          y="3.808"
                          width="1.5"
                          height="9"
                          rx="0.75"
                          transform="rotate(90 9 3.808)"
                        ></rect>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* collapsable menu */}

            {showList.first && (
              <div className="collapsable-container">
                {stateList?.map((item, index) => {
                  return (
                    <div
                      className="collapsable-container-list"
                      key={index}
                      onClick={() => handleAddClick(index)}
                    >
                      <span className="collapsable-item">{item}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {stateListAdd.length == 0 ? null : (
              <div className="section-content">
                <div className="pt-stack">
                  <div className="sub-panel-section">
                    <div className="labels-list">
                      <ul className="jsx-3306520650">
                        {stateListAdd?.map((item, index) => {
                          return (
                            <li data-index="0" className="option" key={index}>
                              {/* opciones */}
                              <span className="option-span">{item.key}</span>

                              <button
                                className="delete-btn"
                                onClick={() => handleRemoveItem(item.key)}
                              >
                                <div className="pt-icon">
                                  <svg
                                    height="10"
                                    viewBox="0 0 13 13"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#close_svg__clip0)">
                                      <path d="M11.095 9.947L7.648 6.5l3.447-3.447a.812.812 0 10-1.148-1.148L6.5 5.352 3.053 1.905a.812.812 0 10-1.148 1.148L5.352 6.5 1.905 9.947a.812.812 0 101.148 1.148L6.5 7.648l3.447 3.447a.812.812 0 101.148-1.148z"></path>
                                    </g>
                                    <defs>
                                      <clipPath id="close_svg__clip0">
                                        <path d="M0 0h13v13H0z"></path>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            data-section-title="Properties"
            className="jsx-2997701117 jsx-214949550 thq-panel-section"
          >
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">Properties</span>
              </div>
            </div>
            <div className="section-content">
              <div className="pt-stack">
                <div className="hundred">
                  <div className="dev-property">
                    {/* Aqui ira el componente de los inputs
                     */}
                    <InputsProperties
                      propertyAddList={propertyAddList}
                      propertyKeys={propertyKeys}
                      objProperties={objProperties}
                      inputProperty={inputProperty}
                      showFourthList={showFourthList}
                      showFifthList={showFifthList}
                      showList={showList}
                      handleAddProperty={handleAddProperties}
                      handleAddValue={handleAddValue}
                      handleDeleteProperties={handleDeleteProperties}
                      classnameChange={classnameChange}
                    />
                  </div>
                  <div className="new-dev-property">
                    <div className="input-wrapper">
                      <div className="left-input">
                        <div className="jsx-108338622">
                          <div className="pt-input-flexible">
                            <div className="input-addon-wrapper">
                              <input
                                type="text"
                                placeholder="property"
                                className="jsx-2523288086 "
                                // value={inputProperty.current}
                                // ref={inputProperty}
                                value={inputProperty}
                                onChange={handleInputPropertyChange}
                                onFocus={showPropertiesList}
                              ></input>
                            </div>
                            {showList.second && (
                              <div className="collapsable-container-second">
                                {propertyKeys.map((item, index) => {
                                  return (
                                    <div
                                      className="collapsable-container-list"
                                      key={index}
                                      onClick={() => handleAddProperty(index)}
                                    >
                                      <span className="collapsable-item">
                                        {item}
                                      </span>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="jsx-1075156263 right-input">
                        <div className="jsx-108338622">
                          <div className="pt-input-flexible">
                            <div className="input-addon-wrapper">
                              <input
                                type="text"
                                placeholder="value"
                                className="jsx-2523288086 "
                                value=""
                                onFocus={showValueList}
                              ></input>
                              {showList.third && (
                                <div className="collapsable-container-third">
                                  {objProperties[
                                    inputProperty || 'align-content'
                                  ]?.map((item, index) => {
                                    return (
                                      <div
                                        className="collapsable-container-list"
                                        key={index}
                                        onClick={() => handleAddValue(item)}
                                      >
                                        <span className="collapsable-item">
                                          {item}
                                        </span>
                                      </div>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-btn">
                      <button
                        tabIndex="-1"
                        className="pt-btn"
                        onClick={showPropertiesList}
                      >
                        <div className="pt-icon">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3.808"
                              width="1.5"
                              height="9"
                              rx="0.75"
                            ></rect>
                            <rect
                              x="9"
                              y="3.808"
                              width="1.5"
                              height="9"
                              rx="0.75"
                              transform="rotate(90 9 3.808)"
                            ></rect>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-section-title="Text Style" className="panel-section">
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">Text Style</span>
              </div>
            </div>
          </div>
          <div
            data-section-title="Media Query Properties"
            className="panel-section"
          >
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">Media Query Properties</span>
              </div>
            </div>
            <div className="section-content">
              <div
                className="pt-stack"
                // style="align-items: flex-start;"
              >
                <div className="sub-panel-section">
                  {breakpoints.map((breakpoint, index) => {
                    if (breakpoint) {
                      return (
                        <>
                          <div className="collapsable-header">
                            <div className="jsx-2361534736">
                              &lt;= {mediaQuerys[index]}px
                            </div>
                            <div className="expand-icon-rotate">
                              <div
                                className={
                                  showQuerys[`showQuery${index + 1}`]
                                    ? 'pt-icon'
                                    : 'pt-icon pt-icon-rotate'
                                }
                                onClick={() =>
                                  setShowQuerys((prev) => ({
                                    ...prev,
                                    [`showQuery${index + 1}`]:
                                      !showQuerys[`showQuery${index + 1}`]
                                  }))
                                }
                              >
                                <svg
                                  width="12"
                                  height="9"
                                  viewBox="0 0 12 9"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M6.08 6.996a.847.847 0 00.48-.211l3.617-3.201a.91.91 0 00.116-1.272.853.853 0 00-.601-.31.846.846 0 00-.634.231L6 4.94 2.942 2.233a.846.846 0 00-1.235.078.912.912 0 00.116 1.273L5.44 6.785a.844.844 0 00.64.211z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          {showQuerys[`showQuery${index + 1}`] && (
                            <FirstListInputsMedia
                              propertyKeys={propertyKeys}
                              objProperties={objProperties}
                              propertyElements={propertyElements}
                              inputValue={inputValue}
                            />
                          )}
                        </>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AythenShow
