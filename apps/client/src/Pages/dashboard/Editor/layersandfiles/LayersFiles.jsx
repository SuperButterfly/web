import './layersfiles.css'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo, useCallback, useEffect } from 'react' // useEffect,useState,
import Component from './Component'
import {
  getSelectedComponent,
  deleteComponentSelected,
  deletedMultipleComponents
} from '@/redux/actions/component'

const LayersFiles = () => {
  const dispatch = useDispatch()
  const { target } = useSelector((state) => state.project)
  const { componentSelected, componentsSelected } = useSelector(
    (state) => state.component
  )
  const { id } = useSelector((state) => state.component.componentSelected)
  const hasChildren = Boolean(
    target && target.children && target.children.length > 0
  )

  const handleClick = useCallback(() => {
    dispatch(getSelectedComponent(target.id))
    console.log(`Layers and Files handleClick ${componentSelected.id}`)
  }, [dispatch, componentSelected, componentSelected?.id])

  const isSelected = useMemo(() => {
    localStorage.setItem(
      'lastComponentSelected',
      JSON.stringify(componentSelected)
    )

    return (
      componentSelected &&
      Object.keys(componentSelected).length > 0 &&
      componentSelected?.id === target?.id &&
      !componentsSelected.length
    )
  }, [componentSelected, componentsSelected])

  const typeIcon = (tag) => {
    const types = {
      li: 'li',
      ul: 'ul',
      div: 'Container',
      img: 'Image',
      video: 'Image',
      span: 'Text',
      h1: 'Text'
    }
    return types[tag] || 'Container'
  }

  /* const handleDelete = (ev) => {
    if (ev.key === "Delete") {
      const componentsId = componentsSelected.map(component=>component.id)
      dispatch(deletedMultipleComponents(componentsId,target.id))
      //dispatch(deleteComponentSelected())
      localStorage.removeItem('componentSelectWithShift')
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown',handleDelete)
    return ()=>{
      window.addEventListener('keydown',handleDelete)
    }
  },[componentsSelected]) */

  useEffect(() => {
    return () => localStorage.removeItem('componentSelectWithShift')
  }, [])

  return (
    <div className="layers-files-container">
      <div
        className={`layers-files-heading-container ${
          isSelected ? 'selected-target' : ''
        }`}
        onClick={handleClick}
      >
        <svg viewBox="0 0 1024 1024" className="layers-files-layers">
          <path d="M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"></path>
        </svg>
        <span className="layers-files-component-name">
          {target && target.name ? target.name : 'Home'}
        </span>
      </div>
      <div style={{ display: hasChildren ? 'block' : 'none' }}>
        {target &&
          target.children?.map(({ name, tag, children, id, isshow }, idx) => {
            return (
              <Component
                key={id}
                id={id}
                name={name}
                nestedlevel={1}
                brothers={target.children}
                icon={{ isVisible: false, isOpen: false }}
                tagType={{ name: typeIcon(tag), mode: 'row' }}
                tag={tag}
                isshow={isshow}
                handleChPa={() => console.log('Component Target')}
              >
                {children}
              </Component>
            )
          })}
      </div>
    </div>
  )
}

export default LayersFiles
