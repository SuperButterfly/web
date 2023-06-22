/* eslint-disable no-redeclare */
/* global localStorage */
import axios from "axios";
import {
  setSelectedComponent,
  updateSelectedComponent,
  setComponentsSelected,
  updateComponentsSelected,
  cleanComponentsSelected,
} from "../slices/componentSlices";
import { setTarget } from "../slices/projectSlices";

export const getSelectedComponent = (id) => async (dispatch) => {
  const componentId = id ? id : localStorage.getItem("componentId");
  try {
    const { data } = await axios(`/component/${componentId}`);
    dispatch(setSelectedComponent(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateComponent = (id, component) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/component/${id}`, component);
    dispatch(updateSelectedComponent(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const createComponent = (id, tag) => async (dispatch) => {
  const src = localStorage.getItem("src");
  try {
    const body = { tag };
    if (src) body.src = src;
    const { data } = await axios.post(`/children/${id}`, body); //
    dispatch(setTarget(data.component));
    localStorage.removeItem("src");
    localStorage.removeItem("text");
  } catch (error) {
    console.log(error.message);
  }
};

export const createChildren = (id, tag) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/children/tree/${id}`, { tag });
    dispatch(setTarget(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteComponent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/component/delete/${id}`);
    console.log(data);
    dispatch(setTarget(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const cleanEventAndUpdateComponent =
  (componentSelected, id) => async (dispatch) => {
    try {
      if (
        componentSelected &&
        componentSelected.id !== id &&
        componentSelected.properties &&
        componentSelected.properties.event &&
        componentSelected.properties.event.length
      ) {
        const { data } = await axios.patch(
          `/component/${componentSelected.id}`,
          {
            ...componentSelected,
            properties: {
              ...componentSelected.properties,
              event: "",
            },
          }
        );
        dispatch(updateSelectedComponent(data.component));
      }
      const { data } = await axios(`/component/${id}`);
      localStorage.setItem(
        "lastComponentSelected",
        JSON.stringify(data.component)
      );
      dispatch(setSelectedComponent(data.component));
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteComponentSelected = () => async (dispatch) => {
  try {
    dispatch(setSelectedComponent({}));
    dispatch(cleanComponentsSelected());
  } catch (error) {
    console.log(error.message);
  }
};

export const pasteComponent = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post("/component/pasteComponent", body);
    dispatch(updateSelectedComponent(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const addComponentSelected = (id) => async (dispatch) => {
  const componentId = id ? id : localStorage.getItem("componentId");
  try {
    const { data } = await axios(`/component/${componentId}`);
    console.log(data);
    dispatch(setComponentsSelected(data.component));
  } catch (error) {
    console.log(error.message);
  }
};

export const deletedMultipleComponents =
  (componentsId, targetId) => async (dispatch) => {
    try {
      console.log(componentsId);
      const { data } = await axios.patch(
        "component/multipleComponentsDeleted",
        {
          componentsId,
          targetId,
        }
      );
      dispatch(setTarget(data.component));
    } catch (error) {
      console.log(error.message);
    }
  };

export const getParentId = (idChildren) => async (dispatch) => {
  try {
    const { data } = await axios.get("/component/getParentId", {
      params: { idChildren },
    });

    dispatch(getSelectedComponent(data.parentId));
  } catch (error) {
    console.log(error.response);
  }
};
