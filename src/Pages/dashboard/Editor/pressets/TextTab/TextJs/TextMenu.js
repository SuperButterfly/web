import { useState } from "react";
import "../TextCss/TextMenu.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextMenu = () => {
  const [text, setText] = useState("The quick");

  const fontsList = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
  ];
  const fontSizesList = [
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    // Agrega más tamaños según tus necesidades
  ];
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ font: fontsList }],
      [{ size: fontSizesList }][("uppercase", "lowercase")],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "uppercase",
    "lowercase",
    "font",
    "size",
  ];
  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">Content</span>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div className="input-addon-wrapper">
                      <input
                        type="text"
                        placeholder="Name"
                        className="jsx-2523288086"
                        value="Content"
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-token-preview">
              <span className="text-sample">
                The quick brown fox jumped over the lazy dog...
              </span>
            </div>
            <div className="font-dropdown-wrapper">
              <div className="jsx-108338622">
                <div className="pt-inputTec">
                  <div className="input-addon-wrapper">
                    <input
                      type="text"
                      className="jsx-2523288086 "
                      value="Inter"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-style-item-wrapper">
              <div style={{ height: "24px" }}>
                <div className="jsx-108338622">
                  <div className="pt-inputT">
                    <div className="input-addon-wrapper">
                      <input
                        type="text"
                        placeholder="400 - Regular"
                        className="jsx-2523288086 "
                        value="400 - Regular"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className="input-addon-wrapper">
                <input
                  type="text"
                  placeholder="auto"
                  className="jsx-2523288086"
                  value="16"
                />
                <span className="input-addon-wrapper">px</span>
              </span>
            </div>
            <div>
              <ReactQuill
                value={text}
                onChange={setText}
                modules={modules}
                formats={formats}
              />
              <div>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            </div>
            {/* <div
              className="text-style-item-wrapper"
              style={{ marginTop: "8px" }}
            >
              <div className="icon-unit-wrapper">
                <div className="pt-icon typography/line-height ">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.961 12l.43-.395L5.18 9.867 4.5 9l-.925.867V2.133L4.5 3l.68-.867L3.372.395 2.96 0l-.406.395L.82 2.133 1.5 3l.925-.867v7.734L1.5 9l-.68.867 1.745 1.738.396.395zM8 0h8v1H8V0zM8 5.5h8v1H8v-1zM8 11h8v1H8v-1z"
                      fill="#999"
                    ></path>
                  </svg>
                </div>
                <span className="unit-input">
                  <input
                    type="text"
                    placeholder="auto"
                    className="inputText"
                    value="1.15"
                  />
                  <span className="unit"></span>
                </span>
              </div>
              <div className="icon-unit-wrapper">
                <div className="pt-icon typography/letter-spacing ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 8.51h1.25s.585-1.564.91-2.567H5.7l.938 2.568h1.249L4.539 0H3.291L0 8.51zM2.495 5L3.904 1.02 5.356 5H2.495z"
                      fill="#999"
                    ></path>
                    <path
                      d="M14.75 0H16l-3.29 8.51H11.46L8.113 0h1.249l.937 2.568.345.944 1.453 3.977 1.408-3.977.335-.944c.325-1.003.91-2.568.91-2.568zM15.5 13.339l.5.52-.5.502L13.867 16 13 15.32l.867-.925H2.133L3 15.32l-.867.68-1.718-1.724L0 13.859l.415-.432 1.718-1.787.867.68-.867.925h11.734L13 12.32l.867-.68 1.633 1.699z"
                      fill="#999"
                    ></path>
                  </svg>
                </div>
                <span className="input-addon-wrapper">
                  <input
                    type="text"
                    placeholder="auto"
                    className="inputText"
                    value=""
                  />
                  <span className="unit hidden"></span>
                </span>
              </div>
            </div> */}
            <div className="text-style-item-wrapper">
              <div className="button_groups_wrapper">
                <div className="pt-btn-groupT">
                  <button data-action-name="uppercase" className="pt-btnTe">
                    AA
                  </button>
                  <button data-action-name="lowercase" className="pt-btnTe">
                    aa
                  </button>
                  <button data-action-name="capitalize" className="pt-btnTe">
                    Aa
                  </button>
                </div>
              </div>
              <div className="button_groups_wrapper">
                <div className=".pt-btn-groupUp ">
                  <button data-action-name="underline" className="pt-btnTe">
                    <div className="pt-icon ">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.86 9.129c-2.243 0-3.364-1.137-3.364-3.41V.469h1.12v5.273c0 .836.19 1.452.568 1.849.38.396.941.595 1.687.595 1.508 0 2.262-.807 2.262-2.42V.469h1.113v5.238c0 .52-.062.982-.187 1.389-.118.394-.316.76-.58 1.075-.262.31-.614.548-1.055.712-.442.164-.962.246-1.564.246z"
                        ></path>
                        <path d="M0 11v1h12v-1H0z"></path>
                      </svg>
                    </div>
                  </button>
                  <button data-action-name="line-through" className="pt-btnTe">
                    <div className="pt-icon ">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#line-through_svg__clip0)">
                          <path opacity="0.6" d="M0 4h12v1H0V4z"></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.016 8.186c.234 0 .446-.022.635-.065a1.79 1.79 0 00.495-.184c.274-.154.478-.408.568-.71.048-.154.071-.325.071-.512 0-.203-.02-.374-.064-.513a.995.995 0 00-.246-.395 1.702 1.702 0 00-.496-.337 6.23 6.23 0 00-.829-.308 6.902 6.902 0 00-.254-.073 4.385 4.385 0 01-.267-.08c-.817-.234-1.41-.53-1.784-.89-.373-.36-.56-.877-.56-1.553 0-.48.125-.892.375-1.236A2.22 2.22 0 014.665.565c.42-.166.903-.25 1.45-.25 1.153 0 2.03.298 2.631.892l-.557.756c-.199-.195-.468-.361-.808-.498-.36-.14-.744-.21-1.13-.205-.54 0-.97.107-1.293.322-.322.215-.483.53-.483.95 0 .28.038.503.114.667.076.164.215.307.416.428.201.12.505.246.911.375.165.05.331.097.498.14.5.149.911.303 1.233.463.323.16.582.345.777.554.195.21.332.439.41.689.078.25.117.55.117.902 0 .395-.075.745-.225 1.052-.15.306-.359.555-.624.747-.266.19-.57.336-.915.433-.366.1-.745.15-1.125.147-.636 0-1.206-.105-1.708-.314-.5-.21-.868-.424-1.098-.647l.498-.81c.25.2.578.388.984.564.407.176.832.264 1.278.264z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="line-through_svg__clip0">
                            <path d="M0 0h12v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-btn-group">
              <button className="pt-btn-color-add">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextMenu;
