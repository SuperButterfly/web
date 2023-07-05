import "./popmenu.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PopsubmenuItem from "./PopSubmenuItem";

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
    if (name) {
      switch (name) {
        case "burguer":
          console.log("burguer");
          closeMenu1(true)
          break;
        case "Dashboard":
          console.log("Dashboard");
          navigate("/workspace/templates")
          break;
        case "PSettings":
          console.log("PSettings");
          navigate(`/workspace/templates/${projectSelected.id}/ProjectSettings`)
          break;
        case "Edit":
          console.log("Edit");
          break;
        case "Edit1":
          console.log("Edit1");
          break;
        case "Edit2":
          console.log("Edit2");
          break;
        case "View":
          console.log("View");
          break;
        case "Preview":
          console.log("Preview");
          navigate(`/preview`);   //`/${projectSelected.id}/ProjectSettings`)
          break;
        case "Publish":
          console.log("Publish");
          break;
        case "Import":
          console.log("Import");
          break;
        case "Teleport":
          console.log("Teleport");
          closeModal1(true);
          closeMenu1(false);
          break;
        case "Figma":
          console.log("Figma");
          break;
        case "Help":
          console.log("Help");
          break;
        case "Help item 1":
          console.log("Help1");
          break;
        case "Help item 2":
          console.log("Help2");
          break;
        case "Help item 3":
          console.log("Help3");
          break;
        case "Account":
          console.log("Account");
          break;
        case "ASettings":
          console.log("ASettings");
          break;
        case "Logout":
          console.log("Logout");
          break;
        default:
          console.log("default: ", name);
          closeMenu1(false);
          break;
      }
    }
    else closeMenu1(false)
  };

  return (
    <div className="popmenu-menu" >
      <div
        className="popmenu-menu-item"
        onClick={handleClick}
        name="Dashboard"
      >
        <span name="Dashboard" >Dashboard</span>
      </div>
      <div
        name="PSettings"
        className="popmenu-menu-item1"
        onClick={handleClick}
      >
        <svg viewBox="0 0 1024 1024" className="popmenu-set" name="PSettings" >
          <path name="PSettings" d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
        <span name="PSettings" >Project Settings</span>
      </div>
      <div name="Edit" className="popmenu-menu-item2" onClick={handleClick}>
        <span name="Edit" >Edit</span>
        <span  className="popmenu-arrow" name="Edit" >
          {/* viewBox="0 0 1024 1024" <path name="Edit" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item2">
          <PopsubmenuItem name="Edit1" label={'Edit item 1'} hadleClick={handleClick} />
          <PopsubmenuItem name="Edit2" label={'Edit item 2'} hadleClick={handleClick} />
        </div>
      </div>
      <div name="View" className="popmenu-menu-item3" onClick={handleClick}>
        <span name="View">View</span>
        <span name="View"  className="popmenu-arrow1">
          {/* viewBox="0 0 1024 1024" <path name="View" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item3">
          <PopsubmenuItem name="Preview" label={'Preview'} hadleClick={handleClick} />
          <PopsubmenuItem name="Publish" label={'Publish'} hadleClick={handleClick} />
        </div>
      </div>
      <div name="Import" className="popmenu-menu-item4" onClick={handleClick}>
        <span name="Import">Import</span>
        <span name="Import" className="popmenu-arrow2">
          {/* viewBox="0 0 1024 1024" <path name="Import" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item4" >
          <PopsubmenuItem name="Teleport" label={'Teleport'} hadleClick={handleClick} />
          <PopsubmenuItem name="Figma" label={'Figma'} hadleClick={handleClick} />
        </div>
      </div>
      <div name="Database" className="popmenu-menu-item5" onClick={handleClick}>
        <span name="Database">Database</span>
        <span name="Database" className="popmenu-arrow2">
          {/* viewBox="0 0 1024 1024" <path name="Import" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item5" >
          <PopsubmenuItem name="New database" label={'New database'} hadleClick={handleClick} />
          <PopsubmenuItem name="Go to Database" label={'Go to Database'} hadleClick={handleClick} />
        </div>
      </div>
      <div name="Help" className="popmenu-menu-item6" onClick={handleClick}>
        <span name="Help">Help</span>
        <span name="Help" className="popmenu-arrow2">
          {/* viewBox="0 0 1024 1024" <path name="Help" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item6">
          <PopsubmenuItem name="Help1" label={'Help item 1'} hadleClick={handleClick} />
          <PopsubmenuItem name="Help2" label={'Help item 2'} hadleClick={handleClick} />
          <PopsubmenuItem name="Help3" label={'Help item 3'} hadleClick={handleClick} />
        </div>
      </div>
      <div name="Account" className="popmenu-menu-item7" onClick={handleClick}>
        <span name="Account">Account</span>
        <span name="Account" className="popmenu-arrow3">
          {/* viewBox="0 0 1024 1024" <path name="Account" d="M426 726v-428l214 214z"></path> */}
          ►
        </span>
        <div className="popmenu-submenu-item7">
          <PopsubmenuItem name="ASettings" label={'Account Settings'} hadleClick={handleClick} />
          <PopsubmenuItem name="Logout" label={'Logout'} hadleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Popmenu;
