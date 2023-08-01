import './pressets-main.css'

const PressetsMain = ({ selected, change }) => {
  return (
    <div className="pressets-main-container">
      <span
        className={`${
          selected !== 'color'
            ? 'not-selected-colors-text-layout'
            : 'selected-colors-text-layout'
        } pressets-main-span`}
        onClick={() => change('color')}
      >
        Color
      </span>
      <span
        className={`${
          selected !== 'text'
            ? 'not-selected-colors-text-layout'
            : 'selected-colors-text-layout'
        } pressets-main-span`}
        onClick={() => change('text')}
      >
        Text
      </span>
      <span
        className={`${
          selected !== 'layout'
            ? 'not-selected-colors-text-layout'
            : 'selected-colors-text-layout'
        } pressets-main-span`}
        onClick={() => change('layout')}
      >
        Layout
      </span>
    </div>
  )
}

export default PressetsMain
