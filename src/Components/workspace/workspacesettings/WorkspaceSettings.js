import "./workspaceSettings.css";
import { useEffect, useState } from "react";
import General from "../../workspace/general/General.js";
import { NavLink } from "react-router-dom";
import Collaborators from "../../workspace/collaborators/Collaborators.js";
import BillingDetails from "../../workspace/billingdetails/BillingDetails.js";

import Domains_and_hosting from "../domains and hosting/DomainsAndHosting";

import Upgrade from "../../workspace/upgrade/Upgrade.js";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspace } from "@/redux/actions/workspaces.js";
// import Comments from '../../workspace/coments/Comments.js';
// import Plugins from '../../workspace/plugins/Plugins.js'

const WorkspaceSettings = () => {
  const dispatch = useDispatch();
  const workspaceSelected = useSelector(
    (state) => state.workspace.workspaceSelected
  );
  const workspaceTabMenu = useSelector(
    (state) => state.workspace.workspaceTabMenu
  );

  const [tab, setTab] = useState(0);
  const tabs = [
    "General",
    "Collaborators",
    "Billing Details",
    "domains and hosting",
    //'Upgrade',
    // 'Comments',
    // 'Plugins'
  ];
  const handleClick = (ev) => {
    ev.preventDefault();
    setTab(ev.target.id);
    let workspaceId = window.localStorage.getItem("workspaceid");
    dispatch(getWorkspace(workspaceId));
  };

  useEffect(() => {
    if (workspaceTabMenu) {
      setTab(workspaceTabMenu);
    }
  }, [workspaceTabMenu]);

  return (
    <div className="workspace-settings-container">
      <div className="workspace-settings-text-container">
        <NavLink
          className="workspace-settings-textlink"
          to="/workspace/templates"
        >
          <span>{workspaceSelected.name}</span>
        </NavLink>
        <h3>Workspace Settings</h3>
      </div>
      <div className="workspace-main-container">
        <div className="workspace-settings-main-container">
          <div className="workspace-settings-options-container">
            <h4 className="workspace-settings-title">SETTINGS</h4>
            <ul className="workspace-settings-ul">
              {tabs.map((title, idx) => (
                <li
                  className={
                    "workspace-settings-li" + `${tab == idx ? " selected" : ""}`
                  }
                  onClick={handleClick}
                  id={idx}
                  key={idx}
                >
                  <span className="workspace-settings-text" id={idx}>
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="workspace-settings-selected-container">
            {tabs[tab] === "General" && <General />}
            {tabs[tab] === "Collaborators" && <Collaborators />}
            {tabs[tab] === "Billing Details" && <BillingDetails />}
            {tabs[tab] === "domains and hosting" && <Domains_and_hosting />}
            {/* (tabs[tab] === 'Upgrade') && <Upgrade /> */}
            {/* (tabs[tab] === 'Comments') && <Comments /> */}
            {/* (tabs[tab] === 'Plugins') && <Plugins /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSettings;
