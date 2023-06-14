import './collaborators.css'
import {useState, useEffect} from 'react'
import ModalPortal from '../modal/Modal.js'
import Invitation from '../invitation/Invitation.js'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCollaborators } from '@/redux/slices/usersSlices'
import ListCollaborators from './listCollaborators'
import {sendSharing} from './sharing'

const Collaborators = () => {
  
  const dispatch = useDispatch();
  const workspaceSelected = useSelector(state => state.workspace.workspaceSelected);
  //const allCollaborators  = useSelector(state=> state.user.collaborators);
  const userData=useSelector(state=> state.user.user);
  const userLogged = useSelector(state => state.user.user)
  const [usersFiltered,setUsersFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [email, setEmail] = useState('')
  const [editor, setEditor] = useState('Editor')
  const [showList, setShowList] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [emailSentResult, setEmailSentResult] = useState([])
  const [allCollaborators, setAllCollaborators] = useState([])
  const { collaboratorviewer, collaboratoreditor } = workspaceSelected
  
  const handleEditor= (e)=>{
    setEditor(e.target.textContent)
  }
  const handleSearchChange = (e)=>{
        setSearch(e.target.value)
  }
  const handleShowList = ()=>{
      setShowList(!showList)
  }

  const handleEmailChange = (e)=>{
     setEmail(e.target.value)
  }
  
  const handleClose = ()=>{
    setShowModal(!showModal)
 }
 const handleInviteClick = ()=>{
   setShowModal(true)
 }
 
 const handleSendInvitation = ()=>{
   const body = {
     from: userLogged.username,
     to: email,
     workspaceId: workspaceSelected.id,
     as: editor
   }
   sendSharing(body)
   
   /*
   axios.post("https://api-web.aythen.com/api/mail/send-email", {
     workspaceId: workspaceSelected.id,
     username: userLogged.username,
     from: userLogged.email,
     to: email,
     subject: `Hello accept my invitation as a ${editor}`,
     html: "<p>We need to collaborate in a project join in https://web.aythen.com/workspace/templates</p>"
   }).then(res=> {
     setEmailSentResult(res.data)
     console.log("emailSentResult", res.data)
   })*/
 }
 useEffect(()=>{
     //console.log(emailSentResult.labelIds)
    if(collaboratorviewer && collaboratoreditor) {
      //collaboratoreditor.editor = "editor"
      //collaboratorviewer.viewer = "viewer"
      setAllCollaborators([...collaboratoreditor, ...collaboratorviewer])
      console.log(allCollaborators)
    }
    
 },[collaboratoreditor, collaboratorviewer])
 /*
 useEffect(()=>{
 //actualizar el collaborator con lo que ya tiene almacenado en redux en caso de que no aparezca para que se muestre
    let users=[{name:userData.username,email:userData.email,role:"owner",avatar:'',user:'owner'},{"avatar": "avatar2.png", "user": "user0", "name": "Alison", "role": "editor", "email": "alisonJ1@aythen.com"}, {"avatar": "avatar3.png", "user": "user1", "name": "Luis", "role": "editor", "email": "user1@example.com"}, {"avatar": "avatar2.png", "user": "user2", "name": "Jorge", "role": "viewer", "email": "user2@example.com"}, {"avatar": "avatar2.png", "user": "user3", "name": "Tomas", "role": "viewer", "email": "user3@example.com"}, {"avatar": "avatar1.png", "user": "user4", "name": "Charlie", "role": "viewer", "email": "sponge@bob.com"}]
    dispatch(setCollaborators(users))
  },[])
  */
  
  useEffect(()=>{
    if(allCollaborators && allCollaborators.length>0){
      let qr= allCollaborators || [];
      qr= qr.filter(user => 
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
      );
      
      setUsersFiltered(qr)
    }
  },[search,allCollaborators])
  
 
  return (
    <div className="collaborators-container">
      {showModal && <ModalPortal hideClose={true} onClose={handleClose}> <Invitation onClose={handleClose} onInvite={handleSendInvitation}/> </ModalPortal> } 
      
      <div className="collaborators-container01">
        <div className="collaborators-container02">
          <span className="collaborators-text">Search</span>
          <input
            type="text"
            id="page-search"
            autoComplete='off'
            placeholder='Search users...'
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
                <div onClick={handleShowList} className="collaborators-inner-container">  
                    <span className="collaborators-text02">
                      {editor}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 8 4"
                      className="collaborators-icon"
                    >
                      <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
                    </svg>
                </div>  
                { showList && <div className="collaborators-container07">
                  <span onClick={handleEditor} className="collaborators-text04">Editor</span>
                  <span onClick={handleEditor} className="collaborators-text04">Viewer</span>
                </div> }
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleInviteClick} className="collaborators-button">
          Send invite
        </button>
      </div>
      
      <ListCollaborators data={usersFiltered} />

      <div style={{ "display":  'none' }} className="collaborators-container08">
        <div className="collaborators-container09">
          <div className="collaborators-container10">
            <span className="collaborators-text05">
              Name
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 5"
              className="collaborators-icon2"
            >
              <path d="M2.62 0L0 2.5 2.62 5l.548-.523-1.682-1.604H7v-.746H1.486L3.168.523z"></path>
            </svg>
          </div>
          <div className="collaborators-container11">
            <div className="collaborators-container12">
              <span className="collaborators-text06">UN</span>
            </div>
            <div className="collaborators-container13">
              <p className="collaborators-text06">
                User Name
              </p>
              <p>username@mail.com</p>
            </div>
          </div>
        </div>
        <div className="collaborators-container14">
          <div className="collaborators-container15">
            <span className="collaborators-text05">Collaborator type</span>
            <div className="collaborators-container16">
              <span className="collaborators-text10">i</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 5"
              className="collaborators-icon4"
            >
              <path d="M2.62 0L0 2.5 2.62 5l.548-.523-1.682-1.604H7v-.746H1.486L3.168.523z"></path>
            </svg>
          </div>
          <span className="collaborators-text11">
            workspace
          </span>
        </div>
        <div className="collaborators-container17">
          <div className="collaborators-container18">
            <span className="collaborators-text05">Role</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 5"
              className="collaborators-icon6"
            >
              <path d="M2.62 0L0 2.5 2.62 5l.548-.523-1.682-1.604H7v-.746H1.486L3.168.523z"></path>
            </svg>
          </div>
          
        <div className="collaborators-roles">
          <span className="description">
              owner
          </span>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 8 4"
               className="collaborators-icon">
                      <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
          </svg>
          <div className="collaborators-container19">
               <span className="collaborators-text04">Editor</span>
               <span className="collaborators-text04">Viewer</span>
          </div>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Collaborators
