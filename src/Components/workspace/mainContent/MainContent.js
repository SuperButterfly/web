/* global localStorage */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {getUserData, removeNotification} from '@/redux/actions/user.js';
import './mainContent.css';
import { selectProject } from '@/redux/slices/projectSlices.js';
import { getTarget, createProject } from '@/redux/actions/projects.js';
import {shareWorkspace} from '@/redux/actions/workspaces.js'
import MeetAdd from '../modal/MeetAdd';
import ModalPortal from '../modal/Modal.js'
import AcceptInvitation from '../invitationEmail/AcceptInvitation.js'
import CreateProjectPortal from './CreateProject.js'
import CardProject from './CardProject.js'
import ProjectTemplate from './ProjectTemplate.js'
import { useOutletContext } from "react-router-dom";

import axios from 'axios';
import {getUserById} from './getUserById.js'

const urlbase = '/workspace/assets';

const MainContent = () => {

  // const workspace = user.workspaces[0];
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const menuref = useRef(null);
  const [islimited, setlimited] = useState(false);
  const { user } = useSelector(state => state.user);
  const workspace = useSelector(state => state.workspace.workspaceSelected);
  const [idVisible, setIdVisible] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);
  //const user = useSelector(state=> user.user)
   const [showModal, setShowModal] = useState(false);
   const [createProjectWindow, setCreateProjectWindow] = useState(false) 
   const [showModalPreview, setShowModalPreview] = useState(false)  
   const {handleFilteredWorkspaces} = useOutletContext()
   
  useEffect(()=>{
    if(user.notifications?.length > 0 && user.notifications !== []){
       setShowModal(true) /*true*/
       console.log("user.notifications",user.notifications)
    }
  }, [user.notifications])

  useEffect(() => {
    if (workspace && workspace.projects && workspace.projects.length < 3) {
      if (user.plan === 'Free') setlimited(true);
    }
    else setlimited(false);
  }, [workspace]);

   const handleClose = ()=>{
      setShowModal(!showModal)
   }
  const handleAcceptInvitation = async (userId, message)=>{
       const data = await getUserById(userId)
    
          //console.log("user.notifications", user.notifications)
        
          const viewerValue = message.toLowerCase().split(' ').includes("viewer") 
          const editorValue = message.toLowerCase().split(' ').includes("editor") 
          
          const valueResult = viewerValue ? "viewer" : editorValue ? "editor" : "none"
       
        if(data){
         console.log("data", data)
          dispatch(shareWorkspace(workspace.id, data.user.email, valueResult))
        }
   }
   const handleDeleteInvitation = async (userId)=>{
       try{
         if(userId){
            dispatch(removeNotification(userId))
         }
       }
       catch(e){
         console.log(e.name)
       }
   }
   
  const handleMenu = ev => {
    // ev.preventDefault();
    setIdVisible(ev === idVisible ? null : ev);
  };

  const handleMenuClick = id => {
    dispatch(selectProject(id));
    localStorage.setItem('projectid', id);
    navigate(`${id}/ProjectSettings`);
  };

  const handleProject = id => {
    dispatch(selectProject(id));
    if (selectProject.pages && selectProject.pages[0]) {
      dispatch(getTarget(
        selectProject.pages[0].id
      ))
    }
    localStorage.setItem("currentProject", id)
    navigate(`/Editor/${id}`);
  };

  const handleCreateProject = async () => {
    handleCreateClose()
    /*try {
      await dispatch(createProject(workspace.id))
      window.location.reload()
    }
    catch (e) {
      console.log(e.message)
    }*/
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    //console.log(workspace.projects)
    let filtered = workspace.projects.filter(project => project.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredSearch(filtered)
    const workspacesFiltrados = user.workspaces.filter(workspace=> workspace.name.toLowerCase().includes(e.target.value.toLowerCase()))
    handleFilteredWorkspaces(workspacesFiltrados)
    //console.log("workspacesFiltrados", workspacesFiltrados)
  }

  const handleSearch = () => {
    let filtered = workspace.projects.filter(project => project.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredSearch(filtered)
    console.log(filteredSearch)
  }
  const handleCreateClose = ()=>{
    setCreateProjectWindow(!createProjectWindow)  
  }
 
 const handlePreview = ()=>{
    setShowModalPreview(!showModalPreview)
 }
 
  return (
    <div className="main-content-container">
         {showModal && <ModalPortal onClose={handleClose}> <AcceptInvitation onClose={handleClose} onInvite={handleAcceptInvitation} handleDeleteInvitation={handleDeleteInvitation}/></ModalPortal>} 
         {/*createProjectWindow && <CreateProjectPortal onClose={handleCreateClose}><CardProject handlePreview={handlePreview} /></CreateProjectPortal>*/}
         {/*showModalPreview && <ModalPortal onClose={handlePreview}><ProjectTemplate onClose={handlePreview}/></ModalPortal>*/} 
      
      <div className="main-content-container01">
        <div className="main-content-container02">
          <h1 className="main-content-text">{user.username} {workspace.name}</h1>
          <div className="main-content-container03">
            <span className="main-content-projects">
              <b>{user.plan} plan </b>| { 
               workspace && workspace.projects ? workspace.projects.length : 1
              } of 3 projects used 
            </span>
             <NavLink to="/workspace/templates/WorkspaceSettings">
                   <span style={{textDecoration:'underline', color:'blue', cursor: 'pointer'}}> manage </span>
             </NavLink>
          </div>
        </div>
        <div>
          <button 
            className={/*(!islimited) ? 'main-content-button-notactive' :*/ 'main-content-button'}
            onClick={()=> handleCreateProject()}
            //disabled={!islimited}
          >
            + Create project
          </button>
          
          <MeetAdd title={'+ Meet'} />
          
        </div>
      </div>
      
    {createProjectWindow && <div className="card-list-container">
      <div className="card-list-header">
          <p>customizable templates, handpicked just for you - for free!</p>
          <p>View All</p>
      </div>
      
         <CardProject handlePreview={handlePreview} />
         {showModalPreview && <ModalPortal onClose={handlePreview}><ProjectTemplate onClose={handlePreview}/></ModalPortal>} 
    </div>}
        
      <div className="main-content-container04">
        <div className="main-content-container05">
          <input
            type="text"
            name="search"
            onChange={handleSearchChange}
            value={search}
            id="input-search"
            className="main-content-text1"
            placeholder='Search'
          />
          <button onClick={()=> handleSearch()} className="main-content-button1">
            <svg viewBox="0 0 1024 1024" className="main-content-icon">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
          </button>
        </div>
        
        <div
          className="main-content-thq-dropdown"
        >
          <div
            className="main-content-dropdown-toggle"
          >
            <span className="main-content-text2">Order by</span>
            <div
              className="main-content-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="main-content-drop-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
        </div>
          <ul
            className="main-content-dropdown-list"
          >
            <li
              className="main-content-dropdown list-item"
            >
              <div
                className="main-content-dropdown-toggle1"
              >
                <span className="main-content-created">created</span>
              </div>
            </li>
            <li
              className="main-content-dropdown1 list-item"
            >
              <div
                className="main-content-dropdown-toggle2"
              >
                <span className="main-content-date">date</span>
              </div>
            </li>
            <li
              className="main-content-dropdown2 list-item"
            >
              <div
                className="main-content-dropdown-toggle3"
              >
                <span className="main-content-a-z">A - Z</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

        <ul className="main-content-ul list">
        {
            (workspace.projects && workspace.projects.length > 0)
            ?
            ((filteredSearch.length == 0) ? workspace.projects : filteredSearch).map((project, idx) => (
                <li 
                  className="list-item"
                  key={idx}
                >
                    <div className="main-content-workspace">
                        <img
                            alt='project'
                            src={`${urlbase}/AythenLogo.png`}
                            className="main-content-icon4"
                        />
                        <div 
                          className="main-content-container06"
                          onClick={() => handleProject(project.id)}
                        >
                            <span className="main-content-text3">{project.name}</span>
                            <div className="main-content-timestamps">
                                <span className="main-content-text4">
                                    created: {`${project.createdAt.slice(0, 10)} - updated: ${project.updatedAt.slice(0, 10)}`}
                                </span>
                            </div>
                        </div>
                    <div 
                      className="main-content-menu"
                      onClick={() => handleMenu(idx)}
                    >
                      <span>. . .</span>
                    </div>
                    
                    <div className="main-content-container07" id={idx} style={{ visibility: idx === idVisible ? "visible" : "hidden" }} >
                        <span className="main-content-clone">Clone</span>
                        <div className="main-content-container08">
                        <span className="main-content-delete">Delete</span>
                        <div className="main-content-container09">
                            <span>del</span>
                                <svg viewBox="0 0 1024 1024" className="main-content-icon5">
                                    <path d="M896 213.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-535.296l-261.333-298.667 261.333-298.667zM896 128h-554.667c-12.8 0-24.235 5.632-32.128 14.549l-298.667 341.333c-14.208 16.213-13.909 40.192 0 56.192l298.667 341.333c8.448 9.643 20.224 14.549 32.128 14.592h554.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM481.835 414.165l97.835 97.835-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835 97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835 97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="main-content-hr"></div>
                            <span 
                              className="main-content-settings"
                              id='1'
                              onClick={() => handleMenuClick(project.id)}
                            >
                              Project settings
                            </span>
                        </div>
                    </div>
                </li>)
                )
        : null
        }
        </ul>
    </div>
  );
};

export default MainContent;
