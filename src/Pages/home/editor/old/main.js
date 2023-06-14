import NavbarTool from './navbarTool/navbarTool'
import Sidebar from './sideBar'
import Menu from './menu/menu'

const Main = () => {
  return (
    <div className='main' style={{width:"100%"}}>
        <div style={{display: "flex"}}>
            <Menu/>
            <Sidebar/>
        </div>
        <NavbarTool/>
    </div>
  )
}

export default Main