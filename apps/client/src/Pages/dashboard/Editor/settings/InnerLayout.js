import './innerlayout.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const InnerLayout = () => {
  const dispatch = useDispatch()
  const { target } = useSelector((state) => state.project)

  const [stateInnerLayout, setStateInnerLayout] = useState({
    justifyContent: '',
    flexDirection: '',
    alignItems: '',
    flexWrap: '',
    gap: ''
  })

  useEffect(() => {
    if (target.properties && target.properties.style) {
      setStateInnerLayout({
        justifyContent: target.properties.style.justifyContent
          ? target.properties.style.justifyContent
          : '',
        flexDirection: target.properties.style.flexDirection
          ? target.properties.style.flexDirection
          : '',
        alignItems: target.properties.style.alignItems
          ? target.properties.style.alignItems
          : '',
        flexWrap: target.properties.style.flexWrap
          ? target.properties.style.flexWrap
          : '',
        gap: target.properties.style.gap ? target.properties.style.gap : ''
      })
    }
  }, [])
  const handleWrapChange = (ev) => {
    const flexWrapValue = ev.target.checked ? 'wrap' : 'nowrap'
    handleDispachUpdateComponent(ev.target.name, flexWrapValue)
  }

  const handleClickSvg = (section, value) => {
    handleDispachUpdateComponent(section, value)
  }

  const handleDispachUpdateComponent = (section, value) => {
    const currentStyles = {}
    const newState = {}
    for (const key in stateInnerLayout) {
      if (key === section && stateInnerLayout[key] !== value) {
        currentStyles[key] = value
        newState[key] = value
      } else if (key !== section) {
        newState[key] = stateInnerLayout[key]
      }
    }
    setStateInnerLayout({ ...stateInnerLayout, ...newState })
    dispatch(
      updateComponent(target.id, {
        ...target,
        properties: {
          ...target.properties,
          style: {
            ...target.properties.style,
            ...currentStyles
          }
        }
      })
    )
  }
  const handleInputChange = (ev) => {
    const newStyle = { [ev.target.name]: ev.target.value }
    setStateInnerLayout({ ...stateInnerLayout, ...newStyle })
    handleDispachUpdateComponent(ev.target.name, newStyle[ev.target.name])
  }

  return (
    <div className="inner-layout-container">
      <div className="inner-layout-component-header">
        <span className="inner-layout-title">Inner layout</span>
        <div className="inner-layout-container2">
          <input
            type="button"
            title="row"
            name="row"
            className={
              stateInnerLayout.flexDirection === 'row'
                ? 'inner-layout-icon-click'
                : 'inner-layout-icon'
            }
            onClick={() => handleClickSvg('flexDirection', 'row')}
            value="➜ "
          />
          <input
            type="button"
            title="column"
            name="column"
            value="🡓"
            className={
              stateInnerLayout.flexDirection === 'column'
                ? 'inner-layout-icon-click'
                : 'inner-layout-icon'
            }
            onClick={() => handleClickSvg('flexDirection', 'column')}
          />
        </div>
      </div>
      {stateInnerLayout.flexDirection === 'column' ? (
        <div>
          <div className="inner-layout-container4">
            <svg
              className={
                stateInnerLayout.justifyContent === 'flex-start'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'flex-start')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-start</title>
              <path d="M0 0h15v1H0V0z"></path>
              <path d="M3 4h3v7H3V4zM9 4h3v11H9z" fillOpacity="0.4"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'center'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'center')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>center</title>
              <path d="M0 7h15v1H0V7z"></path>
              <path fillOpacity="0.4" d="M9 0h3v15H9zM3 2h3v11H3z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'flex-end'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'flex-end')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-end</title>
              <path d="M15 15H0v-1h15v1z"></path>
              <path d="M12 11H9V4h3v7zM6 11H3V0h3z" fillOpacity="0.4"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'space-between'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'space-between')}
              width="15"
              height="17"
              viewBox="0 0 15 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>space-between</title>
              <path d="M15.132.116v1h-15v-1h15zM15.132 16.116v1h-15v-1h15z"></path>
              <path
                fillOpacity="0.4"
                d="M11.133 2.116v3h-7v-3zM11.132 12.117v3h-7v-3h7z"
              ></path>
            </svg>
          </div>
          <div className="inner-layout-container3">
            <svg
              className={
                stateInnerLayout.alignItems === 'flex-start'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon04'
              }
              onClick={() => handleClickSvg('alignItems', 'flex-start')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-start</title>
              <path d="M0 0h1v15H0V0z"></path>
              <path fillOpacity="0.4" d="M4 3h11v3H4zM4 9h7v3H4z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'center'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon04'
              }
              onClick={() => handleClickSvg('alignItems', 'center')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>center</title>
              <path d="M7 0h1v15H7V0z"></path>
              <path fillOpacity="0.4" d="M0 9h15v3H0zM2 3h11v3H2z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'flex-end'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon04'
              }
              onClick={() => handleClickSvg('alignItems', 'flex-end')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-end</title>
              <path d="M14 0h1v15h-1V0z"></path>
              <path fillOpacity="0.4" d="M0 3h11v3H0zM4 9h7v3H4z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'stretch'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon04'
              }
              onClick={() => handleClickSvg('alignItems', 'stretch')}
              width="17"
              height="15"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>stretch</title>
              <path d="M17 0v15h-1V0h1zM1 0v15H0V0h1z" fillOpacity="0.4"></path>
              <path d="M14 3v3H3V3h11zM14 9v3H3V9z" fillOpacity="0.4"></path>
            </svg>
          </div>
        </div>
      ) : (
        <div>
          <div className="inner-layout-container3">
            <svg
              className={
                stateInnerLayout.justifyContent === 'flex-start'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'flex-start')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-start</title>
              <path d="M0 0h1v15H0V0z"></path>
              <path fillOpacity="0.4" d="M4 3h11v3H4zM4 9h7v3H4z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'center'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'center')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>center</title>
              <path d="M7 0h1v15H7V0z"></path>
              <path fillOpacity="0.4" d="M0 9h15v3H0zM2 3h11v3H2z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'flex-end'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'flex-end')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-end</title>
              <path d="M14 0h1v15h-1V0z"></path>
              <path fillOpacity="0.4" d="M0 3h11v3H0zM4 9h7v3H4z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.justifyContent === 'space-between'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('justifyContent', 'space-between')}
              width="17"
              height="15"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>space-between</title>
              <path d="M0 0h1v15H0V0zM16 0h1v15h-1V0z"></path>
              <path fillOpacity="0.4" d="M2 4h3v7H2zM12 4h3v7h-3V4z"></path>
            </svg>
          </div>
          <div className="inner-layout-container4">
            <svg
              className={
                stateInnerLayout.alignItems === 'flex-start'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('alignItems', 'flex-start')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-start</title>
              <path d="M0 0h15v1H0V0z"></path>
              <path d="M3 4h3v7H3V4zM9 4h3v11H9z" fillOpacity="0.4"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'center'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('alignItems', 'center')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>center</title>
              <path d="M0 7h15v1H0V7z"></path>
              <path fillOpacity="0.4" d="M9 0h3v15H9zM3 2h3v11H3z"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'flex-end'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('alignItems', 'flex-end')}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>flex-end</title>
              <path d="M15 15H0v-1h15v1z"></path>
              <path d="M12 11H9V4h3v7zM6 11H3V0h3z" fillOpacity="0.4"></path>
            </svg>
            <svg
              className={
                stateInnerLayout.alignItems === 'stretch'
                  ? 'inner-layout-selected'
                  : 'inner-layout-icon06'
              }
              onClick={() => handleClickSvg('alignItems', 'stretch')}
              width="15"
              height="17"
              viewBox="0 0 15 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>stretch</title>
              <path d="M0 0h15v1H0V0zM0 16h15v1H0v-1z"></path>
              <path d="M3 3h3v11H3V3zM9 3h3v11H9z" fillOpacity="0.4"></path>
            </svg>
          </div>
        </div>
      )}
      <div className="inner-layout-container5">
        <div className="inner-layout-container6">
          <span>Gap</span>
          <input
            name="gap"
            onBlur={handleInputChange}
            defaultValue={stateInnerLayout.gap}
            className="inner-layout-input"
            placeholder="0"
          />
        </div>
        <div className="inner-layout-container7">
          <input
            type="checkbox"
            checked={stateInnerLayout.flexWrap === 'wrap'}
            name="flexWrap"
            onChange={handleWrapChange}
          />
          <span>Wrap</span>
        </div>
      </div>
    </div>
  )
}

export default InnerLayout
