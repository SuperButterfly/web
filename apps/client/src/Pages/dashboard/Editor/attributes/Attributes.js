import './attributes.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const possibleTagChanges = [
  [
    'div',
    'article',
    'section',
    'aside',
    'nav',
    'header',
    'main',
    'footer',
    'figure'
  ],
  [
    'span',
    'label',
    'strong',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'b',
    'i',
    'em',
    'u',
    's',
    'del',
    'pre',
    'code',
    'blockquote',
    'figcaption',
    'cite'
  ],
  ['ul', 'ol', 'dl'],
  ['li', 'dt', 'dd']
]

const Attributes = () => {
  const { componentSelected } = useSelector((state) => state.component)
  const [isOpen, setOpen] = useState(true)
  const [isListOpen, setListOpen] = useState(false)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    custom_attr: '',
    id: '',
    custom_attr_tag: ''
  })
  const [availableAttributes, setAvailableAttributes] = useState({})
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    let auxAvAtt = {}
    if (componentSelected.tag === 'img' || componentSelected.tag === 'video') {
      for (const prop in componentSelected.attributes) {
        if (!componentSelected.nativeAttributes.includes(prop)) {
          auxAvAtt[prop] = componentSelected.attributes[prop]
        }
      }
    } else {
      auxAvAtt = componentSelected.attributes
    }
    setInput({
      ...input,
      ...auxAvAtt,
      id: auxAvAtt && auxAvAtt.id ? auxAvAtt.id : ''
    })
    setAvailableAttributes(auxAvAtt)
    setSelectedTag(componentSelected.tag)
  }, [componentSelected])

  const handleInputChange = (ev) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const addAttributes = (stateInput) => {
    const newAttribute = stateInput.custom_attr_tag
    const value = stateInput.custom_attr
    const actAttributes = {
      ...componentSelected.attributes,
      [newAttribute]: value
    }
    setInput({ ...input, custom_attr_tag: '', custom_attr: '' })
    if (!componentSelected.attributes[newAttribute]) {
      dispatch(
        updateComponent(componentSelected.id, {
          attributes: {
            ...actAttributes
          },
          tag: selectedTag // Actualiza el tag del componente seleccionado
        })
      )
    }
  }

  const deleteAttributes = (name) => {
    const newState = {}
    for (const prop in componentSelected.attributes) {
      if (prop !== name) {
        newState[prop] = componentSelected.attributes[prop]
      }
    }
    dispatch(
      updateComponent(componentSelected.id, {
        attributes: {
          ...newState
        },
        tag: selectedTag // Mantén el mismo tag del componente seleccionado
      })
    )
  }

  const handleAttributes = (ev) => {
    const actAttributes = {
      ...componentSelected.attributes,
      [ev.target.name]: ev.target.value
    }

    dispatch(
      updateComponent(componentSelected.id, {
        attributes: {
          ...actAttributes
        },
        tag: selectedTag // Mantén el mismo tag del componente seleccionado
      })
    )
  }

  const isOver = (id) => {
    const target = document.getElementById(id)
    target.style.color = '#fff'
    target.style.backgroundColor = '#595959'
  }

  const isOut = (id) => {
    const target = document.getElementById(id)
    target.style.color = '#595959'
    target.style.backgroundColor = '#fff'
  }

  const options = possibleTagChanges.filter((tags) =>
    tags.includes(componentSelected.tag)
  )[0]

  const handleTagSelection = (tag) => {
    setSelectedTag(tag)
    dispatch(
      updateComponent(componentSelected.id, {
        tag
      })
    )
  }

  return (
    <div className="attributes-container">
      <div
        className="attributes-component-header"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="attributes-title">Attributes</span>
        <svg
          viewBox="0 0 1024 1024"
          className="attributes-arrow"
          onClick={() => setOpen(!isOpen)}
          style={isOpen ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
            className=""
          ></path>
        </svg>
      </div>
      <div
        className="attributes-container-main"
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="attributes-container2">
          <span className="attributes-tag-title">Tag</span>
          <span className="attributes-tag-name">{selectedTag}</span>
          {options && options.length && options.length > 0 && (
            <div
              className="attributes-container3"
              onClick={() => setListOpen(!isListOpen)}
            >
              <svg viewBox="0 0 1024 1024" className="attributes-icon1">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </div>
          )}
          {isListOpen && (
            <div className="attributes-container6">
              {options && options.length && options.length > 0
                ? options.map((option) => (
                    <div
                      key={option}
                      className="attributes-container7"
                      onClick={() => handleTagSelection(option)}
                      onMouseEnter={() => isOver(option)}
                      onMouseLeave={() => isOut(option)}
                      id={option}
                    >
                      <span key={option} onClick={() => setListOpen(false)}>
                        {option}
                      </span>
                    </div>
                  ))
                : null}
            </div>
          )}
        </div>
        <div className="attributes-container4">
          <span className="attributes-i-dtitle">ID</span>
          <input
            name="id"
            onChange={handleInputChange}
            value={input.id}
            className="attributes-text"
            placeholder={'e.g. testimonials'}
            onBlur={handleAttributes}
          />
        </div>
        {availableAttributes &&
          Object.keys(availableAttributes).map((att) =>
            att !== 'id' ? (
              <div key={att} className="attributes-container4">
                <span className="attributes-i-dtitle">{att}</span>
                <input
                  className="attributes-text"
                  onChange={handleInputChange}
                  onBlur={handleAttributes}
                  name={att}
                  value={input[att]}
                />
                {componentSelected.nativeAttributes &&
                  !componentSelected.nativeAttributes.includes(att) && (
                    <svg
                      viewBox="0 0 1024 1024"
                      className="attributes-icon"
                      onClick={() => deleteAttributes(att)}
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  )}
              </div>
            ) : null
          )}
        <div className="attributes-container5">
          <input
            name="custom_attr_tag"
            value={input.custom_attr_tag}
            onChange={handleInputChange}
            className="attributes-text"
            placeholder="custom attr"
          />
          <input
            name="custom_attr"
            value={input.custom_attr}
            onChange={handleInputChange}
            className="attributes-text"
            placeholder={'value'}
          />
          <svg
            viewBox="0 0 1024 1024"
            className="attributes-icon"
            onClick={() =>
              input.custom_attr_tag.length && input.custom_attr.length
                ? addAttributes(input)
                : null
            }
          >
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Attributes
