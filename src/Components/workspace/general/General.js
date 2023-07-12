import './general.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkspace, deleteWorkspace } from '@/redux/actions/workspaces.js'
import { useEffect, useState } from 'react'
// import { workspaceSlices as workspaceSliceGeneral } from '../../../../src/redux/slices/workspaceSlices.js';

const props = {
  workspace: 'current workspace name',
  isDisabled: true
}

function General() {
  const [dataName, setDataName] = useState({ name: '' })
  // const [workspaceid, setWorkspaceId] = useState('')
  const dispatch = useDispatch()

  const workspaceSelected = useSelector(
    (state) => state.workspace.workspaceSelected
  )
  const workspaces = useSelector((state) => state.workspace.workspaces)

  useEffect(() => {
    // console.log(workspaces)
    // setWorkspaceId(()=> localStorage.getItem("workspaceid"))
    // console.log(workspaceid)
    console.log('workspaceSelected', workspaceSelected.name)
  }, [])

  const handleSave = async () => {
    // await dispatch(updateWorkspace())
    // let id = localStorage.getItem("workspaceid")
    try {
      await dispatch(updateWorkspace(workspaceSelected.id, dataName))
    } catch (e) {
      console.log(e.message)
    }
    window.location.reload()
  }

  const handledelete = async () => {
    // let id = localStorage.getItem("workspaceid")
    try {
      await dispatch(deleteWorkspace(workspaceSelected.id))
    } catch (e) {
      console.log(e.message)
    }
    console.log('delete ok')
    window.location.reload()
  }

  const handleNameChange = (e) => {
    setDataName({ name: e.target.value })
  }
  return (
    <div className="general-container">
      <div className="general-container1">
        <div className="general-container2">
          <label className="general-text">Workspace name</label>
          <input
            type="text"
            data-property="name"
            className="general-textinput"
            onChange={handleNameChange}
            placeholder={workspaceSelected.name}
            value={dataName.name}
          />
        </div>
        <button className="general-save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
      <div className="general-container3">
        <b className="general-text">Delete workspace</b>
        <p className="general-text1">
          You cannot delete workspaces with active subscriptions or the last
          workspace in the list.
        </p>
        <button
          className="general-button"
          disabled={workspaces.length == 1 ? props.isDisabled : null}
          onClick={handledelete}
        >
          Delete workspace
        </button>
      </div>
      <hr className="divisor" />

      <div className="general-container4">
        <h4 className="container4-title">Configuracion / Favicon</h4>
        <div>
          <p className="container4-text">
            Haz que tu pagina web tenga una apariencia mas profesional agregando
            un icono exclusivvo en la pestana del navegador.
          </p>
          <div className="container4-favicon">
            <span>Favicon</span>
            <div>
              <svg
                width="3  4px"
                height="3 4px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                // xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>image-picture</title>{' '}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    // sketch:type="MSPage"
                  >
                    {' '}
                    <g
                      id="Icon-Set"
                      // sketch:type="MSLayerGroup"
                      transform="translate(-360.000000, -99.000000)"
                      fill="#000000"
                    >
                      {' '}
                      <path
                        d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z"
                        id="image-picture"
                        // sketch:type="MSShapeGroup"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
              <div>
                <span>Selecciona una imagen para cargar</span>
                <button>Cargar</button>
              </div>
            </div>
          </div>
          <div
            id="container4-sugerencias"
            className="container4-sugerencias"
            style={{ margin: '30px 0px' }}
          >
            <h4>Sugerencias para un buen favicon</h4>
            <ul>
              <li>
                • Carga una imagen cuadrada <br /> (.png, .ico, .jpg)
              </li>
              <li>
                • Dimensiones recomendadas: <br /> 180px por 180px
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="divisor" />

      <div className="general-container5">
        <h4 className="container5-title">
          Configuracion / Optimizacion para buscadores
        </h4>

        <span className="container5-text_span">SUPERIOR</span>
        <p className="container5-text">
          Tu cuenta incluye Visibilidad en buscadores. Optimiza tus paginas con
          herramientas faciles de usar.
        </p>
        <button>Empezar la optimizacion</button>
        <hr className="divisor" />
        <div className="container5-body">
          <p className="container5-text">
            Incluye palabras clave que describan de que trata tu pagina web para
            que la gente pueda encontrarte cuando busca en Google.
          </p>
          <div className="flex">
            <label htmlFor="">Paginas</label>
            <select name="" id="">
              <option value="">Selecciona una opcion</option>
              <option value="">Inicio</option>
              <option value="">Productos</option>
              <option value="">Contacto</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="">Titular</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Introduzca nombre del titular"
            />
          </div>
          <div className="flex">
            <label htmlFor="">Descripcion</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Introduzca una descripcion de la pagina web"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General
