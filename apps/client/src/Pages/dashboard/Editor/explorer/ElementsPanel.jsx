import './elementspanel.css'
import { useState } from 'react'
import ElementsSection from './ElementsSection'
import Elements from './Elements'
import Sections from './Sections'

const ElementsPanel = ({ controls }) => {
  const [isElementsSelected, setIsElementsSelected] = useState(true)

  return (
    <div className="elements-panel-container">
      <ElementsSection
        selected={isElementsSelected}
        change={setIsElementsSelected}
      />

      {isElementsSelected && <Elements />}
      {!isElementsSelected && <Sections controls={controls} />}
    </div>
  )
}

export default ElementsPanel
