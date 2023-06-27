/* eslint-disable no-redeclare */
/* global localStorage */
import axios from 'axios';
import { setWorkspaces, setWorkspaceSelected} from '../slices/workspaceSlices.js';
import { setProjects } from '../slices/projectSlices.js';
import { getUser,setCollaborators,cambio } from "../slices/usersSlices";

export const getUserData = (email) => async (dispatch) => {
  localStorage.setItem('email', email);
  try {
    const { data } = await axios(`/user/${email}`); /* , {
      headers: {
        credential: "tkn"   //localStorage.getItem("tkn")
      }
    }); */
    dispatch(getUser(data.user));
    dispatch(setWorkspaces(data.user.workspaces));
    dispatch(setCollaborators([]))
    localStorage.setItem('workspaceid', data.user.workspaces[0].id);
    dispatch(setWorkspaceSelected(data.user.workspaces[0].id));
    dispatch(setProjects(data.user.workspaces[0].projects));
  }
  catch (error) {
    console.log(error.message);
  }
};


export const removeNotification = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/notification/${id}`, {}); // remove notification
    console.log("data", data)
    // dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
}

export const cambioNamedos = (name) => async (dispatch) => {
  try {
        dispatch(cambio(name))
    // dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
}



