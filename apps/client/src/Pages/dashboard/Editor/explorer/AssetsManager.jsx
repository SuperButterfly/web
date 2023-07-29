import './assetsmanager.css'
import { useState, useRef } from 'react'
import Unsplash from './Unsplash'
import Icons from './Icons'
import UploadsB from './UploadsB'

const AssetsManager = () => {
  const [search, setSearch] = useState('')
  const [searchName, setSearchName] = useState('')
  const assetsRef = useRef(null)

  /*
    Obtener iconos
    GET: https://api-web.aythen.com/api/resources/icons?source=  &search=
    source:
      feather, fontawesome, IcoMoon, materialIcons 0 typicons
    &page=numero y &search=buscar optativos
    ret: [{ name: 'nombre', data: '<svg> · · · </svg>' }]

    Subir archivos a carpeta
    POST: https://api-web.aythen.com/api/resources/upload/:folderName
	  body: { asset: file }
	  ret: 'Image saved ok' o error message

    Crear carpeta en proyecto
    POST: https://api-web.aythen.com/api/resources/newFolder/:templateId
	  body: { folderName }
	  ret: 'Folder created' o error message

    Crear carpeta en carpeta
    POST: https://api-web.aythen.com/api/resources/subFolder/:folderName
	  body: { folderName }
	  ret: 'Folder created' o error message

    Editar carpeta
    PATCH: https://api-web.aythen.com/api/resources/updateFolder/:folderName
	  body: { newFolderName }
	  ret: 'Folder updated' o error message

    Borrar carpeta
    PATCH: https://api-web.aythen.com/api/resources/deleteFolder/:folderName
	  ret: 'Folder deleted ok' o error message
  */
  const [tab, setTab] = useState(2)
  const tabs = ['uploads', 'unsplash', 'icons']

  const handleClick = (ev) => {
    ev.preventDefault()
    setTab(ev.target.id)
  }
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    setSearchName(value)
  }

  const handleSearchClick = () => {
    setSearchName(search)
  }

  return (
    <div className="assets-manager-container">
      <div className="assets-manager-container1">
        <span className="assets-manager-heading">Asset Manager</span>
      </div>
      <div className="assets-manager-container2">
        <span
          className="assets-manager-uploads"
          style={
            tabs[tab] === 'uploads'
              ? { borderColor: '#5ca9fd', fontWeight: '600' }
              : { borderColor: 'transparent' }
          }
          onClick={handleClick}
          id="0"
        >
          Uploads
        </span>
        <span
          className="assets-manager-unsplash"
          style={
            tabs[tab] === 'unsplash'
              ? { borderColor: '#5ca9fd', fontWeight: '600' }
              : { borderColor: 'transparent' }
          }
          onClick={handleClick}
          id="1"
        >
          Unsplash
        </span>
        <span
          className="assets-manager-icons"
          style={
            tabs[tab] === 'icons'
              ? { borderColor: '#5ca9fd', fontWeight: '600' }
              : { borderColor: 'transparent' }
          }
          onClick={handleClick}
          id="2"
        >
          Icons
        </span>
      </div>
      <div className="assets-manager-container3 ">
        <svg
          onClick={handleSearchClick}
          viewBox="0 0 1024 1024"
          className="assets-manager-icon"
        >
          <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="assets-manager-textinput"
          value={search}
          onChange={handleSearchChange}
          onKeyUp={handleSearchChange}
        />
      </div>
      <div className="assets-manager-container4" ref={assetsRef}>
        {tabs[tab] === 'uploads' && (
          <UploadsB uploadSearch={searchName} assetsRef={assetsRef} />
        )}
        {tabs[tab] === 'unsplash' && (
          <Unsplash unsplashSearch={searchName} assetsRef={assetsRef} />
        )}
        {tabs[tab] === 'icons' && <Icons iconsSearch={searchName} />}
      </div>
    </div>
  )
}

export default AssetsManager
