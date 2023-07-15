import './collaborators.css'
import { useState, useEffect } from 'react'
import ModalPortal from '../modal/Modal.js'
import Invitation from '../invitation/Invitation.js'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCollaborators } from '@/redux/slices/usersSlices'
import ListCollaborators from './listCollaborators'
import { sendSharing } from './sharing'
import Option from './Options/Option.js'

const Collaborators = () => {
  const dispatch = useDispatch()
  const workspaceSelected = useSelector(
    (state) => state.workspace.workspaceSelected
  )

  const data = [
    {
      email: 'franckito639@gmail.com',
      avatar:
        'https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4',
      username: 'Haru',
      id: 'adasdasfdasf'
    },
    {
      email: 'ajasjasdjjads@gmail.com',
      avatar:
        'https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4',
      username: 'AJAKASDL',
      id: 'insdjisija'
    },
    {
      email: 'ajasjasdjjads@gmail.com',
      avatar:
        'https://avatars.githubusercontent.com/u/77626612?s=400&u=a449f2af4deca41360245fea5384331c370ca18c&v=4',
      username: 'AJAKASDL Pepito',
      id: 'insdjisija'
    }
  ]

  // const allCollaborators  = useSelector(state=> state.user.collaborators);
  const [prueba1, setPrueba1] = useState({
    colla0: true,
    colla1: true,
    colla2: true
  })
  const [prueba, setPrueba] = useState(false)
  const userData = useSelector((state) => state.user.user)
  const userLogged = useSelector((state) => state.user.user)
  const [usersFiltered, setUsersFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [email, setEmail] = useState('')
  const [editor, setEditor] = useState('Editor')
  const [showList, setShowList] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [emailSentResult, setEmailSentResult] = useState([])
  const [allCollaborators, setAllCollaborators] = useState([])
  const { collaboratorviewer, collaboratoreditor } = workspaceSelected

  const handleEditor = (e) => {
    e.preventDefault()
    setEditor(e.target.textContent)
    setShowList(!showList)
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleShowList = (e) => {
    e.preventDefault()
    setShowList(!showList)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleClose = () => {
    setShowModal(!showModal)
  }
  const handleInviteClick = () => {
    setShowModal(true)
  }

  const handleTrue = (i, value) => {
    setPrueba1((prevState) => ({
      ...prevState,
      [i]: value
    }))
  }

  const handleSendInvitation = () => {
    const body = {
      from: userLogged.username,
      to: email,
      workspaceId: workspaceSelected.id,
      as: editor
    }
    sendSharing(body)

    /*
   axios.post("https://api-web.aythen.com/api/mail/send-email", {
      console.log("🚀 ~ file: Collaborators.js:104 ~ setPrueba1 ~ value:", value)
     workspaceId: workspaceSelected.id,
     username: userLogged.username,
     from: userLogged.email,
     to: email,
     subject: `Hello accept my invitation as a ${editor}`,
     html: "<p>We need to collaborate in a project join in https://web.aythen.com/workspace/templates</p>"
   }).then(res=> {
     setEmailSentResult(res.data)
     console.log("emailSentResult", res.data)
   }) */
  }

  function obtenerIniciales(user) {
    // Dividir el nombre completo en palabras separadas
    const palabras = user.split(' ')

    // Obtener la primera letra de cada palabra
    const iniciales = palabras.map((palabra) => palabra.charAt(0))

    // Unir las iniciales en un solo string
    const inicialesString = iniciales.join('')

    return inicialesString
  }

  useEffect(() => {
    // console.log(emailSentResult.labelIds)
    if (collaboratorviewer && collaboratoreditor) {
      // collaboratoreditor.editor = "editor"
      // collaboratorviewer.viewer = "viewer"
      setAllCollaborators([...collaboratoreditor, ...collaboratorviewer])
    }
  }, [collaboratoreditor, collaboratorviewer])
  /*
 useEffect(()=>{
 //actualizar el collaborator con lo que ya tiene almacenado en redux en caso de que no aparezca para que se muestre
    let users=[{name:userData.username,email:userData.email,role:"owner",avatar:'',user:'owner'},{"avatar": "avatar2.png", "user": "user0", "name": "Alison", "role": "editor", "email": "alisonJ1@aythen.com"}, {"avatar": "avatar3.png", "user": "user1", "name": "Luis", "role": "editor", "email": "user1@example.com"}, {"avatar": "avatar2.png", "user": "user2", "name": "Jorge", "role": "viewer", "email": "user2@example.com"}, {"avatar": "avatar2.png", "user": "user3", "name": "Tomas", "role": "viewer", "email": "user3@example.com"}, {"avatar": "avatar1.png", "user": "user4", "name": "Charlie", "role": "viewer", "email": "sponge@bob.com"}]
    dispatch(setCollaborators(users))
  },[])
  */

  useEffect(() => {
    if (allCollaborators && allCollaborators.length > 0) {
      let qr = allCollaborators || []
      qr = qr.filter(
        (user) =>
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.username.toLowerCase().includes(search.toLowerCase())
      )

      setUsersFiltered(qr)
    }
  }, [search, allCollaborators])

  return (
    <div className="collaborators-container">
      {showModal && (
        <ModalPortal hideClose={true} onClose={handleClose}>
          {' '}
          <Invitation
            onClose={handleClose}
            onInvite={handleSendInvitation}
          />{' '}
        </ModalPortal>
      )}

      <div className="collaborators-container01">
        <div className="collaborators-container02">
          <span className="collaborators-text">Search</span>
          <input
            type="text"
            id="page-search"
            autoComplete="off"
            placeholder="Search users..."
            name="page-search"
            className="collaborators-textinput"
            onChange={handleSearchChange}
            value={search}
          />
        </div>
        <div className="collaborators-container03">
          <span className="collaborators-text01">Invite by email</span>
          <div className="collaborators-container04">
            <div className="collaborators-container05">
              <input
                type="text"
                className="collaborators-textinput1"
                value={email}
                placeholder="Add email"
                onChange={handleEmailChange}
                data-property="email"
              />
              <div className="collaborators-container06">
                <div
                  onClick={handleShowList}
                  className="collaborators-inner-container"
                >
                  <span className="collaborators-text02">{editor}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 4"
                    className="collaborators-icon"
                  >
                    <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
                  </svg>
                </div>
                {showList && (
                  <div className="collaborators-container07">
                    <span
                      onClick={handleEditor}
                      className="collaborators-text04"
                    >
                      Editor
                    </span>
                    <span
                      onClick={handleEditor}
                      className="collaborators-text04"
                    >
                      Viewer
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleInviteClick} className="collaborators-button">
          Send invite
        </button>
      </div>

      <ListCollaborators data={data} />

      {/* <div className="workspace-grid jsx-943001974">
        <span className="col header active-collaborator">
          <div className="pt-inline-colla" style={{ alignItems: 'center' }}>
            <span>Name</span>
            <div className="icon-container pt-icon arrow-left rotate">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 5">
                <path d="M2.62 0L0 2.5 2.62 5l.548-.523-1.682-1.604H7v-.746H1.486L3.168.523z"></path>
              </svg>
            </div>
          </div>
        </span>
        <span class="jsx-1569363936 jsx-943001974 col-header-user ">
          <div
            class="jsx-1934687187 pt-inline"
            style={{ alignItems: 'center' }}
          >
            <span class="jsx-1569363936 jsx-943001974 span-collaborator">
              Collaborator type
            </span>
            <div
              data-tooltip-name="Collaborator type"
              class="jsx-3041112192 pt-info-icon"
            >
              <div class="jsx-3855399672 pt-icon info ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm10-4a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm1 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </span>
        <span className="jsx-1569363936 jsx-943001974 col-header ">
          <div
            className="jsx-1934687187 pt-inline"
            style={{ alignItems: 'center' }}
          >
            <span className="jsx-1569363936 jsx-943001974">Role</span>
          </div>
        </span>
        <span className="jsx-1569363936 jsx-943001974"></span>
        {data &&
          data.map((c, i) => (
            <>
              <div  key={`colla${i}`} className="jsx-1569363936 jsx-943001974 collaborator-wrapper">
                <div className="jsx-1569363936 jsx-943001974 content-collaborators">
                  <div className="jsx-1569363936 jsx-943001974 avatar">
                    {obtenerIniciales(c.username)}
                  </div>
                  <div className="jsx-1569363936 jsx-943001974 item_content">
                    <p className="jsx-1569363936 jsx-943001974 title-collaborator">
                      {c.username}
                    </p>
                    <div className="jsx-1569363936 jsx-943001974 small-details">
                      <small className="jsx-1569363936 jsx-943001974 description">
                        {c.email}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <span class="jsx-1569363936 jsx-943001974 description permission-label workspace-label">
                workspace
              </span>
              <div className="jsx-1569363936 jsx-943001974">
                <div className="jsx-3017135966 pt-select">
                  <div
                    tabindex="-1"
                    className="jsx-3017135966 selection-wrapper"
                  >
                    <div className="jsx-3017135966 selection-value-wrapper">
                      <span className="jsx-3017135966 selection-value">
                        Viewer
                      </span>{' '}
                      <div
                        onClick={() => handleTrue(`colla${i}`, true)}
                        className="jsx-2691281944 pt-icon drop-cue "
                      >
                        <svg
                          viewBox="0 0 8 4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
                        </svg>
                      </div>
                      {prueba1[`colla${i}`] ? <Option /> : <h2>No hay opciones</h2>}
                    </div>
                  </div>
                </div>
              </div>
              <span className="jsx-1569363936 jsx-943001974">
                <div className="jsx-1491175148 ctx-menu-icon-wrapper">
                  <div className="jsx-2868903485 pt-icon more ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
            </>
          ))}
        <div className="jsx-1569363936 jsx-943001974 collaborator-wrapper">
          <div className="jsx-1569363936 jsx-943001974 content-user">
            <div className="jsx-1569363936 jsx-943001974 avatar">
              {obtenerIniciales(userData.username)}
            </div>
            <div className="jsx-1569363936 jsx-943001974 item_content">
              <p className="jsx-1569363936 jsx-943001974 title-collaborator">
                {userData.username}
              </p>
              <div className="jsx-1569363936 jsx-943001974 small-details">
                <small className="jsx-1569363936 jsx-943001974 description">
                  {userData.email}
                </small>
              </div>
            </div>
          </div>
        </div>
        <span class="jsx-1569363936 jsx-943001974 description permission-label workspace-label">
          workspace
        </span>
        <span class="jsx-1569363936 jsx-943001974 description-rol">Owner </span>
        <span class="jsx-1569363936 jsx-943001974"></span>
      </div> */}
    </div>
  )
}

export default Collaborators
