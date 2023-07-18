import './fileDetails.css'
import dataJson from '../mockData.json'
import Navbar from './NavbarDetails/NavbarDetails'
import { useParams } from "react-router-dom";
const File = ()=>{
    const {id} = useParams()
    const bookCurrent = dataJson.find(c=>c.id===id)
    return(
        <div>
            <Navbar project={bookCurrent}/>
            <div className={'imgContainerDetail'}>

                <img src={bookCurrent.urlImage}/>
            </div>
        </div>
    )
}

export default File