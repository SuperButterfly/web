import './cssclasses.css'
import { useState, useEffect, useMemo } from 'react'
import DotAythenShow from './CssClasses/DotAythenShow' // componente importado
import { useLocalStorage } from './CssClasses/useLocalStorage'
import { addClassProperties } from '@/redux/actions/projects'
import { getSelectedComponent } from '@/redux/actions/component'
import { useSelector, useDispatch } from 'react-redux'
import { MenuCssClass } from './CssClasses/menuCssClass/menu'

const CssClasses = () => {
  const [showDotAythen, setShowDotAythen] = useState(false) // es false por defecto
  const [counter, setCounter] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [buttonsFixedList, setButtonsFixedList] = useState([
    '.aythen-show',
    '.button',
    '.input',
    '.list-item',
    '.list',
    '.text-area'
  ])
  const [classnameList, setClassnameList] = useLocalStorage('classnameList', [
    '.aythen-show',
    '.button',
    '.input',
    '.list-item',
    '.list',
    '.text-area'
  ])
  const [filteredList, setFilteredList] = useState([])
  const [indexList, setIndexList] = useState(0)
  const [searchList, setSearchList] = useState('')

  const dispatch = useDispatch()
  const { projectSelected } = useSelector((state) => state.project)
  const { componentSelected } = useSelector((state) => state.component)
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  // actualizar el classname
  // agregar las propiedades de los mediaqueries al modelo de component
  useEffect(() => {
    if (filteredList.length > 0) {
      const result =
        [...classnameList].filter(
          (item) => item && item.includes(searchList)
        ) || []
      setFilteredList(result)
    }
  }, [classnameList])

  useEffect(() => {
    if (classnameList.some((item) => /\d/.test(item))) {
      const lastelement = classnameList
        .filter((item) => /\d/.test(item))
        .sort((a, b) => a - b)
      const lastelem = lastelement[lastelement.length - 1]
      const newCounter = Number(lastelem.split('')[lastelem.length - 1])
      if (newCounter) {
        setCounter(newCounter + 1)
      }
    } else if (classnameList.includes('.classname')) {
      setCounter(1)
    }
  }, [classnameList])

  const handleDotAythenClick = (item, ind) => {
    console.log('ind', item)
    // si filtered list es igual a 0 haz lo del if
    if (ind !== -1 && filteredList.length == 0) {
      setIndexList(ind)
      setShowDotAythen(true)
      // console.log(ind)
      // console.log(indexList) es igual a -1 cuando se actualiza arreglar
    } else {
      const newIndex = classnameList.indexOf(item)
      setIndexList(newIndex)
      setShowDotAythen(true)
    }
  }

  const handleDotAythenClose = () => {
    setShowDotAythen(false)
  }

  const handleChangeInput = (classnamevalue) => {
    // console.log(newClassnameList)
    const newClassnameList = [...classnameList]
    const indexSelected = indexList
    newClassnameList[indexSelected] = classnamevalue
    newClassnameList.sort((a, b) => a?.length - b?.length)
    setClassnameList(newClassnameList)
  }

  /*
  const props = {
    button: ".button",
    classname1: ".classname1",
    classname: ".classname",
  };
*/

  const handleAddClick = () => {
    setClassnameList((prev) => [
      ...prev,
      counter == 0 ? '.classname' : `.classname${counter}`
    ])
    setCounter((prev) => prev + 1)
    // handleDotAythenClick(indexList)
    const classnameName = counter == 0 ? '.classname' : `.classname${counter}`

    dispatch(
      addClassProperties(projectSelected.id, {
        nameClass: classnameName,
        properties: {
          style: {},
          mq1600: {},
          mq1200: {},
          mq991: {},
          mq479: {},
          states: {},
          event: ''
        }
      })
    )
    // console.log("counter", counter)
    // window.localStorage.setItem(`classname${indexFixedList}`, classnameList[indexFixedList])
    // console.log(window.localStorage.getItem(`classname${indexFixedList}`))
  }

  const handleSearchChange = (e) => {
    setSearchList(e.target.value)
    const result =
      [...classnameList].filter(
        (item) => item && item.includes(e.target.value)
      ) || []
    setFilteredList(result)
    console.log('filteredList', filteredList)
  }

  const handleRightClick = (e, index) => {
    e.stopPropagation()
    e.preventDefault()
    setShowMenu(!showMenu)
    setSelectedItemIndex(index)
    console.log('==== click', index)
  }

  const updateState = (item, index) => {
    // añadirlo, aplicar el filter y setear el filter
    // const newFilteredState = [...filteredList];
    // newFilteredState.splice(index + 1, 0, item);
    // setFilteredList(newFilteredState)
    const newState = [...classnameList]
    newState.push(item)
    // newState.splice(index + 1, 0, item);
    setClassnameList(newState)
    /* if(filteredList.length > 0){
       const result = [...classnameList].filter(item => item && item.includes(searchList)) || [];
       setFilteredList(result);
    } */
    // const newObj = Array.from(new Set([...filteredList, ...classnameList]))
    // console.log("newFilteredStateCombined", newObj)
  }

  const deleteElement = (index) => {
    const newState = [...classnameList]
    newState.splice(index, 1)
    setClassnameList(newState)
    console.log(index)
  }

  return (
    <>
      <div className="css-classes-container">
        <div className="css-classes-container1">
          <span className="css-classes-heading-states">CSS Classes</span>
          <svg
            viewBox="0 0 1024 1024"
            className="css-classes-icon"
            onClick={handleAddClick}
          >
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div className="css-classes-container2">
          <svg viewBox="0 0 1024 1024" className="css-classes-icon2">
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="css-classes-textinput"
            onChange={handleSearchChange}
          />
        </div>

        <div className="panel-content">
          <div className="panel-content-side">
            <div className="content-side">
              <div className="pt-stack-j">
                {filteredList.length != 0 &&
                  filteredList?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          indexList === index && showDotAythen?
                            "css-classes-container3-selected"
                            :
                            "css-classes-container3"
                        }
                        onContextMenu={(e) => handleRightClick(e, index)}
                      >
                        {selectedItemIndex === index && showMenu && (
                          <MenuCssClass
                            index={classnameList.indexOf(item)}
                            itemName={item}
                            selectedIndex={selectedItemIndex}
                            setShowDotAythen={setShowDotAythen}
                            setShowMenu={setShowMenu}
                            handleDotAythenClick={handleDotAythenClick}
                            buttonsFixedList={buttonsFixedList}
                            updateState={updateState}
                            deleteElement={deleteElement}
                          />
                        )}
                        <button
                          className="button-css"
                          onClick={() => handleDotAythenClick(item, index)}
                        >
                          <span>{item}</span>
                          {buttonsFixedList.includes(item) && (
                            <span className="css-classes-text1">Default</span>
                          )}
                        </button>
                      </div>
                    )
                  })}

                {filteredList.length == 0 &&
                  classnameList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          indexList === index &&  showDotAythen?
                            "css-classes-container3-selected"
                            :
                            "css-classes-container3"
                        }
                        onContextMenu={(e) => handleRightClick(e, index)}
                      >
                        {selectedItemIndex === index && showMenu && (
                          <MenuCssClass
                            index={index}
                            itemName={item}
                            selectedIndex={selectedItemIndex}
                            setShowDotAythen={setShowDotAythen}
                            setShowMenu={setShowMenu}
                            handleDotAythenClick={handleDotAythenClick}
                            buttonsFixedList={buttonsFixedList}
                            updateState={updateState}
                            deleteElement={deleteElement}
                          />
                        )}
                        <button
                          className="button-css"
                          onClick={() => handleDotAythenClick(item, index)}
                        >
                          <span>{item}</span>
                          {buttonsFixedList.includes(item) && (
                            <span className="css-classes-text1">Default</span>
                          )}
                        </button>
                      </div>
                    )
                  })}

                {/*
                <div className="css-classes-container4">
                       <span>{item}</span>
                </div>
                <div className="css-classes-container5">
                  <span>{props.classname1}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDotAythen && (
        <div>
          <DotAythenShow
            indexList={indexList}
            onClose={handleDotAythenClose}
            inputValue={classnameList[indexList]}
            fixedList={buttonsFixedList}
            handleChangeInput={handleChangeInput}
          />
        </div>
      )}
    </>
  )
}

export default CssClasses
