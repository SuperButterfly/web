import './pressets-main.css'

const PressetsMain = ({ selected, change }) => {
  return (
    <div className="pressets-main-container">
      <div
        className="pressets-heading-container" /* "pressets-main-container1" */
      >
        <span
        className={`${selected !== 'color' ? "not-selected" : "selected" } pressets-main-span`}
        style={
            selected === 'color'
              ? { borderColor: '#5ca9fd' }
              : { borderColor: 'transparent' }
          }
          onClick={() => change('color')}
        >
          Color
        </span>
        <span
        className={`${selected !== 'text' ? "not-selected" : "selected" } pressets-main-span`}
        style={
            selected === 'text'
              ? { borderColor: '#5ca9fd' }
              : { borderColor: 'transparent' }
          }
          onClick={() => change('text')}
        >
          Text
        </span>
        <span
        className={`${selected !== 'layout' ? "not-selected" : "selected" } pressets-main-span`}
        style={
            selected === 'layout'
              ? { borderColor: '#5ca9fd' }
              : { borderColor: 'transparent' }
          }
          onClick={() => change('layout')}
        >
          Layout
        </span>
      </div>
    </div>
  )
}

export default PressetsMain
