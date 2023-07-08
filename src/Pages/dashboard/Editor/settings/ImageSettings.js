import { useState, useEffect } from 'react'
import './imagesettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const ImageSettings = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { componentSelected } = useSelector((state) => state.component)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    src: '',
    atl: '',
    loading: ''
  })

  useEffect(() => {
    setInput({
      src: componentSelected.attributes.src,
      alt: componentSelected.attributes.alt,
      loading: componentSelected.attributes.loading
    })
  }, [componentSelected])

  const handleInputChange = (ev) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const handleAttributes = (ev) => {
    dispatch(
      updateComponent(componentSelected.id, {
        attributes: {
          ...componentSelected.attributes,
          [ev.target.name]: ev.target.value
        }
      })
    )
  }

  const handleClickOption = (ev) => {
    setIsOpen(false)
    setInput((prevState) => {
      return {
        ...prevState,
        loading: ev.target.value
      }
    })
    dispatch(
      updateComponent(componentSelected.id, {
        attributes: {
          ...componentSelected.attributes,
          loading: ev.target.value
        }
      })
    )
  }

  return (
    <div className="image-settings-image-settings">
      <div className="image-settings-container">
        <span className="image-settings-title">Image</span>
        <svg viewBox="0 0 1024 1024" className="image-settings-clear">
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="image-settings-container1">
        <div className="image-settings-source-container">
          <div className="image-settings-src-container">
            <span>src</span>
            <div className="image-settings-container2">
              <input
                name="src"
                value={input.src}
                type="text"
                className="image-settings-textinput"
                onBlur={handleAttributes}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="image-settings-src-container1">
            <span>alt</span>
            <div className="image-settings-container3">
              <input
                name="alt"
                value={input.alt}
                type="text"
                className="image-settings-textinput1"
                onBlur={handleAttributes}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <img
          alt={componentSelected.attributes.alt}
          src={componentSelected.attributes.src}
          className="image-settings-thumbail"
        />
      </div>
      <div className="image-settings-loading-container">
        <label>loading</label>
        <div
          className="image-settings-container4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {' '}
            {!input.loading ? 'Select an option ...' : input.loading}
          </span>
          <svg viewBox="0 0 1024 1024" className="image-settings-open">
            <path d="M298 426h428l-214 214z"></path>
          </svg>
        </div>
        {isOpen && (
          <datalist className="image-settings-container5">
            <option value={'eager'} onClick={handleClickOption}>
              eager
            </option>
            <option value={'lazy'} onClick={handleClickOption}>
              lazy
            </option>
          </datalist>
        )}
      </div>
    </div>
  )
}

export default ImageSettings
