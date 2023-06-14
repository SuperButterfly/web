import React from 'react';
import './listCollaborators.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setCollaborators } from '@/redux/slices/usersSlices'
import { shareRemove, shareUpdate } from '@/redux/actions/workspaces.js'
import { updateCollaborator } from '@/redux/slices/usersSlices'

const ListCollaborators = ({ data }) => {
   
   const dispatch = useDispatch()
   const workspaceSelected  = useSelector(state => state.workspace.workspaceSelected);
   const userLogged = useSelector(state => state.user.user);
     
   const [showListTwo, setShowListTwo] = useState(false);
   const [menuIndex, setMenuIndex] = useState(0);
   const [showDelete, setShowDelete] = useState(false);
   const [menuDeleteIndex, setMenuDeleteIndex] = useState(false);
   const { collaboratorviewer, collaboratoreditor } = workspaceSelected

   const roleList = ["Editor", "Viewer"]
   
   const handleShowListTwo = (indice)=>{
      setShowListTwo(!showListTwo)
      setMenuIndex(indice)
    }
   const handleRole = (e, index)=>{
     const useremail = data[index].email
     let role = e.target.textContent.toLowerCase()
     //console.log(role)
     dispatch(shareUpdate(workspaceSelected.id, useremail, role))
     setShowListTwo(false)
     
     //dispatch(updateCollaborator({...data[index], role: role}))
     //console.log({...data[index], role: role})
    //console.log(role)
    //console.log(e.target.value)
   }
   const showDeleteList = (indice)=>{
       setShowDelete(!showDelete)
       setMenuDeleteIndex(indice)
   }
   const handleDeleteCollaborator = (index)=>{
       const useremail = data[index].email
       dispatch(shareRemove(workspaceSelected.id, useremail))
       window.location.reload()
   }
  
  useEffect(()=>{
    
  },[])
  
  const showRole = (email)=>{
     if(email){
       let result = collaboratoreditor.find(item=> item.email == email)
             if(result) return "editor"
     }
     if(email){
       let result2 = collaboratorviewer.find(item=> item.email == email) 
            if(result2) return "viewer"
     }
  }
  
  return (
      <>
    <table className='table-collaborators'>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Collaborator type</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {data.map((user, index) => (
                <tr style={{position: "relative"}} key={index}>
                <td className='table-collaborators-avatar'>
                    <img src={user.avatar} onError={(e) => { e.target.src = '/workspace/assets/user.svg' }}/>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td ><span className="collaborators-type">workspace</span></td>
                <td className='collaborators-role' >
                    
                      <div className={(userLogged.id == user.id) ? "collaborators-roles-opacity collaborators-roles": "collaborators-roles"}>
                       <div onClick={()=> handleShowListTwo(index)} className="collaborators-inner-container">
                           <span className="description">
                               {(userLogged.id == user.id) ? "Owner" : showRole(user.email)} {/*user.role*/}
                           </span>
                           <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 8 4"
                                className="collaborators-icon">
                                       <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
                           </svg>
                       </div>
                      </div>
                        { ((userLogged.id != user.id) && (showListTwo && index == menuIndex)) && <div className="collaborators-container19">
                             <span onClick={(e)=>handleRole(e, index)} className="collaborators-text04">{ roleList[0] }</span>
                             <span onClick={(e)=>handleRole(e, index)} className="collaborators-text04">{ roleList[1] }</span>
                        </div> }
                </td>
                { (userLogged.id != user.id) && <td className="menuworkspacedots-container">
                     <span onClick={()=>showDeleteList(index)} className="menuworkspace-dots">...</span>
                        { (showDelete && index == menuDeleteIndex) && <div className="collaborators-container19">
                             <span onClick={()=>handleDeleteCollaborator(index)} className="collaborators-text04">Delete</span>
                        </div> }
                </td> }
                </tr>
            ))}
      </tbody>
    </table>

        </>
  );
};

export default ListCollaborators;