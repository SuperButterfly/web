import {InputsProperties} from "./InputsProperties"
import {useState, useEffect} from 'react'
import {updateComponent} from "@/redux/actions/component.js"
import {addClassProperties, updateClassProperties} from "@/redux/actions/projects.js";
import { useSelector, useDispatch } from "react-redux";

export function SecondListInputsMedia({
     propertyKeys, 
     objProperties, 
     propertyElements,
     inputValue
}){
  
 
  const [showSecondListMedia, setShowSecondListMedia] = useState({second: false, third: false, fourth: false, fifth: false, indexMenu: 0})
 
  const [inputProperty, setInputProperty] = useState('')
  //const inputProperty = useRef(null)
  const [secondPropertyMediaList, setSecondPropertyMediaList] = useState({})
  const { componentSelected } = useSelector(state=> state.component)
  const { projectSelected } = useSelector(state=> state.project)
  const dispatch = useDispatch()
  
   useEffect(()=>{
     if(propertyElements){
        const mediaList = propertyElements["mq767"]
        //console.log("mediaList", mediaList)
        setSecondPropertyMediaList(mediaList)
    }
  },[propertyElements])
  
  const showPropertiesList = ()=>{
       setShowSecondListMedia({second: !showSecondListMedia.second, third: false, fourth: false, fifth: false})
  }
  const showValueMediaList = ()=>{
       setShowSecondListMedia({second: false, third: !showSecondListMedia.third, fourth: false, fifth: false})
  }
  const showFourthListMedia = (index)=>{
        setShowSecondListMedia({second: false, third: false, fourth: !showSecondListMedia.fourth ,fifth: false, indexMenu: index})
  }
  const showFifthListMedia = (key, index)=>{
        setInputProperty(key); 
        //console.log("showFirstListMedia",showSecondListMedia)
        setShowSecondListMedia({second: false, third: false, fifth: !showSecondListMedia.fifth, fourth: false, indexMenu: index})
  }

  const handleAddProperty = (index)=>{
       const indexesList = `${propertyKeys[index]}` || undefined
       if(indexesList){
          //inputProperty.current.value = indexesList
          setInputProperty(indexesList) 
          
          setSecondPropertyMediaList(prev=>({...prev, [indexesList]: ""}))
          setShowSecondListMedia({second: false, third: !showSecondListMedia.third, fourth: false, fifth: false})
       }
  }

const handleAddProperties = (index, item, listObject)=>{
      const indexesList = `${propertyKeys[index]}`;
     
   if (item) {
     setInputProperty(indexesList)
     
   if(listObject.key != [indexesList]){
     const propertiesToFilter = Object.entries(secondPropertyMediaList)
     const itemList = propertiesToFilter.filter(([key, value])=> key != listObject.key)
     const filteredElements = Object.fromEntries(itemList)
     const newObjProperty = {...filteredElements, [indexesList] : listObject.value}
     setSecondPropertyMediaList(newObjProperty)
     
     dispatch(updateClassProperties(projectSelected.id, {
        nameClass: inputValue,
        properties: {
          ...propertyElements,
          mq767: newObjProperty || {},
        }
      }));

     setShowSecondListMedia((prev)=>({...prev, fourth: !showSecondListMedia.fourth}))
     //console.log("itemList", newObjProperty)
    }
    else{
         setShowSecondListMedia((prev)=>({...prev, fourth: false, fifth: !showSecondListMedia.fifth}))
     }
    }
  }
  
    const handleInputPropertyChange = (e)=>{
     setInputProperty(e.target.value)
  }
  
  const handleAddValue = (itemList)=>{
     if(itemList && inputProperty){
       const newPropertyAddList = { ...secondPropertyMediaList, [inputProperty]: itemList }
       setSecondPropertyMediaList(newPropertyAddList)
     //hace el dispatch cuando agrega el value a la propiedad del objeto
       const newProperties = {
              ...propertyElements,
              mq767: newPropertyAddList
         }
        //console.log(newProperties)
        if(newProperties){
          dispatch(updateClassProperties(projectSelected.id, {
              nameClass: inputValue,
              properties: newProperties
          }))
        }
     }
  }

  const handleDeleteProperties = (newObject)=>{
     setSecondPropertyMediaList(newObject)
     
     if (newObject) {
      const newProperties = {
              ...propertyElements,
              mq767: newObject || {}
         }
         
      dispatch(updateClassProperties(projectSelected.id, {
          nameClass: inputValue,
          properties: newProperties
      }));
    }
      setShowSecondListMedia((prev)=>({...prev, fourth: false, fifth: false}))
  }





return (
           <>
               <div className="dev-property">
                      {/*Aqui ira el componente de los inputs*/}
                    <InputsProperties 
                    propertyAddList={secondPropertyMediaList} 
                    propertyKeys={propertyKeys} 
                    objProperties={objProperties} 
                    inputProperty={inputProperty} 
                    showFourthList={showFourthListMedia} 
                    showFifthList={showFifthListMedia} 
                    showList={showSecondListMedia} 
                    handleAddProperty={handleAddProperties} 
                    handleAddValue={handleAddValue}
                    handleDeleteProperties={handleDeleteProperties}/>
                </div>
                <div className="new-dev-property">
                    <div className="input-wrapper">
                      <div className="left-input">
                        <div className="jsx-108338622">
                          <div className="pt-input-flexible">
                            <div className="input-addon-wrapper">
                              {/*<input
                                type="text"
                                placeholder="property"
                                className="jsx-2523288086 "
                                value=""
                              ></input>*/}
                            
                              <input
                                type="text"
                                placeholder="property"
                                className="jsx-2523288086 "
                                //value={inputProperty.current}
                                //ref={inputProperty}
                                value={inputProperty}
                                onChange={handleInputPropertyChange}
                                onFocus={showPropertiesList}
                              ></input>
                          {showSecondListMedia.second && <div className="collapsable-container-second">
                               {propertyKeys.map((item, index)=>{
                                   return(
                                        <div className="collapsable-container-list" key={index} onClick={()=>handleAddProperty(index)}>
                                            <span className="collapsable-item">{item}</span>
                                        </div>  
                                         )
                                       })
                                  }            
                                </div>
                               }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="jsx-1075156263 right-input">
                        <div className="jsx-108338622">
                          <div className="pt-input-flexible">
                            <div className="input-addon-wrapper">
                              {/*<input
                                type="text"
                                placeholder="value"
                                className="jsx-2523288086 "
                                value=""
                              ></input>*/}
                              <input
                                type="text"
                                placeholder="value"
                                className="jsx-2523288086 "
                                value=""
                                onFocus={showValueMediaList}
                              ></input>
                              {showSecondListMedia.third && <div className="collapsable-container-third">
                               {objProperties[inputProperty || 'align-content']?.map((item, index)=>{
                                   return(
                                        <div className="collapsable-container-list" key={index} onClick={()=>handleAddValue(item)}>
                                            <span className="collapsable-item">{item}</span>
                                        </div>  
                                         )
                                       })
                                  }            
                                </div>
                               }

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-btn">
                      <button tabindex="-1" className="pt-btn" onClick={showPropertiesList}>
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
  </>
  )
}