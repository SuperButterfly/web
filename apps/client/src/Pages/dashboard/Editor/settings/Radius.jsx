/* eslint-disable */
import './radius.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component'

const RadiusShadow = () => {
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const mediasRadius = [
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius'
  ]

  const [openIndependentCorners, setOpenIndependentCorners] = useState(false)
  const initialStateRadiusInput = {
    borderRadius: '',
    borderTopLeftRadius: '',
    borderTopRightRadius: '',
    borderBottomLeftRadius: '',
    borderBottomRightRadius: '',
    unitOfLength: 'px'
  }
  const [input, setInput] = useState(initialStateRadiusInput)
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)

  const handleopenIndependentCorners = () => {
    const newValue = !openIndependentCorners
    setOpenIndependentCorners(newValue)

    handleDispachUpdateComponent(input, newValue)
  }

  const handleOpen = () => {
    const newValue = !isOpen
    setOpen(newValue)
    if (!newValue) {
      handleDispachUpdateComponent({}, openIndependentCorners)
      setInput(initialStateRadiusInput)
    }
  }

  const handleDispachUpdateComponent = (stateBorder, indCorOpen) => {
    const styles = componentSelected.properties.style
    let extraStyles = {}
    let radiusStyles = {}
    for (const key in styles) {
      if (!mediasRadius.includes(key)) {
        extraStyles[key] = styles[key]
      }
    }
    if (Object.keys(stateBorder).length > 0) {
      indCorOpen
        ? mediasRadius.forEach((med) => {
            if (stateBorder[med] && med !== 'borderRadius') {
              radiusStyles[med] = `${stateBorder[med]}${input.unitOfLength}`
            }
          })
        : stateBorder.borderRadius
        ? (radiusStyles.borderRadius = `${stateBorder.borderRadius}${input.unitOfLength}`)
        : null
    }
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...extraStyles,
            ...radiusStyles
          }
        }
      })
    )
  }

  const handleInputChange = (ev) => {
    if (!isNaN(ev.target.value))
      setInput({ ...input, [ev.target.name]: ev.target.value })
  }

  const handleSelectChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value })
    const styles = componentSelected.properties.style
    let auxStyles = {}
    for (const key in styles) {
      if (mediasRadius.includes(key) && styles[key])
        auxStyles[key] = `${input[key]}${ev.target.value}`
    }

    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            ...auxStyles
          }
        }
      })
    )
  }

  useEffect(() => {
    let actRadius = initialStateRadiusInput
    let media = 'px'
    let auxIndependentCorners = false
    let auxIsOpen = false
    if (componentSelected.properties && componentSelected.properties.style) {
      const styles = componentSelected.properties.style
      mediasRadius.forEach((med) => {
        if (styles[med]) {
          const matchMedia = styles[med].match(/^(\d+(?:\.\d+)?)(px|rem|%)$/)
          matchMedia && matchMedia[1] ? (actRadius[med] = matchMedia[1]) : null

          if (med !== 'borderRadius') auxIndependentCorners = true

          matchMedia && matchMedia[2] ? (media = matchMedia[2]) : null
        }
      })
      auxIsOpen = Object.keys(styles).some((prop) =>
        mediasRadius.includes(prop)
      )
    }
    actRadius.unitOfLength = media
    setInput(actRadius)
    setOpenIndependentCorners(auxIndependentCorners)
    setOpen(auxIsOpen)
  }, [id])

  //---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
      ev.preventDefault()
      const radiusValue = parseFloat(ev.target.value)
      if (!isNaN(radiusValue)) {
        const step = ev.key === 'ArrowUp' ? 1 : -1
        const newRadiusValue = Math.max(0, radiusValue + step)
        const newRadius = {
          ...input,
          [ev.target.name]: newRadiusValue.toString()
        }
        setInput(newRadius)
      }
    } else if (ev.key === 'Enter') {
      ev.preventDefault()
      handleOnBlur(ev)
      ev.target.blur()
    }
  }

  //---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev, currenValue = 0) => {
    const { deltaY } = ev
    const scrollAmount = deltaY > 0 ? -1 : 1
    const step = 1
    const parsedValue = parseFloat(currenValue)

    if (!isNaN(parsedValue)) {
      const newValue = parsedValue + step * scrollAmount
      const updateValue = Math.max(0, newValue)
      const updatedInput = {
        ...input,
        [ev.target.name]: updateValue.toString()
      }
      setInput(updatedInput)
    }
  }

  //---------------- Deactivate Scroll on Focus --------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'hidden'
  }

  //------------------ Activate Scroll on Leave --------------------//
  const handleOnBlur = (ev) => {
    handleDispachUpdateComponent(
      { ...input, [ev.target.name]: ev.target.value },
      openIndependentCorners
    )
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflowY = 'scroll'
  }

  return (
    <div className="radius-container">
      <div className="radius-container1">
        <div className="radius-component-header" onClick={handleOpen}>
          <span className="radius-title">Radius</span>
          {isOpen ? (
            <svg
              viewBox="0 0 1024 1024"
              className="radius-icon02"
              onClick={handleOpen}
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 1024 1024"
              className="radius-icon"
              onClick={handleOpen}
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          )}
        </div>
        <div
          className="radius-container02"
          style={isOpen ? { display: 'flex' } : { display: 'none' }}
        >
          <div className="radius-container03">
            <span className="radius-text">Radius</span>
            <input
              name="borderRadius"
              value={input.borderRadius}
              onMouseEnter={handleOnFocus}
              onChange={handleInputChange}
              onWheel={(ev) => handleScroll(ev, input.borderRadius)}
              onMouseLeave={(ev) => handleOnBlur(ev)}
              className="radius-text01"
              placeholder="0"
              onKeyDown={handleKeyDown}
            />
          </div>
          <svg
            onClick={handleopenIndependentCorners}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_4)">
              <path
                d="M1 13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H5V15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V10H1V13ZM1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H4.5V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 5H1V2ZM13 14C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V10H15V13C15 13.5304 14.7893 14.0391 14.4142 14.4142C14.0391 14.7893 13.5304 15 13 15H10V14H13ZM14 2C14 1.73478 13.8946 1.48043 13.7071 1.29289C13.5196 1.10536 13.2652 1 13 1H10V0H13C13.5304 0 14.0391 0.210714 14.4142 0.585786C14.7893 0.960859 15 1.46957 15 2V5H14V2Z"
                fill={openIndependentCorners ? 'rgb(20,169,255)' : '#B2B2B2'}
              />
            </g>
            <defs>
              <clipPath id="clip0_42_4">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="radius-medias-container"
          style={isOpen ? { display: 'flex' } : { display: 'none' }}
        >
          <span className="radius-title1" htmlFor="selectUnitLength">
            Unit of length
          </span>
          <select
            onChange={handleSelectChange}
            name="unitOfLength"
            value={input.unitOfLength}
            id="selectUnitLength"
          >
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="%">%</option>
          </select>
        </div>
        <div
          className="independet-corners-section"
          style={
            openIndependentCorners && isOpen
              ? { display: 'flex' }
              : { display: 'none' }
          }
        >
          <div className="independet-corners-column">
            <div>
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.206 2.684c0-.74.54-1.342 1.205-1.342H6.03V0H2.41C1.08 0 0 1.202 0 2.684v4.027h1.206V2.684z"></path>
              </svg>
              <input
                className="radius-text01"
                name="borderTopLeftRadius"
                onMouseEnter={handleOnFocus}
                onChange={handleInputChange}
                onWheel={(ev) => handleScroll(ev, input.borderTopLeftRadius)}
                onMouseLeave={(ev) => handleOnBlur(ev)}
                value={input.borderTopLeftRadius}
                autoComplete="off"
                placeholder="0"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <input
                className="radius-text01b"
                name="borderTopRightRadius"
                onMouseEnter={handleOnFocus}
                onChange={handleInputChange}
                onWheel={(ev) => handleScroll(ev, input.borderTopRightRadius)}
                onMouseLeave={(ev) => handleOnBlur(ev)}
                value={input.borderTopRightRadius}
                autoComplete="off"
                placeholder="0"
                onKeyDown={handleKeyDown}
              />
              <svg
                width="7"
                height="7"
                transform="rotate(90)"
                viewBox="0 0 7 7"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.206 2.684c0-.74.54-1.342 1.205-1.342H6.03V0H2.41C1.08 0 0 1.202 0 2.684v4.027h1.206V2.684z" />
              </svg>
            </div>
          </div>
          <div className="independet-corners-column">
            <div>
              <svg
                width="7"
                height="7"
                transform="rotate(270)"
                viewBox="0 0 7 7"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.206 2.684c0-.74.54-1.342 1.205-1.342H6.03V0H2.41C1.08 0 0 1.202 0 2.684v4.027h1.206V2.684z" />
              </svg>
              <input
                className="radius-text01"
                name="borderBottomLeftRadius"
                onMouseEnter={handleOnFocus}
                onChange={handleInputChange}
                onWheel={(ev) => handleScroll(ev, input.borderBottomLeftRadius)}
                onMouseLeave={(ev) => handleOnBlur(ev)}
                value={input.borderBottomLeftRadius}
                autoComplete="off"
                placeholder="0"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <input
                className="radius-text01b"
                name="borderBottomRightRadius"
                onMouseEnter={handleOnFocus}
                onChange={handleInputChange}
                onWheel={(ev) =>
                  handleScroll(ev, input.borderBottomRightRadius)
                }
                onMouseLeave={(ev) => handleOnBlur(ev)}
                value={input.borderBottomRightRadius}
                autoComplete="off"
                placeholder="0"
                onKeyDown={handleKeyDown}
              />
              <svg
                width="7"
                height="7"
                transform="rotate(180)"
                viewBox="0 0 7 7"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.206 2.684c0-.74.54-1.342 1.205-1.342H6.03V0H2.41C1.08 0 0 1.202 0 2.684v4.027h1.206V2.684z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadiusShadow
