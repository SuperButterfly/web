import './card.css'
import { useNavigate } from 'react-router-dom'
import Categories from '../categories/index'
const Card = ({
  userName,
  urlImage,
  imgProfile,
  id,
  projectName,
  categories,
  description = 'Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!'
}) => {
  const navigate = useNavigate()
  const navigateToProfile = ({ id }) => {
    navigate(`/store/${id}`)
  }
  return (
    <div className={'cardContainer'} onClick={() => navigateToProfile({ id })}>
      <div
        className={'postalImg'}
        style={{ backgroundImage: `url(${urlImage})` }}
      ></div>
      {/* <svg
        width="50"
        height="51"
        viewBox="0 0 40 41"
        fill="none"
        style={{
          marginLeft: '8%',
          marginTop: '-11%'
        }}
      >
        <path
          d="M0 9.52344C0 4.55288 4.02944 0.523438 9 0.523438H31C35.9706 0.523438 40 4.55288 40 9.52344V31.4453C40 36.4159 35.9706 40.4453 31 40.4453H9C4.02944 40.4453 0 36.4159 0 31.4453V9.52344Z"
          fill={`url(#${id})`}
        />
        <defs>
          <pattern
            id={id}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image${id}`}
              transform="matrix(0.0025076 0 0 0.00251251 -0.141946 -0.138313)"
            />
          </pattern>
          <image
            id={`image${id}`}
            width="512"
            height="512"
            xlinkHref={imgProfile}
          />
        </defs>
      </svg> */}
      <div className="guild">
        <div className="textContainer">
          {categories.map((cat) => (
            <img className="categoriesCard" src={Categories[cat]} />
          ))}

          <span className="projectName">{projectName}</span>
        </div>
        <small className="descriptionComponent">{description}</small>
        <div className="usersContainer">
          <small className="memberContainer">
            <div className="member"></div> 150,465 Online
          </small>
          <small className="memberContainer">
            <div className="member"></div> 1.000.000 Members
          </small>
        </div>
      </div>
    </div>
  )
}

export default Card
