import './cost.css'
import 'toolcool-range-slider'
const Main = () => {
  const handleChange = (evt) => {
    console.log(evt.detail.value)
    console.log('f')
  }

  return (
    <div style={{ width: '100%' }}>
      <div className="container">
        <div className="price ml-4 mt-4">
          <div className="card mb-4 card-price">
            <div className="card-body ml-4">
              <h5 className="card-title">Price per key</h5>
              <div className="d-flex">
                <label className="switch mt-1">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label>
                <label className="ml-2">Frozen project</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle-fill ml-2 mt-1"
                  viewBox="0 0 16 16"
                >
                  {' '}
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />{' '}
                </svg>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body ml-4">
              <div className="d-flex">
                <h5 className="card-title text-light">UNLIMITED</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card simulate ml-4 mr-4 mt-4">
          <div className="card-body ml-4">
            <h5 className="card-title">Simulate your cost</h5>
            <h4 className="text-light">DRAG THE SLIDERS</h4>
            <p>
              <div id="value-1" className="value"></div>keys to translate
            </p>
            <toolcool-range-slider
              id="slider-1"
              change={handleChange}
              min="0"
              max="5000"
              slider-width="95%"
              slider-height="0.75rem"
              pointer-width="25px"
              pointer-height="25px"
              pointer-bg="#2150A2"
              step="1"
            ></toolcool-range-slider>
            <p>target languages</p>
            <toolcool-range-slider
              min="0"
              max="10"
              slider-width="95%"
              slider-height="0.75rem"
              pointer-width="25px"
              pointer-height="25px"
              pointer-bg="#2150A2"
              pointer-bg-hover="#2150A2"
              step="1"
            ></toolcool-range-slider>
            <h4 className="text-light">OR JUST PICK AN EXAMPLE</h4>
            <div className="example">
              <div className="card-min">
                <div className="card-body ml-4">
                  <div className="d-flex">
                    <h6 className="card-title">Website</h6>
                  </div>
                </div>
              </div>
              <div className="card-min ml-4">
                <div className="card-body ml-4">
                  <div className="d-flex">
                    <h6 className="card-title">Website</h6>
                  </div>
                </div>
              </div>
              <div className="card-min ml-4">
                <div className="card-body ml-4">
                  <div className="d-flex">
                    <h6 className="card-title">Website</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
