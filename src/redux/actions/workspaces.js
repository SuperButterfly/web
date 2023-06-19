/* eslint-disable no-redeclare */
/* global localStorage */
import { updateworkspaceSelected, setWorkspaces } from '../slices/workspaceSlices.js';
import axios from 'axios';

export const createWorkspace = (email) => async (dispatch) => {

  let userEmail = email ? email : localStorage.getItem('email');
  try {
    // const { data } = await axios.post(`/workspace/${userEmail}`); // add Workspace
    // dispatch(setWorkspaces(data.workspaces));
    console.log(`new workspace by ${userEmail}`);
  }
  catch (error) {
    console.log(error.message);
  }
};

export const getWorkspace = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/workspace/${id}`); // update Workspace
    dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
};

export const getWorkspaces = (email) => async (dispatch) => {

  let userEmail = email ? email : localStorage.getItem('email');
  try {
    const { data } = await axios.post(`/workspace/ofuser/${userEmail}`); // get User Workspaces
    dispatch(setWorkspaces(data.workspaces));
  }
  catch (error) {
    console.log(error.message);
  }
};

export const deleteWorkspace = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/workspace/delete/${id}`); // delete Workspace
    dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
};

export const updateWorkspace = (id, workspace) => async (dispatch) => {
  console.log(id, workspace)
  try {
    const { data } = await axios.patch(`/workspace/${id}`, workspace); // update Workspace
    dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
};

export const shareWorkspace = (id, usermail, collaborator) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/workspace/shareAdd/${id}?collaborator=${collaborator}`, { email: usermail }); // add collaborator
    dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
}

export const shareUpdate = (id, usermail, collaborator) => async (dispatch) => {
  console.log("id, usermail, collaborator", id, usermail, collaborator)
  try {
    const { data } = await axios.patch(`/workspace/shareUpdate/${id}?collaborator=${collaborator}`, { email: usermail }); // edit collaborator
    dispatch(updateworkspaceSelected(data.workspace));
    
  }
  catch (error) {
    console.log(error.message);
  }
}

export const shareRemove = (id, usermail) => async (dispatch) => {
  //console.log("id, usermail", id, usermail)
  try {
    const { data } = await axios.patch(`/workspace/shareRemove/${id}`, { email: usermail }); // remove collaborator
    //console.log("data", data)
    dispatch(updateworkspaceSelected(data.workspace));
  }
  catch (error) {
    console.log(error.message);
  }
}
