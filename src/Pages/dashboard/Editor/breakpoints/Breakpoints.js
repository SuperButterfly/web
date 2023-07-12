/* globla localStorage */
import { useState, useEffect } from 'react'
import './breakpoints.css'
import { useDispatch, useSelector } from 'react-redux'
import { setBreakpoints } from '../../../../../src/redux/slices/breakpointsSlices.js'
import { setGuides } from '../../../../redux/slices/workspaceSlices'

const Breakpoints = ({ isBreakOn, closeBreak }) => {
  const dispatch = useDispatch()
  const { breakpoints } = useSelector((state) => state.breakpoints)
  const [isChecked, setIsChecked] = useState([])
  const guideLines = useSelector((state) => state.workspace.guides)
  const [isDefault, setIsDefault] = useState(5)

  const [mobile, setMobile] = useState(479)
  const [mobileLandscape, setMobileLandscape] = useState(762)
  const [tablet, setTablet] = useState(991)
  const [laptop, setLaptop] = useState(1200)
  const [desktop, setDesktop] = useState(1600)
  const [wide, setWide] = useState(1920)

  const startDrag = (e, setValue, getValue, minLimit, maxLimit) => {
    const initialX = e.clientX

    const handleDrag = (e) => {
      const deltaX = e.clientX - initialX
      let newValue = getValue() + deltaX
      newValue = Math.max(minLimit, Math.min(maxLimit, newValue))
      setValue(newValue)
    }

    const handleDragEnd = () => {
      document.removeEventListener('pointermove', handleDrag)
      document.removeEventListener('pointerup', handleDragEnd)
    }

    document.addEventListener('pointermove', handleDrag)
    document.addEventListener('pointerup', handleDragEnd)
  }

  const handleInputChange = (e, setValue) => {
    const newValue = parseInt(e.target.value)
    if (!isNaN(newValue)) {
      setValue(newValue)
    }
  }

  const handleonClick = (n) => {
    const aux = [...isChecked]
    aux[n] = !isChecked[n]
    setIsChecked(aux)
    const last = [...aux].reverse().findIndex((value) => value === true)
    setIsDefault(5 - last)
  }

  const handleApply = (ev) => {
    ev.preventDefault()
    dispatch(setBreakpoints(isChecked))
    closeBreak(false)
  }

  const handleCancel = (ev) => {
    ev.preventDefault()
    const aux = [...breakpoints]
    setIsChecked(aux)
    const last = [...aux].reverse().findIndex((value) => value === true)
    setIsDefault(5 - last)
    closeBreak(false)
  }

  useEffect(() => {
    const savedData = window.localStorage.getItem('myData')
    const booleanValues =
      savedData &&
      savedData.split(',').map((value) => value.toLowerCase() === 'true')
    if (savedData) {
      setIsChecked(booleanValues)
    }
  }, [])

  useEffect(() => {
    // Guardar datos en el localStorage al cambiar 'data'
    window.localStorage.setItem('myData', isChecked)
  }, [isChecked])

  console.log('break', guideLines)

  const handleStateToggle = () => {
    const newValue = !guideLines
    dispatch(setGuides(newValue))
  }

  if (isBreakOn) {
    return (
      <div className="breakpoints-container">
        <div className="breakpoints-container01">
          <span>Breakpoints settings</span>
          <button
            className="breakpoints-button"
            onClick={() => closeBreak(false)}
          >
            x
          </button>
        </div>
        <div className="breakpoints-container02">
          <div className="breakpoints-container03">
            <div
              onClick={(e) => handleonClick(0)}
              className="breakpoints-textinput"
            >
              {isChecked[0] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[0]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Mobile</span>
          </div>
          <div className="breakpoints-container04">
            {isChecked[0] && (
              <svg
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(e, setMobile, () => mobile, 320, 762)
                }
                viewBox="0 0 1024 1024"
                className="breakpoints-icon"
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              <input
                style={{ width: '35px', background: 'none' }}
                value={mobile}
                onChange={(e) => handleInputChange(e, setMobile)}
              />{' '}
              px
            </span>
          </div>
        </div>

        <div className="breakpoints-container05">
          <div className="breakpoints-container06">
            <div
              className="breakpoints-textinput1"
              onClick={(e) => handleonClick(1)}
            >
              {isChecked[1] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[1]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Mobile landscape</span>
          </div>
          <div className="breakpoints-container07">
            {isChecked[1] && (
              <svg
                viewBox="0 0 1024 1024"
                className="breakpoints-icon02"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(
                    e,
                    setMobileLandscape,
                    () => mobileLandscape,
                    484,
                    986
                  )
                }
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              <input
                style={{ width: '35px', background: 'none' }}
                value={mobileLandscape}
                onChange={(e) => handleInputChange(e, setMobileLandscape)}
              />{' '}
              px
            </span>
          </div>
        </div>
        <div className="breakpoints-container08">
          <div className="breakpoints-container09">
            <div
              className="breakpoints-textinput2"
              onClick={(e) => handleonClick(2)}
            >
              {isChecked[2] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[2]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Tablet</span>
            {isDefault === 2 && (
              <span className="breakpoints-text10"> - default</span>
            )}
          </div>
          <div className="breakpoints-container10">
            {isChecked[2] && (
              <svg
                viewBox="0 0 1024 1024"
                className="breakpoints-icon04"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(e, setTablet, () => tablet, 772, 1195)
                }
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              {' '}
              <input
                style={{ width: '35px', background: 'none' }}
                value={tablet}
                onChange={(e) => handleInputChange(e, setTablet)}
              />{' '}
              px
            </span>
          </div>
        </div>
        <div className="breakpoints-container11">
          <div className="breakpoints-container12">
            <div
              className="breakpoints-textinput3"
              onClick={(e) => handleonClick(3)}
            >
              {isChecked[3] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[3]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Laptop</span>
            {isDefault === 3 && (
              <span className="breakpoints-text10"> - default</span>
            )}
          </div>
          <div className="breakpoints-container13">
            {isChecked[3] && (
              <svg
                viewBox="0 0 1024 1024"
                className="breakpoints-icon06"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(e, setLaptop, () => laptop, 996, 1564)
                }
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              {' '}
              <input
                style={{ width: '35px', background: 'none' }}
                value={laptop}
                onChange={(e) => handleInputChange(e, setLaptop)}
              />{' '}
              px
            </span>
          </div>
        </div>
        <div className="breakpoints-container14">
          <div className="breakpoints-container15">
            <div
              className="breakpoints-textinput4"
              onClick={(e) => handleonClick(4)}
            >
              {isChecked[4] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[4]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Desktop</span>
            {isDefault === 4 && (
              <span className="breakpoints-text10"> - default</span>
            )}
          </div>
          <div className="breakpoints-container16">
            {isChecked[4] && (
              <svg
                viewBox="0 0 1024 1024"
                className="breakpoints-icon08"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(e, setDesktop, () => desktop, 1205, 1915)
                }
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              {' '}
              <input
                style={{ width: '35px', background: 'none' }}
                value={desktop}
                onChange={(e) => handleInputChange(e, setDesktop)}
              />{' '}
              px
            </span>
          </div>
        </div>
        <div className="breakpoints-container17">
          <div className="breakpoints-container18">
            <div
              className="breakpoints-textinput5"
              onClick={(e) => handleonClick(5)}
            >
              {isChecked[5] && (
                <svg
                  viewBox="0 0 1024 1024"
                  className="breakpoints-ok-icon"
                  style={
                    isChecked[5]
                      ? { backgrondColor: '#f0f0f0' }
                      : { backgrondColor: 'transparent' }
                  }
                >
                  <path d="M397.434 917.696l-397.868-391.6 197.378-194.27 200.49 197.332 429.62-422.852 197.378 194.27-626.998 617.12zM107.912 526.096l289.524 284.962 518.656-510.482-89.036-87.632-429.62 422.852-200.49-197.334-89.034 87.634z"></path>
                </svg>
              )}
            </div>
            <span>Wide</span>
            {isDefault === 5 && (
              <span className="breakpoints-text10"> - default</span>
            )}
          </div>
          <div className="breakpoints-container19">
            {isChecked[5] && (
              <svg
                viewBox="0 0 1024 1024"
                className="breakpoints-icon10"
                style={{ cursor: 'ew-resize' }}
                onPointerDown={(e) =>
                  startDrag(e, setWide, () => wide, 1605, 3200)
                }
              >
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            )}
            <span>
              {' '}
              <input
                style={{ width: '35px', background: 'none' }}
                value={wide}
                onChange={(e) => handleInputChange(e, setWide)}
              />{' '}
              px
            </span>
          </div>
        </div>

        <div className="breakpoints-container20">
          <br />
          <label className="pt-switch-bk">
            <span className="label-text">
              Show breakpoints lines
              <div className="toggle-bk">
                <input
                  type="checkbox"
                  className="checkbox-bk"
                  checked={guideLines}
                  onChange={handleStateToggle}
                />
                <span className="slider-bk"></span>
              </div>
            </span>
          </label>
        </div>

        <div className="breakpoints-container23">
          <button className="breakpoints-button1" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="breakpoints-button2"
            onClick={handleApply}
            disabled={isChecked === breakpoints}
          >
            Apply
          </button>
        </div>
      </div>
    )
  } else return null
}

export default Breakpoints
