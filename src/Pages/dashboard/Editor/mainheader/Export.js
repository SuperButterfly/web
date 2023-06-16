import { useState } from 'react';
import { generateZipReact, generateZipVue, generateZipNext, generateZipNuxt, generateZipAngular, generateZipHtml } from './utilExport.js'
import "./Export.css";

const Export = ({ fileContent, componentName, closeExport }) => {
  
  const [language, setLanguage] = useState('')
  
  const handleClick = (value) => {
    setLanguage(value);
  };
  
 const handleExport = (language) => {
  switch (language) {
    case 'react':
      generateZipReact(fileContent, componentName, language);
      break;
    case 'vue':
      generateZipVue(fileContent, componentName, language);
      break;
    case 'angular':
      generateZipAngular(fileContent, componentName, language);
      break;
    case 'next':
      generateZipNext(fileContent, componentName, language);
      break;
    case 'nuxt':
      generateZipNuxt(fileContent, componentName, language);
      break;
    case 'html':
      generateZipHtml(fileContent, componentName, language);
      break;
    default:
      console.log('Lenguaje no compatible');
  }
  closeExport();
};
  return (
    <div className="panel-dropdown" style={{ display: "block" }}>
      <div className="section">
        <div className="section-header">
          <p className="heading">Export Project</p>
        </div>
        <div className=" options-row">
          <button
            data-tooltip-name="React"
            data-selected="true"
            className=" project-button"
            data-value="react"
            onClick={ () => handleClick('react') }
          >
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export">
                <svg
                  id="project-react_svg__Layer_2_1_"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 28.1 25"
                >
                  <path
                    className="project-react_svg__st0"
                    d="M28.1 12.5c0-1.9-2.3-3.6-5.9-4.7.8-3.7.4-6.5-1.2-7.5-.4-.2-.8-.3-1.3-.3-1.6 0-3.6 1.1-5.7 3.1-2.1-1.9-4.1-3-5.7-3-.5-.1-.9 0-1.3.2-1.6 1-2 3.9-1.1 7.5C2.3 8.9 0 10.6 0 12.5c0 1.9 2.3 3.6 5.9 4.7-.8 3.6-.5 6.5 1.2 7.5.3.2.8.3 1.2.3 1.6 0 3.6-1.1 5.7-3.1 2.1 1.9 4.1 3 5.7 3 .5 0 .9-.1 1.3-.3 1.6-.9 2-3.8 1.1-7.4 3.7-1.1 6-2.8 6-4.7zM19.7 1.3c.3 0 .5.1.7.2.8.4 1.1 2.1.9 4.3-.1.5-.2 1.1-.3 1.7-1.1-.3-2.3-.5-3.6-.6-.8-1.1-1.6-2-2.4-2.9 1.8-1.8 3.5-2.7 4.7-2.7zM9 15.4c.3.5.5.9.8 1.3-.8-.1-1.6-.3-2.3-.5.2-.7.5-1.5.8-2.3.2.6.4 1.1.7 1.5zM7.4 8.7c.8-.2 1.6-.3 2.4-.5-.3.5-.6.9-.8 1.4-.3.4-.5.9-.8 1.4-.3-.8-.6-1.6-.8-2.3zm1.5 3.8c.4-.8.8-1.5 1.2-2.3.4-.8.9-1.5 1.4-2.2.8 0 1.7-.1 2.5-.1.9 0 1.7 0 2.6.1.5.7.9 1.4 1.4 2.2.4.7.8 1.5 1.2 2.3-.4.8-.8 1.5-1.2 2.3-.4.8-.9 1.5-1.4 2.2-.9.1-1.7.1-2.6.1-.9 0-1.7 0-2.6-.1-.5-.7-.9-1.4-1.4-2.2-.4-.8-.8-1.5-1.1-2.3zm10.2 2.9c.3-.5.5-.9.7-1.4.3.8.6 1.5.8 2.3-.7.2-1.5.3-2.4.5.4-.5.6-.9.9-1.4zm0-5.8c-.3-.5-.5-.9-.8-1.3.8.1 1.6.3 2.3.5-.2.7-.5 1.5-.8 2.3-.2-.6-.4-1.1-.7-1.5zm-3.5-2.9h-3.2C13 6 13.5 5.4 14 4.9c.6.5 1.1 1.1 1.6 1.8zM7.7 1.5c.1-.1.3-.2.6-.2 1.2 0 2.9.9 4.8 2.7-.8.8-1.6 1.8-2.4 2.9-1.2.1-2.5.3-3.6.6-.1-.6-.2-1.2-.3-1.7-.3-2.2.1-3.9.9-4.3zM6.2 16c-.6-.2-1.1-.4-1.6-.6-2-.9-3.3-2-3.3-2.9 0-.9 1.3-2 3.3-2.9.5-.2 1-.4 1.6-.6.3 1.1.8 2.3 1.3 3.5-.5 1.2-1 2.4-1.3 3.5zm2.1 7.7c-.3 0-.5-.1-.6-.2-.8-.4-1.1-2.1-.9-4.3.1-.5.2-1.1.3-1.7 1.1.3 2.3.5 3.6.6.8 1.1 1.6 2 2.4 2.9-1.8 1.8-3.6 2.7-4.8 2.7zm5.7-3.6c-.5-.5-1.1-1.2-1.6-1.8h3.2c-.5.7-1 1.3-1.6 1.8zm6.4 3.5c-.2.1-.4.1-.7.1-1.2 0-2.9-.9-4.8-2.7.8-.8 1.6-1.8 2.4-2.9 1.3-.1 2.5-.3 3.6-.6.1.6.2 1.1.3 1.7.3 2.2 0 3.9-.8 4.4zm3.1-8.2c-.5.2-1 .4-1.6.6-.3-1.1-.8-2.3-1.3-3.5.5-1.2.9-2.4 1.3-3.5.6.2 1.1.4 1.6.6 2 .9 3.3 2 3.3 2.9 0 .9-1.3 2-3.3 2.9z"
                  ></path>
                  <circle
                    className="project-react_svg__st0"
                    cx="14"
                    cy="12.5"
                    r="2.6"
                  ></circle>
                </svg>
              </div>
            </span>
            <span className=" framework-title">React</span>
          </button>
          <button
            data-tooltip-name="Next"
            data-selected="false"
            className=" project-button"
            onClick={ () => handleClick('next') }
          >
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export ">
                <svg
                  width="34"
                  viewBox="0 0 39 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.086 6.52h7.263v.622H9.752v4.675h6.204v.621H9.752v5.133h6.673v.622H9.086V6.52zm7.914 0h.772l3.42 5.133 3.495-5.133L29.44 0l-7.81 12.193 4.024 6h-.802l-3.662-5.46-3.676 5.46h-.787l4.055-6L17 6.52zm8.943.622V6.52h8.276v.622h-3.813v11.05h-.666V7.142h-3.797zM0 6.52h.832L12.308 25l-4.742-6.807-6.87-10.79-.03 10.79H0V6.52zm34.153 10.864c-.137 0-.239-.114-.239-.26 0-.147.102-.26.238-.26.138 0 .238.113.238.26 0 .146-.1.26-.238.26zm.653-.684h.357c.005.208.146.347.353.347.232 0 .363-.15.363-.43v-1.78h.362v1.78c0 .507-.272.799-.722.799-.422 0-.712-.283-.712-.716zm1.91-.023h.36c.03.24.247.391.56.391.29 0 .505-.162.505-.386 0-.191-.136-.307-.446-.385l-.3-.078c-.423-.107-.616-.327-.616-.697 0-.448.34-.747.85-.747.474 0 .821.299.842.723h-.353c-.034-.232-.222-.377-.494-.377-.287 0-.478.148-.478.375 0 .18.123.283.428.36l.257.068c.48.12.677.33.677.708 0 .481-.347.784-.9.784-.518 0-.867-.289-.892-.739z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
            </span>
            <span className=" framework-title">Next</span>
          </button>
        </div>
        <div className=" options-row">
          <button
            data-tooltip-name="Vue"
            data-selected="false"
            className=" project-button"
            onClick={ () => handleClick('vue') }
          >
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export">
                <svg
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.188 0h5.797L14.493 25 0 0h11.087l3.406 5.797L17.826 0h5.362z"
                    fill="#41B883"
                  ></path>
                  <path
                    d="M5.725 0l8.768 15.072L23.188 0h-5.362l-3.333 5.797L11.087 0H5.725z"
                    fill="#35495E"
                  ></path>
                </svg>
              </div>
            </span>
            <span className=" framework-title">Vue</span>
          </button>
          <button
            data-tooltip-name="Nuxt"
            data-selected="false"
            className=" project-button"
            onClick={ () => handleClick('nuxt') }
          >
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export">
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.848 24.172l.083-.083c.165-.33.165-.662.165-.993h7.864L19.206 2.236l-4.885 8.857-1.572-1.16 4.884-8.857C17.715.911 18.295 0 19.288 0c.414 0 1.076.166 1.573 1.076L32.7 22.186c.083.165.58 1.158.083 1.986-.166.414-.662.828-1.739.828H21.11c1.076 0 1.572-.414 1.738-.828z"
                    fill="#00C58E"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M.331 22.269l9.52-17.136c.166-.166.662-1.076 1.656-1.076.414 0 .993.165 1.573 1.076L14.32 7.12v3.973L11.507 6.21 2.07 23.096h3.56c-.05.34.008.688.165.994v.082C6.29 25 7.368 25 7.533 25H1.904c-.165 0-1.242 0-1.738-.828C0 23.76-.165 23.096.33 22.27z"
                    fill="#108775"
                  ></path>
                  <path
                    d="M5.546 24.172v-.083l-.082-.165c-.083-.249-.166-.58-.083-.828l.33-.91 7.451-13.08 1.076-1.987h.083l1.076 1.987 7.533 13.08.249.91c.061.367.003.744-.166 1.076-.248.414-.745.828-1.738.828H7.368c-.249 0-1.325 0-1.822-.828zm8.775-13.08l-6.87 12.004h13.658l-6.788-12.003z"
                    fill="#2F495E"
                  ></path>
                </svg>
              </div>
            </span>
            <span className=" framework-title">Nuxt</span>
          </button>
        </div>
        <div className=" options-row">
          <button
            data-tooltip-name="Angular"
            data-selected="false"
            className=" project-button"
            onClick={ () => handleClick('angular') }
          >
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.6 25">
                  <path
                    d="M0 4.1L11.6 0l11.9 4.1-1.9 15.4-10 5.5-9.9-5.5L0 4.1z"
                    fill="#e23237"
                  ></path>
                  <path
                    d="M23.6 4.1L11.6 0v25l10-5.5 2-15.4z"
                    fill="#b52e31"
                  ></path>
                  <path
                    d="M11.6 2.9L4.4 19h2.7l1.5-3.6h6.5l1.6 3.7h2.6L11.6 2.9zm.1 5.2l2.4 5.1H9.5l2.2-5.1z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
            </span>
            <span className=" framework-title">Angular</span>
          </button>
          <button
            data-tooltip-name="HTML - experimental"
            data-selected="false"
            className=" project-button"
            onClick={ () => handleClick('html') }
          >
            <span className=" experimental-icon">
              <div className="jsx-166566546 pt-icon experiment ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 19">
                  <path
                    fill-rule="evenodd"
                    d="M7.5.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 3a1 1 0 100-2 1 1 0 000 2zM3.3 5.93c0-.24.2-.43.43-.43h3.54c.24 0 .43.2.43.43v.43c-.5.02-.9.44-.9.95v2.18c0 .15.02.3.07.46l.39 1.2-3.76.73.63-1.93c.05-.15.07-.3.07-.46V7.3c0-.51-.4-.93-.9-.95v-.43zm-2.23 11.8c-.2-.34-.26-.77-.12-1.2l.77-2.4 1.46-4.5a.5.5 0 00.02-.14V7.36a.95.95 0 01-.9-.95v-.48c0-.79.64-1.43 1.43-1.43h3.54c.79 0 1.43.64 1.43 1.43v.48c0 .5-.4.92-.9.95v2.13c0 .05 0 .1.02.15l1.16 3.56 1.07 3.34c.14.43.08.86-.12 1.2L10 18h-.26c-.27.3-.66.5-1.11.5H2.37c-.45 0-.84-.2-1.11-.5H1l.07-.26z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
            <span className=" framework-icon-container">
              <div className=" pt-icon-code-export">
                <svg
                  width="29"
                  height="32"
                  viewBox="0 0 29 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#project-html_svg__clip0)">
                    <path
                      d="M2.61 28.816L.047.046h28.178L25.662 28.8 14.112 32"
                      fill="#E44D26"
                    ></path>
                    <path
                      d="M14.136 29.553V2.408h11.518L23.456 26.95"
                      fill="#F16529"
                    ></path>
                    <path
                      d="M5.281 5.926h8.855v3.526H9.149l.327 3.612h4.66v3.519H6.245L5.28 5.926zM6.4 18.354h3.542l.248 2.819 3.946 1.056v3.682l-7.239-2.02"
                      fill="#EBEBEB"
                    ></path>
                    <path
                      d="M22.96 5.926h-8.84v3.526h8.513l.326-3.526zm-.646 7.138H14.12v3.526h4.35l-.412 4.583-3.938 1.056v3.666l7.224-2.004"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="project-html_svg__clip0">
                      <path fill="#fff" d="M0 0h28.272v32H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </span>
            <span className=" framework-title">HTML</span>
          </button>
        </div>
      </div>

      <div className="section-b">
        <span className="jsx-1980303426">Continue on</span>
        <div className="pt-inline" style={{ alignItems: "center" }}>
          <button
            data-tooltip-name="Continue on CodeSandbox"
            aria-label="Continue on CodeSandbox"
            className="pt-btn-transparent"
          >
            <div className="jsx-588734808 pt-icon codesandbox ">
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.373 21.19v-8.653l-7.44-4.281v4.932l3.408 1.976v3.709l4.032 2.316zm1.933.05l4.107-2.366v-3.797l3.43-1.988V8.22l-7.537 4.352v8.669zm6.546-14.68L13.89 4.264l-3.478 2.018-3.505-2.02L2.91 6.588l7.46 4.292 7.482-4.32zM0 18.034V6.046L10.387 0l10.39 6.02v11.995L10.386 24 0 18.034z"></path>
              </svg>
            </div>
          </button>

          <span className="separator"></span>
          <a
            data-tooltip-name="No GitHub token set in project settings"
            aria-label="No GitHub token set in project settings"
            className="jsx-3535535137 jsx-2273940791 pt-btn transparent"
            href="/projects/far-off-crafty-squirrel-7iondt/settings/integrations?focus=github"
          >
            <div className="jsx-588734808 pt-icon social/github ">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.39 6.126a12.102 12.102 0 00-4.367-4.476C16.185.55 14.177 0 12 0 9.823 0 7.815.55 5.977 1.65a12.1 12.1 0 00-4.368 4.476C.536 8.011 0 10.07 0 12.3c0 2.68.763 5.091 2.289 7.232 1.526 2.14 3.497 3.622 5.914 4.444.281.054.49.016.625-.112a.634.634 0 00.203-.48l-.008-.865a159.56 159.56 0 01-.008-1.425l-.36.064a4.47 4.47 0 01-.866.056 6.449 6.449 0 01-1.086-.112 2.398 2.398 0 01-1.047-.48 2.03 2.03 0 01-.688-.985l-.156-.369a4.02 4.02 0 00-.492-.817c-.224-.299-.45-.501-.68-.608l-.109-.08a1.159 1.159 0 01-.203-.193.883.883 0 01-.14-.224c-.032-.075-.006-.136.078-.185.083-.048.234-.071.453-.071l.312.048c.208.042.466.17.773.384.308.214.56.491.758.833.24.438.529.771.867 1 .339.23.68.345 1.024.345.343 0 .64-.027.89-.08.25-.053.485-.133.703-.24.094-.716.35-1.266.766-1.65a10.465 10.465 0 01-1.602-.288 6.293 6.293 0 01-1.468-.625 4.233 4.233 0 01-1.258-1.073c-.333-.427-.607-.988-.82-1.682-.214-.694-.32-1.495-.32-2.402 0-1.293.411-2.392 1.234-3.3-.386-.972-.35-2.06.11-3.267.301-.096.75-.024 1.343.216.594.24 1.029.446 1.305.617.276.17.497.315.664.432a10.84 10.84 0 013-.416c1.03 0 2.031.139 3 .416l.594-.384a8.319 8.319 0 011.437-.705c.552-.213.974-.272 1.266-.176.469 1.207.51 2.296.125 3.267.823.908 1.234 2.008 1.234 3.3 0 .907-.107 1.71-.32 2.41-.213.7-.49 1.26-.828 1.682-.338.422-.76.777-1.266 1.065a6.301 6.301 0 01-1.469.625c-.473.128-1.007.224-1.6.288.54.48.811 1.239.811 2.274v3.38c0 .192.066.352.196.48s.336.165.617.112c2.417-.822 4.388-2.304 5.914-4.445C23.237 17.391 24 14.981 24 12.3c0-2.231-.537-4.289-1.61-6.174z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <hr className="dividder" />

      <div className="section-b">
        <span className="jsx-1980303426">Export Code as</span>
        <div className="pt-inline" style={{ alignItems: "center" }}>
          <span
            data-uidl-action="true"
            className="jsx-1980303426"
            style={{ display: " none" }}
          >
            <button
              data-tooltip-name="Download Project UIDL"
              aria-label="Download Project UIDL"
              className="pt-btn-transparent"
            >
              <div className="jsx-588734808 pt-icon download ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2a.5.5 0 01.5.5v8.793l3.313-3.313a.5.5 0 11.707.707l-4.166 4.167a.5.5 0 01-.708 0L5.48 8.687a.5.5 0 01.707-.707L9.5 11.293V2.5A.5.5 0 0110 2zM2.5 12a.5.5 0 01.5.5v1c0 .708 0 1.21.032 1.601.032.386.092.622.186.807a2 2 0 00.874.874c.185.094.42.154.807.186C5.29 17 5.792 17 6.5 17h7c.708 0 1.21 0 1.601-.032.386-.032.622-.092.807-.186a2 2 0 00.874-.874c.094-.185.154-.42.186-.807C17 14.71 17 14.208 17 13.5v-1a.5.5 0 011 0v1.022c0 .681 0 1.223-.036 1.66-.036.448-.113.83-.291 1.18a3 3 0 01-1.311 1.311c-.35.178-.731.255-1.18.291-.437.036-.979.036-1.66.036H6.478c-.681 0-1.223 0-1.66-.036-.449-.036-.83-.113-1.18-.291a3 3 0 01-1.311-1.311c-.178-.35-.255-.731-.291-1.18C2 14.746 2 14.204 2 13.523V12.5a.5.5 0 01.5-.5z"
                  ></path>
                </svg>
              </div>
            </button>
          </span>
          <button
            data-tooltip-name="Download Project ZIP"
            aria-label="Download Project ZIP"
            className="pt-btn-transparent"
            onClick={ () => handleExport(language) }
          >
            <div className="jsx-588734808 pt-icon zip ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23 11.5h-4.3V7.9c0-.5-.2-1.1-.6-1.4l-6-5.9c-.4-.4-.9-.6-1.4-.6H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h14.7c1.1 0 2-.9 2-2v-1.5H23c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5zM17.7 22c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h8.7v6c0 .6.4 1 1 1h6v3.5H7c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h10.7V22zm5.8-3c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5h16c.3 0 .5.2.5.5v6z"></path>
                <path d="M18.4 13.7H17V18h.9v-1.5h.4c.5 0 .9-.1 1.2-.4.3-.2.4-.6.4-1.1 0-.4-.1-.8-.4-1-.2-.2-.6-.3-1.1-.3zm.4 1.9c-.1.1-.3.2-.6.2h-.3v-1.3h.4c.2 0 .4.1.5.2.1.1.2.3.2.5 0 .1 0 .3-.2.4zM14.3 14.3v-.6h-3.1v.8h2l-2.1 2.9v.6h3.2v-.8h-2.1zM15 13.7h.9V18H15z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
