import { useEffect, useRef, useState } from 'react'
import style from './FaviconSettings.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../redux/actions/projects'

const FaviconSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [name, setName] = useState(false)

  const dispatch = useDispatch()
  const inpFile = useRef(null)

  const { projectSelected } = useSelector((state) => state.project)
  console.log(projectSelected)
  const handleImageChange = async (event) => {
    const file = event.target.files[0]
    console.log(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
      setName(event.target.files[0].name)
      dispatch(updateProject(projectSelected.id, reader.result))
    }
  }
  useEffect(() => {
    if (projectSelected && projectSelected.favicon) {
      setSelectedImage(projectSelected.favicon)
    }
  }, [projectSelected])
  return (
    <div className={style.general_container4}>
      <h4 className={style.container4_title}>
        Configuración / <small style={{ color: '#8e8e8e' }}>Favicon</small>{' '}
      </h4>
      <div className={style.container4_content}>
        <p className="container4-text">
          Haz que tu página web tenga una apariencia más profesional agregando
          un icono exclusivo en la pestaña del navegador.
        </p>
        <div className={style.container4_favicon}>
          <span>Favicon</span>
          <div className={style.container4_favicon_content}>
            <div className={style.container4_favicon_content_image}>
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected Favicon"
                  style={{ width: '64px', height: '64px' }}
                />
              ) : (
                <svg
                  width="64px"
                  height="44px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>image-picture</title>
                    <desc>Created with Sketch Beta.</desc> <defs> </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      // sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set"
                        // sketch:type="MSLayerGroup"
                        transform="translate(-360.000000, -99.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z"
                          id="image-picture"
                          // sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              )}
            </div>
            <div className={style.container4_favicon_content_input}>
              <span>Selecciona una imagen para cargar</span>

              <input
                style={{ display: 'none' }}
                type="file"
                name=""
                id=""
                ref={inpFile}
                onChange={handleImageChange}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <button onClick={() => inpFile.current.click()}>Cargar</button>
                {name && <span>{name}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className={style.container4_sugerencias}>
          <h4>Sugerencias para un buen favicon</h4>
          <ul>
            <li>
              <span>• Carga una imagen cuadrada</span>
              <span className={style.sugerencias_dimensiones}>
                (.png, .ico, .jpg)
              </span>
            </li>
            <li>
              <span>• Dimensiones recomendadas:</span>{' '}
              <span className={style.sugerencias_dimensiones}>
                180px por 180px
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FaviconSettings
