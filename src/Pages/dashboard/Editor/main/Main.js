import "./main.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from '../projectTools';


const Main = () => {
  const [idElementContext, setIdElementContext] = useState("");


  return (
    <>
      <MainHeader />
        <SidebarIcons />
        <ProjectTools/>
    </>
  );
};

export default Main;
