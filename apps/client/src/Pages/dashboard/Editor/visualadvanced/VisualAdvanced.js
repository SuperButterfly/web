import './visualadvanced.css'

const VisualAdvanced = ({ selected, change }) => {
  return (
    <div className="visual-advanced-container">
      <span
        className="visual-advanced-text"
        style={
          selected ? { borderColor: 'transparent' } : { borderColor: '#5ca9fd' }
        }
        onClick={() => change(false)}
      >
        Visual
      </span>
      <span
        className="visual-advanced-text1"
        style={
          selected ? { borderColor: '#5ca9fd' } : { borderColor: 'transparent' }
        }
        onClick={() => change(true)}
      >
        Advanced
      </span>
    </div>
  )
}

export default VisualAdvanced
