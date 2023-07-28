import './navbar.css'
import SearchBar from '../../../../../Components/SearchBar/SearchBar'
import Icons from '../../componentsCommunityScreen/categories/index.js'
const Navbar = ({ setCategories }) => {
  const hadleClick = (ev) => {
    setCategories((state) => {
      return {
        ...state,
        [ev.target.name]: Icons[ev.target.name]
      }
    })
  }
  return (
    <div className={'navbarContainer'}>
      <SearchBar width="740px" bgColor="#FFF" />
      <div className="categoriesIconsContainer">
        {Object.keys(Icons).map((icon) => (
          <img
            onClick={hadleClick}
            name={icon}
            className="imgIcons"
            src={Icons[icon]}
          />
        ))}
      </div>
    </div>
  )
}

export default Navbar
