import { useState } from 'react'
import data from '../layout.json'
// import "../SizeCss/SizeToken.css";
import CreateLayout from './CreateLayout'
import LayoutToken from './LayoutToken'

const SizeGroup = () => {
  const sizeData = data.categories.find((category) => category.name === 'Size')

  const [estru, setEstru] = useState(false)

  const handleCreate = () => {
    const valueOf = estru
    setEstru(!valueOf)
  }

  return (
    <div className="pt-stack-group">
      {sizeData.tokens.map((token, tokenIdx) => (
        <LayoutToken key={tokenIdx} name={token.name} px={token.size} />
      ))}
      <button onClick={handleCreate} className="pt-bton">
        <div className="pt-iconx ">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="#363636"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a.5.5 0 00-1 0v3H3a.5.5 0 000 1h3v3a.5.5 0 001 0V7h3a.5.5 0 000-1H7V3z"></path>
          </svg>
        </div>
      </button>
      {estru && <CreateLayout />}
    </div>
  )
}

export default SizeGroup
