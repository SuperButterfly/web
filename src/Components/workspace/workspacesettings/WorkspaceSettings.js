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


  const [popup, setPopup] = useState(false);

  const handleOpenPopup = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };


  return (
    <div className="workspace-settings-container">
      <div className="upgrade-card">
        <span className="title">Upgrade your workspace to Professional</span>
        <div className="description-wrapper">
          <p className="description">On the Free plan, you are limited to 1 project.
            <br />For unlimited projects, custom domains, Vercel integration and a whole lot more, upgrade your workspace.</p>
          <button className="pt-btn" onClick={handleOpenPopup} >Upgrade Now</button>
        </div>
      </div>
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <div className="pop-header">
              <div className="modal-content1">
                <button onClick={handleClosePopup}>Close</button>
                 <p className="title2">Upgrade workspace</p>
                <button className="pt-btn1" onClick={handleClosePopup}>
                  <div className="pt-icon1 actions/close ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z">
                      </path>
                    </svg>
                  </div>
                </button> 
                <div className="create-workspace-modal">
                  <div className="workspace-plan-card">
                    <p className="card-title1">Professional Plan</p>
                    <span className="card-price-details">€<span className="card-price">18</span>
                      <span className="description1">/editor/month</span>
                    </span>
                    <div className="advantages-wrapper">
                      <div className="pt-inline1">
                        <div className="margin-offers">
                          <p className="adv-section-title">You'll enjoy all Free features, plus:</p>
                          <div className="">
                            {/* <div className="pt-icon1 checkmark ">
                              <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                            </svg>
                            </div> */}
                            <span className="description1">Unlimited projects</span>
                          </div>
                          <div>
                            <div className=" pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                              </svg> */}
                            </div>
                            <span className="description1">Private projects</span>
                          </div>
                          <div >
                            <div className="pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                              </svg> */}
                            </div>
                            <span className="description1">Dedicated customer support</span>
                          </div>
                          <a href="#" target="_blank" rel="noopener noreferrer" >
                            <div className="all-features">
                              <p className="link1">See all features</p>
                              <div className="pt-icon1 arrow-right ">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 5">
                                  <path d="M4.38 5L7 2.5 4.38 0l-.548.523 1.682 1.604H0v.746h5.514L3.832 4.477z"></path>
                                </svg> */}
                              </div>
                            </div>
                          </a>
                        </div>
                        <div >
                          <p className="adv-section-title">Included professional hosting:</p>
                          <div >
                            <div className="pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                              </svg> */}
                            </div>
                            <span className="description1">Publish to custom domain(s)</span>
                          </div>
                          <div>
                            <div className="pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z">
                                </path>
                              </svg> */}
                            </div>
                            <span className="description1">1 GB of assets / project</span>
                          </div>
                          <div >
                            <div className="pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                              </svg> */}
                            </div>
                            <span className="description1">Unlimited bandwith</span>
                          </div>
                          <div >
                            <div className="pt-icon1 checkmark ">
                              {/* <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.826 1.236s.441-.446-.082-.977c-.523-.53-.964-.083-.964-.083L3.895 7.15 1.28 4.5s-.523-.53-1.046 0c-.524.53 0 1.06 0 1.06l3.139 3.18c.523.53.964.084.964.084l7.49-7.588z"></path>
                              </svg> */}
                            </div>
                            <span className="description1">Integration with Vercel</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inputs-container">
                  <div className="pt-inline1" >
                    <div className="billing-section">
                      <div className="pt-stack1">
                        <p>Billing period</p>
                        <div className="billing-radio-btns">
                          <label className="pt-radio">
                            {/* <input name="radio" type="radio" value="YEARLY" /> */}
                            {/* <span className="checkmark"></span> */}
                            <div className="label-text">
                              <div className="price-description">
                                <span className="title1">Yearly</span>
                                {/* <span className="label">SAVE 20% 🎉</span> */}
                                <span className="price">15 €/month</span>

                              </div>
                            </div>
                          </label>
                          <label className="pt-radio">
                            {/* <input className="checkmark" name="radio" type="radio" value="MONTHLY" checked="" /> */}
                            {/* <span className="checkmark"></span> */}
                            <div className="label-text">
                              <div className="price-description">
                                <span className="title1">Monthly</span>
                                <span className="price">18 €/month</span>
                              </div>
                            </div>
                          </label>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h2>Professional Plan</h2>
                <p>
                  €18/editor/month
                  <br />
                  You'll enjoy all Free features, plus:
                  <br />
                  - Unlimited projects
                  <br />
                  - Private projects
                  <br />
                  - Dedicated customer support
                  <br />
                  See all features
                  <br />
                  Included professional hosting:
                  <br />
                  - Publish to custom domain(s)
                  <br />
                  - 1 GB of assets / project
                  <br />
                  - Unlimited bandwith
                  <br />
                  - Integration with Vercel
                  <br />
                  Billing period
                </p> */}
            </div>

          </div>
        </div>
      )}
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
