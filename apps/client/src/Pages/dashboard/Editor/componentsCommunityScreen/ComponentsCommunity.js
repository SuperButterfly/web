import './componentsCommunity.css';
import Navbar from './navbar/Navbar';
import Card from './card/Card'
const ComponentsCommunity = ()=>{

    return(
        <div className={"componentsComunityContainer"}>
            <Navbar/>
            <h1>bookshop</h1>
            <Card 
                userName="user_name" 
                urlImage="https://cdn.iconscout.com/icon/free/png-512/free-gallery-187-902099.png?f=avif&w=256"
                imgProfile="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            />
        </div>
    )
}

export default ComponentsCommunity