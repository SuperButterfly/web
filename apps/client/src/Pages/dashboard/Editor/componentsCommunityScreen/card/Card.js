import './card.css'

const Card = ({userName,urlImage,imgProfile})=>{
    return (
        <div className={'cardContainer'}>
            <img className='imgProgect' src={urlImage}></img>
            <div className='userData'>
                <img className='imgProfile' src={imgProfile}></img>
                <span className='userName'>{userName}</span>
            </div>
        </div>
    )
}

export default Card