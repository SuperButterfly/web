import './elementssection.css'

const ElementsSection = ({ selected, change }) => {
  return (
    <div className="elements-section-container">
      <span
        className={`${!selected ? "not-selected" : "selected" } elements-section-text1`}
        style={
          !selected
            ? { borderColor: 'transparent' }
            : { borderColor: '#5ca9fd' }
        }
        onClick={() => change(true)}
      >
        Elements
      </span>
      <span
        className={`${selected ? "not-selected" : "selected" } elements-section-text1`}
        style={
          !selected
            ? { borderColor: '#5ca9fd' }
            : { borderColor: 'transparent' }
        }
        onClick={() => change(false)}
      >
        Section
      </span>
    </div>
  )
}

export default ElementsSection
