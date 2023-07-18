import './navbarDetails.css'
const NavbarDetails = ({project})=>{

    return(
        <div className={"navbarDetailsContainer"}>
            <div className={'projectData'}>
                <h1>{project.projectName}</h1>
                <div className={'detailsUserData'}>

                    <img className={'userProfile'} src={project.imgProfile}/>
                    <span className={'usernameDetails'}>{project.userName}</span>
                </div>
            </div>
        </div>
    )
}

export default NavbarDetails