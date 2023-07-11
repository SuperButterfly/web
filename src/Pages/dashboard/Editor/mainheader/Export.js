import { useState } from 'react'
import {
  generateZipReact,
  generateZipVue,
  generateZipNext,
  generateZipNuxt,
  generateZipAngular,
  generateZipHtml,
  generateZipReactNative
} from './utilExport.js'
import './Export.css'
import React from '../../../../assets/svgs/React.js'
import Next from '../../../../assets/svgs/Next.js'
import Vue from '../../../../assets/svgs/Vue.js'
import Nuxt from '../../../../assets/svgs/Nuxt.js'
import Angular from '../../../../assets/svgs/Angular.js'
import Html from '../../../../assets/svgs/Html.js'
import Android from '../../../../assets/svgs/Android.js'
import Ios from '../../../../assets/svgs/Ios.js'
import Webxr from '../../../../assets/svgs/Webxr.js'
import Threejs from '../../../../assets/svgs/Threejs.js'
import Vr from '../../../../assets/svgs/Vr.js'

const Export = ({ fileContent, componentName, closeExport }) => {
  const [language, setLanguage] = useState('')

  const handleClick = (value) => {
    setLanguage(value)
  }

  const handleExport = (language) => {
    switch (language) {
      case 'react':
        generateZipReact(fileContent, componentName, language)
        break
      case 'vue':
        generateZipVue(fileContent, componentName, language)
        break
      case 'angular':
        generateZipAngular(fileContent, componentName, language)
        break
      case 'next':
        generateZipNext(fileContent, componentName, language)
        break
      case 'nuxt':
        generateZipNuxt(fileContent, componentName, language)
        break
      case 'html':
        generateZipHtml(fileContent, componentName, language)
        break
      case 'native':
        generateZipReactNative(fileContent, componentName, language)
        break
      // case "android":
      //   generateZipAndroid(fileContent, componentName, language);
      //   break;
      // case "ios":
      //   generateZipIos(fileContent, componentName, language);
      //   break;
      default:
        console.log('Lenguaje no compatible')
    }
    closeExport()
  }
  return (
    <>
      <div className={'closingDiv'} onClick={closeExport}></div>

      <div className="panel-dropdown" style={{ display: 'block' }}>
        <div className="section">
          <div className="section-header">
            <p className="heading">Export Project</p>
          </div>
          <div className="grid-container">
            <button
              className="project-button"
              data-tooltip-name="React"
              data-selected="true"
              data-value="react"
              onClick={() => handleClick('react')}
            >
              <React width={34} height={34} />
              React
            </button>
            <button
              className="project-button"
              data-tooltip-name="Next"
              data-selected="false"
              onClick={() => handleClick('next')}
            >
              <Next width={34} height={34} />
              Next
            </button>
            <button
              className="project-button"
              data-tooltip-name="Vue"
              data-selected="false"
              onClick={() => handleClick('vue')}
            >
              <Vue width={34} height={34} />
              Vue
            </button>
            <button
              className="project-button"
              data-tooltip-name="Nuxt"
              data-selected="false"
              onClick={() => handleClick('nuxt')}
            >
              <Nuxt width={34} height={34} />
              Nuxt
            </button>
            <button
              className="project-button"
              data-tooltip-name="Angular"
              data-selected="false"
              onClick={() => handleClick('angular')}
            >
              <Angular width={34} height={34} />
              Angular
            </button>
            <button
              className="project-button"
              data-tooltip-name="HTML - experimental"
              data-selected="false"
              onClick={() => handleClick('html')}
            >
              <Html width={34} height={34} />
              HTML
            </button>
            <button
              className="project-button"
              data-tooltip-name="React Native - experimental"
              data-selected="false"
              onClick={() => handleClick('native')}
            >
              <React width={34} height={34} />
              React Native
            </button>
            <button
              className="project-button"
              data-tooltip-name="Android - experimental"
              data-selected="false"
              onClick={() => handleClick('android')}
            >
              <Android width={34} height={34} />
              Android
            </button>
            <button
              className="project-button"
              data-tooltip-name="Ios - experimental"
              data-selected="false"
              onClick={() => handleClick('ios')}
            >
              <Ios width={34} height={34} />
              Ios
            </button>
            <button
              className="project-button"
              data-tooltip-name="Webxr - experimental"
              data-selected="false"
              onClick={() => handleClick('webxr')}
            >
              <Webxr />
              Webxr
            </button>
            <button
              className="project-button"
              data-tooltip-name="Three js - experimental"
              data-selected="false"
              onClick={() => handleClick('Threejs')}
            >
              <Threejs />
              Three js
            </button>
            <button
              className="project-button"
              data-tooltip-name="Vr - experimental"
              data-selected="false"
              onClick={() => handleClick('vr')}
            >
              <Vr />
              VR
            </button>
          </div>
        </div>

        <div className="section-b">
          <span className="jsx-1980303426">Continue on</span>
          <div className="pt-inline" style={{ alignItems: 'center' }}>
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
          <div className="pt-inline" style={{ alignItems: 'center' }}>
            <span
              data-uidl-action="true"
              className="jsx-1980303426"
              style={{ display: ' none' }}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
              onClick={() => handleExport(language)}
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
    </>
  )
}

export default Export
