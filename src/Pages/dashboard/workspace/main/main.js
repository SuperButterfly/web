import './main.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import MenuLeft from '@/Components/workspace/menu/menu.js'
import MenuLeft from '@/Components/workspace/menu/menuLeft'
/*
-Logotipo
      -Diseño seo.aythen.con => entrar y coger el mismo diseño
      -Poner una lista en JSON con el mismo diseño de teleport

      - Lista de shared

      -New space
      -Usuario como seo.aythen.com

*/

const Main = () => {
  const [filteredWorkspaces, setFilteredWorkspaces] = useState([])

  const handleFilteredWorkspaces = (workspace) => {
    setFilteredWorkspaces(workspace)
    // console.log("workspaces", filteredWorkspaces)
  }

  return (
    <div className="notanmain">
      {/* <MenuLeft filteredWorkspaces={filteredWorkspaces} /> */}
      <MenuLeft filteredWorkspaces={filteredWorkspaces} />
      <Outlet context={{ handleFilteredWorkspaces }} />
    </div>
  )
}

export default Main
