import "./styley.css";

const MenuCreate = () => {
  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">New Gray Token</span>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div className="input-addon-wrapper boxed flexible height-md not-valid">
                      <input
                        type="text"
                        placeholder="Name"
                        className="jsx-2523288086"
                        value=""
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <span
                  data-tooltip-name="Tokens must have a name."
                  className="thq-error-message"
                >
                  <div
                    data-tooltip-name="Tokens must have a name."
                    className="error-icon "
                  >
                    <div className="pt-icon error ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="#B81919"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1a9 9 0 100 18 9 9 0 000-18zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"
                        ></path>
                        <path d="M10.3 12.12H9.29V6h1v6.12h.01zm-.5 1.01c.2 0 .36.07.5.22.14.13.21.3.21.5s-.07.37-.22.52a.7.7 0 01-.5.2.74.74 0 01-.5-.2.7.7 0 01-.22-.52.7.7 0 01.72-.72h.01z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="jsx-2654182512">
                    Tokens must have a name.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="color-picker-container">
              <div
                className="chrome-picker"
                style={{
                  width: "225px",
                  background: "rgb(255, 255, 255)",
                  borderRadius: "2px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 8px",
                  boxSizing: "initial",
                  fontFamily: "Menlo",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    paddingBottom: "55%",
                    position: "relative",
                    borderRadius: "2px 2px 0px 0px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0px",
                      background: "rgb(255, 0, 0)",
                    }}
                  >
                    <style></style>

                    <div
                      className="saturation-white"
                      style={{
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <div
                        className="saturation-black"
                        style={{
                          position: "absolute",
                          inset: "0px",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          top: "55.6863%",
                          left: "26.5487%",
                          cursor: "default",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "6px",
                            boxShadow:
                              "rgb(255, 255, 255) 0px 0px 0px 1px inset",
                            transform: "translate(-6px, -6px)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 16px 12px" }}>
                  <div className="flexbox-fix" style={{ display: "flex" }}>
                    <div style={{ width: "32px" }}>
                      <div
                        style={{
                          marginTop: "6px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "8px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: "0px",
                            borderRadius: "8px",
                            boxShadow:
                              "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset",
                            background: "rgb(113, 83, 83)",
                            zIndex: 2,
                          }}
                        ></div>
                        <div
                          style={{
                            position: "absolute",
                            inset: "0px",
                            background:
                              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=") left center',
                          }}
                        ></div>
                      </div>
                    </div>

                    <div style={{ WebkitBoxFlex: 1, flex: "1 1 0%" }}>
                      <div
                        style={{
                          height: "10px",
                          position: "relative",
                          marginBottom: "8px",
                        }}
                      >
                        <div style={{ position: "absolute", inset: "0px" }}>
                          <div
                            className="hue-horizontal"
                            style={{
                              padding: "0px 2px",
                              position: "relative",
                              height: "100%",
                            }}
                          >
                            <div style={{ position: "absolute", left: "0%" }}>
                              <div
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "6px",
                                  transform: "translate(-6px, -1px)",
                                  backgroundColor: "rgb(248, 248, 248)",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.37) 0px 1px 4px 0px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ height: "10px", position: "relative" }}>
                        <div style={{ position: "absolute", inset: "0px" }}>
                          <div
                            style={{
                              position: "absolute",
                              inset: "0px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                inset: "0px",
                                background:
                                  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=") left center',
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              inset: "0px",
                              background:
                                "linear-gradient(to right, rgba(113, 83, 83, 0) 0%, rgb(113, 83, 83) 100%)",
                            }}
                          ></div>
                          <div
                            style={{
                              position: "relative",
                              height: "100%",
                              margin: "0px 3px",
                            }}
                          >
                            <div style={{ position: "absolute", left: "100%" }}>
                              <div
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "6px",
                                  transform: "translate(-6px, -1px)",
                                  backgroundColor: "rgb(248, 248, 248)",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.37) 0px 1px 4px 0px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flexbox-fix"
                    style={{ paddingTop: "16px", display: "flex" }}
                  >
                    <div
                      className="flexbox-fix"
                      style={{
                        WebkitBoxFlex: 1,
                        flex: "1 1 0%",
                        display: "flex",
                        marginLeft: "-6px",
                      }}
                    >
                      <div style={{ paddingLeft: "6px", width: "100%" }}>
                        <div style={{ position: "relative" }}>
                          <input
                            id="rc-editable-input-5"
                            spellCheck="false"
                            value="#715353"
                            style={{
                              fontSize: "11px",
                              color: "rgb(51, 51, 51)",
                              width: "100%",
                              borderRadius: "2px",
                              border: "none",
                              boxShadow:
                                "rgb(218, 218, 218) 0px 0px 0px 1px inset",
                              height: "21px",
                              textAlign: "center",
                            }}
                          />
                          <label
                            htmlFor="rc-editable-input-5"
                            style={{
                              textTransform: "uppercase",
                              fontSize: "11px",
                              lineHeight: "11px",
                              color: "rgb(150, 150, 150)",
                              textAlign: "center",
                              display: "block",
                              marginTop: "12px",
                            }}
                          >
                            hex
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "32px",
                        textAlign: "right",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "-4px",
                          marginTop: "12px",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{
                            fill: "rgb(51, 51, 51)",
                            width: "24px",
                            height: "24px",
                            border: "1px solid transparent",
                            borderRadius: "5px",
                            background: "transparent",
                          }}
                        >
                          <path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-btn-group">
              <button disabled="" className="pt-btn-color-add">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCreate;
