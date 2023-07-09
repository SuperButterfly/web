import { useState, useEffect } from 'react'
import './background.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'
import ContextMenuBackground from './ContextMenuBackground.js'
import BgContent from './BgContent.js'

const Background = () => {
  /* const initialInputBg = {
    type:"",
    value:"",
    icon:{}
  } */
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [typeBG, setTypeBG] = useState([])
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const dispatch = useDispatch()

  const handleClick = (ev) => {
    const x = ev.pageX
    const y = ev.pageY

    const left = x - 400
    const top = y - 50
    console.log({ x, y })

    setVisible(!visible)
    setPos({ top, left })
    // setPos({right:"2rem",bottom:"11rem"})
  }

  const handleBG = (bg) => {
    let newBg = {}
    const auxTypeBg = typeBG
    switch (bg) {
      case 'color':
        newBg = {
          type: bg,
          value: '#D9D9D9',
          icon: { backgroundColor: '#D9D9D9' }
        }
        break
      case 'image':
        newBg = {
          type: bg,
          value: 'https://web.aythen.com/workspace/assets/image.png',
          icon: {
            backgroundImage:
              "url('https://web.aythen.com/workspace/assets/image.png')"
          }
        }
        break
      case 'gradient':
        newBg = {
          type: bg,
          value: 'linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%)',
          icon: {
            backgroundImage:
              'linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%)'
          }
        }
        break
    }

    const newState =
      auxTypeBg && auxTypeBg[0] && auxTypeBg[0].type === 'color'
        ? [newBg]
        : bg === 'color'
          ? [newBg]
          : [...auxTypeBg, newBg]
    setTypeBG(newState)
    addBackground(newState)
  }

  useEffect(() => {
    setTypeBG([
      /* {type:"",value:"",icon:{}} */
    ])
    if (
      componentSelected &&
      componentSelected.properties &&
      componentSelected.properties.style
    ) {
      const bgComponent = Object.keys(componentSelected.properties.style).find(
        (key) => key.startsWith('background')
      )
      if (bgComponent) {
        const bgValue = componentSelected.properties.style[bgComponent]
        switch (bgComponent.slice(10)) {
          case 'Color':
            setTypeBG({
              type: 'color',
              value: bgValue,
              icon: { backgroundColor: bgValue }
            })
            break
          case 'Image':
            const auxMatch = bgValue.match(/(linear-gradient|url)\(([^)]+)\)/g)
            setTypeBG(
              auxMatch.map((bg) =>
                bg.startsWith('url')
                  ? {
                      type: 'image',
                      value: bg.match(/url\(['"]?([^'"]+)['"]?\)/i)[1],
                      icon: {
                        backgroundImage: bg
                      }
                    }
                  : {
                      type: 'gradient',
                      value: bg.match(/linear-gradient\(([^)]+)\)/i)[1],
                      icon: { backgroundImage: bg }
                    }
              )
            )
            break
          default:
            setTypeBG({ type: '', value: '', icon: {} })
        }
      }
    }
  }, [id])

  const handleInputChange = (ev, idx) => {
    const newBg = handleStateBg(ev.target.value, idx)
    const auxTypeBg = typeBG
    auxTypeBg[idx] = newBg
    setTypeBG(auxTypeBg)
  }

  const handleUpdateComponent = (newStyle) => {
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newStyle
          }
        }
      })
    )
  }

  const handleStateBg = (stateBg, idx) => {
    let newBg = { ...typeBG[idx] }
    switch (typeBG[idx].type) {
      case 'color':
        newBg = { ...newBg, value: stateBg, icon: { backgroundColor: stateBg } }
        break
      case 'image':
        newBg = {
          ...newBg,
          value: stateBg,
          icon: { backgroundImage: `url('${stateBg}')` }
        }
        break
      case 'gradient':
        newBg = {
          ...newBg,
          value: stateBg,
          icon: { backgroundImage: `linear-gradient(${stateBg})` }
        }
        break
    }
    return newBg
  }

  const handleAddBg = (newValue, idx) => {
    if (newValue) {
      const newBg = handleStateBg(newValue, idx)
      const auxBg = typeBG
      auxBg[idx] = newBg
      setTypeBG(auxBg)
      addBackground(auxBg)
    } else {
      handleBG(newValue)
    }
  }
  const addBackground = (stateBg) => {
    if (
      componentSelected &&
      componentSelected.properties &&
      componentSelected.properties.style
    ) {
      const iconsBg = stateBg.map((curr) => curr.icon)
      const stylesComponent = {}
      const newBackground =
        iconsBg && iconsBg.length
          ? iconsBg.reduce((prev, curr) => {
            const prop = Object.keys(curr)[0]
            const auxPrev = `${prev[prop]},${curr[prop]}`
            return { [prop]: auxPrev }
          })
          : {}
      for (const key in componentSelected.properties.style) {
        if (!key.startsWith('background')) {
          stylesComponent[key] = componentSelected.properties.style[key]
        }
      }
      handleUpdateComponent({ ...stylesComponent, ...newBackground })
    }
  }

  const deleteBackground = (idx) => {
    if (
      componentSelected &&
      componentSelected.properties &&
      componentSelected.properties.style
    ) {
      const stylesComponent = {}

      for (const key in componentSelected.properties.style) {
        if (!key.startsWith('background')) {
          stylesComponent[key] = componentSelected.properties.style[key]
        }
      }
      const auxTypeBg = typeBG.filter((_, i) => i !== idx)
      setTypeBG(auxTypeBg)
      addBackground(auxTypeBg)
    }
  }

  return (
    <div className="background-container">
      <div className="background-component-header" onClick={handleClick}>
        <span className="title-background">Background</span>
        <svg viewBox="0 0 1024 1024" className="title-icon">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      {typeBG && typeBG.length > 0
        ? typeBG.map((inpBg, idx) => (
            <BgContent
              deleteBackground={deleteBackground}
              handleInputChange={handleInputChange}
              value={inpBg.value}
              icon={inpBg.icon}
              type={inpBg.type}
              // handleBlur={handleBlur}
              idx={idx}
              handleAddBg={handleAddBg}
            />
        ))
        : null}
      <ContextMenuBackground
        handleBG={handleBG}
        posicion={pos}
        setVisible={setVisible}
        typeBG={typeBG}
        visible={visible}
      />
    </div>
  )
}

export default Background
