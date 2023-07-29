import style from './componentsCommunity.module.css'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Card from './card/Card'
import Cards from './cards/Cards'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import Icons from './categories/index'

const ComponentsCommunity = () => {
  const [categories, setCategories] = useState({})
  const handleClick = (ev) => {
    const newState = {} // Object.keys(categories).filter(cat=>cat!==ev.target.name)
    for (const key in categories) {
      if (key !== ev.target.name) {
        newState[key] = categories[key]
      }
    }
    console.log(newState)
    setCategories(newState)
  }
  return (
    // <div className={'componentsComunityContainer'}>
    //   <Navbar setCategories={setCategories} />
    //   <div className="selectedCatContainer">
    //     {categories &&
    //       Object.keys(categories).map((icon) => (
    //         <img
    //           name={icon}
    //           onClick={handleClick}
    //           className="imgIcons2"
    //           src={categories[icon]}
    //         />
    //       ))}
    //   </div>
    // </div>
    <div className={style.componentsComunityContainer}>
      <div className={style.headerContainer}>
        <div className={style.header}>
          <h1 className={style.title}>Find your community on Discord</h1>
          <p className={style.subtitle}>
            From Gaming, to music, to learning, there's a place for you.
          </p>
        </div>
        <div className={style.searchContainer}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Explorar"
            className={style.search}
          />
          <HiMiniMagnifyingGlass className={style.icon} />
        </div>
        <div className={style.footerContainer}>
          <div className={style.footerButtons}>
            <button className={style.button}>Boton 1</button>
            <button className={style.button}>Boton 2</button>
            <button className={style.button}>Boton 3</button>
          </div>
          <div className={style.footerIcons}>
            {Object.keys(Icons).map((icon, i) => (
              <img
                // onClick={hadleClick}
                name={icon}
                className={style.imgIcons}
                src={Icons[icon]}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={style.cardsContainer}>
        <Cards />
      </div>
    </div>
  )
}

export default ComponentsCommunity
