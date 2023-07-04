import "./popmenu.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Popmenu = ({ closeMenu1, closeModal1 }) => {
  const { projectSelected } = useSelector((state) => state.project);
  let navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    if(name) {
      console.log("click: ", name);
    }
    else closeMenu1(false)
  }; 

  return (
    <div className="popmenu-menu" >
      <div
        className="popmenu-menu-item" 
        onClick={() => navigate("/workspace/templates")}
        name="Dashboard"
      >
        <span name="Dashboard" >Dashboard</span>
      </div>
      <div
        name="PSettings"
        className="popmenu-menu-item1" 
        onClick={() => navigate(`/workspace/templates/${projectSelected.id}/ProjectSettings`)}
      >
        <svg viewBox="0 0 1024 1024" className="popmenu-set" name="PSettings" >
          <path name="PSettings" d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
        <span name="PSettings" >Project Settings</span>
      </div>
      <div name="Edit" className="popmenu-menu-item2" onClick={handleClick}>
        <span name="Edit" >Edit</span>
        <svg viewBox="0 0 1024 1024" className="popmenu-arrow" name="Edit" >
          <path name="Edit" d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div name="View" className="popmenu-menu-item3" onClick={handleClick}>
        <span name="View">View</span>
        <svg name="View" viewBox="0 0 1024 1024" className="popmenu-arrow1">
          <path name="View" d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div name="Import" className="popmenu-menu-item4" onClick={handleClick}>
        <span name="Import">Import</span>
        <svg name="Import" viewBox="0 0 1024 1024" className="popmenu-arrow2">
          <path name="Import" d="M426 726v-428l214 214z"></path>
        </svg>
        <div
          className="popmenu-submenu-item4"
          onClick={() => {
            closeModal1(true);
            closeMenu1(false);
          }}
        >
          <span>From teleport</span>
        </div>
      </div>
      <div name="Help" className="popmenu-menu-item5" onClick={handleClick}>
        <span name="Help">Help</span>
        <svg name="Help" viewBox="0 0 1024 1024" className="popmenu-arrow2">
          <path name="Help" d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
      <div name="Account" className="popmenu-menu-item6" onClick={handleClick}>
        <span name="Account">Account</span>
        <svg name="Account" viewBox="0 0 1024 1024" className="popmenu-arrow3">
          <path name="Account" d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Popmenu;
