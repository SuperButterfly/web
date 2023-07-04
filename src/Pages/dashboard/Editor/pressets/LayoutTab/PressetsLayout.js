import RadiusGroup from "./LayoutJs/RadiusGroup";
import SizeGroup from "./LayoutJs/SizeGroup";
import SpaceGroup from "./LayoutJs/SpaceGroup";
import "./pressets-layout.css";

const PressetsLayout = (props) => {
  return (
    <div className="thq-panel">
      <div className="panel-content">
        <div data-category-id="8bc00947-e956-40ac-bff9-c0e4937cc80d">
          <div className="thq-panel-section">
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">
                  <div className="pt-inline" style={{ alignItems: "center" }}>
                    <span>Size</span>
                    <div className="pt-icon">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.867 2.608l-.698-.046-4.155-.116.025 1.328 2.561.087-6.38 6.38-.087-2.562-1.328-.024.117 4.156.045.696.632-.02 4.221.052-.025-1.328-2.626-.021 6.38-6.38.023 2.624 1.361-.008-.118-4.155.052-.663z"
                          fill="#999"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="section-content-regular">
              <SizeGroup />
            </div>
          </div>
        </div>

        <div data-category-id="8bc00947-e956-40ac-bff9-c0e4937cc80d">
          <div className="thq-panel-section">
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">
                  <div className="pt-inline" style={{ alignItems: "center" }}>
                    <span>Space</span>
                    <div className="jsx-1640030424 pt-icon space ">
                      <svg
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0h1v16H1V0zM9 0h1v16H9V0z"
                          fill="#D9D9D9"
                        ></path>
                        <path d="M5 4.267h1v7.466H5V4.267z" fill="gray"></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="section-content-regular">
              <SpaceGroup />
            </div>
          </div>
        </div>

        <div data-category-id="8bc00947-e956-40ac-bff9-c0e4937cc80d">
          <div className="thq-panel-section">
            <div className="section-header">
              <div className="panel-title-container">
                <span className="panel-title">
                  <div className="pt-inline" style={{ alignItems: "center" }}>
                    <span>Radius</span>
                    <div className="jsx-1640030424 pt-icon radius ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20C0 8.954 8.954 0 20 0v1.495C9.78 1.495 1.495 9.78 1.495 20H0z"
                          fill="#D9D9D9"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="section-content-regular">
              <RadiusGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressetsLayout;
