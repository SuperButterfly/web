import '../ColorCss/color-group.css'
import { useState } from 'react'
import ColorToken from './ColorToken'
import ColorMenu from './ColorMenu'
import MenuCreate from './ColorCreate'
import data from '../color.json'

const ColorGroup = () => {
  const colorGroup = data
  const [openMenu, setOpenMenu] = useState({})
  const [estru, setEstru] = useState(false)

  const handleMenu = (option, index) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }))
  }

  const handleCreate = () => {
    const valueOf = estru
    setEstru(!valueOf)
  }

  return (
    <>
      {colorGroup.categories.map((category, index) => (
        <div className="color-group-color-group" key={index}>
          <div id={index} className="color-group-container">
            <h3 className="color-group-text">{category.name}</h3>
            <svg
              viewBox="0 0 1024 1024"
              className="color-group-icon"
              onClick={() => handleMenu('menu', index)}
            >
              <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
            </svg>
          </div>
          {openMenu[index] && <ColorMenu handleMenu={handleMenu} />}
          <div className="color-group-container1">
            {category.name === 'Gray' && (
              <div className="color-token-contain-black">
                <div
                  className="color-token-color-token"
                  onMouseOver={() => {
                    const divElement = document.querySelector(
                      '.pt-icon-foreground'
                    )
                    const spanElement = document.querySelector(
                      '.color-token-name-staticB'
                    )
                    if (divElement && spanElement) {
                      divElement.style.display = 'none'
                      spanElement.style.display = 'inline'
                    }
                  }}
                  onMouseLeave={() => {
                    const divElement = document.querySelector(
                      '.pt-icon-foreground'
                    )
                    const spanElement = document.querySelector(
                      '.color-token-name-staticB'
                    )
                    if (divElement && spanElement) {
                      divElement.style.display = 'block'
                      spanElement.style.display = 'none'
                    }
                  }}
                >
                  <div className="pt-icon-foreground">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.91 10.91h1.602s.749-2.007 1.166-3.292h4.538l1.202 3.291h1.6L8.728 0h-1.6L2.908 10.91zm3.197-4.503L7.913 1.31l1.861 5.098H6.107z"
                      ></path>
                      <path d="M0 14.546V16h16v-1.454H0z"></path>
                    </svg>
                  </div>
                  <span
                    style={{ color: 'white' }}
                    className="color-token-name-staticB"
                  >
                    Black
                  </span>
                </div>
              </div>
            )}
            {category.tokens.map((token, tokenIdx) => (
              <ColorToken
                key={tokenIdx}
                name={token.name}
                color={token.color.hex}
              />
            ))}

            {category.name === 'Gray' && (
              <div className="color-token-contain-white">
                <div
                  className="color-token-color-token"
                  onMouseOver={() => {
                    const divElement = document.querySelector(
                      '.pt-icon-background'
                    )
                    const spanElement = document.querySelector(
                      '.color-token-name-static'
                    )
                    if (divElement && spanElement) {
                      divElement.style.display = 'none'
                      spanElement.style.display = 'inline'
                    }
                  }}
                  onMouseLeave={() => {
                    const divElement = document.querySelector(
                      '.pt-icon-background'
                    )
                    const spanElement = document.querySelector(
                      '.color-token-name-static'
                    )
                    if (divElement && spanElement) {
                      divElement.style.display = 'block'
                      spanElement.style.display = 'none'
                    }
                  }}
                >
                  <div className="pt-icon-background">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.797 12.366c0 .5-.5 1.5-1.5 1.5s-1.5-1-1.5-1.5c0-1 1-2 1.5-2.5.5.5 1.5 1.5 1.5 2.5zM11.68 8.416s.638-.638-.07-1.345L4.54 0 3.465 1.027 4.88 2.44l1.061 1.06 4.243 4.243 1.497.672z"></path>
                      <path d="M1.697 7.744L5.94 3.502 4.88 2.44S1.003 6.364.296 7.07c-.707.707.07 1.345.07 1.345l4.95 4.95s.707.707 1.414 0l4.95-4.95-1.498-.672H1.697z"></path>
                    </svg>
                  </div>
                  <span
                    style={{ color: 'black' }}
                    className="color-token-name-static"
                  >
                    White
                  </span>
                </div>
              </div>
            )}

            <button onClick={handleCreate} className="pt-bton">
              <div className="pt-iconx ">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#363636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a.5.5 0 00-1 0v3H3a.5.5 0 000 1h3v3a.5.5 0 001 0V7h3a.5.5 0 000-1H7V3z"></path>
                </svg>
              </div>
            </button>
            {estru && <MenuCreate category={category} />}
          </div>
        </div>
      ))}
    </>
  )
}

export default ColorGroup
