import './componentsCommunity.css';
import Navbar from './navbar/Navbar';
import Card from './card/Card'
import Cards from './cards/Cards';
const ComponentsCommunity = ()=>{

    return(
        <div className={"componentsComunityContainer"}>
            <Navbar/>
            <h1>bookshop</h1>
            {/*<Card 
                userName="user_name" 
                urlImage="https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-02-03-at-8.56.40-PM.png"
                imgProfile="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            />*/}
            <Cards/>
        </div>
    )
}

export default ComponentsCommunity