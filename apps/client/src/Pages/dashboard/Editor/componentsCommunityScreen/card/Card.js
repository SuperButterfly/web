import './card.css'
import { useNavigate } from "react-router-dom";
const Card = ({userName,urlImage,imgProfile,id,projectName})=>{
    const navigate = useNavigate()
    return (
        <div className={'cardContainer'} onClick={()=>navigate(`/file/${id}`)}>
            <img className='imgProgect' src={urlImage}></img>
            <div className='userData'>
                <img className='imgProfile' src={imgProfile}></img>
                <div className='textContainer'>
                    <h5 className='projectName'>{projectName}</h5>
                    <span className='userName'>{userName}</span>
                </div>
            </div>
        </div>
    )
}

export default Card