import { useState } from "react";

import data from "../layout.json";

import CreateLayout from "./CreateLayout";
import LayoutToken from "./LayoutToken";

const SpaceGroup = () => {
  const spaceData = data.categories.find(
    (category) => category.name === "Space"
  );
  console.log(spaceData);
  const [estru, setEstru] = useState(false);

  const handleCreate = () => {
    const valueOf = estru;
    setEstru(!valueOf);
  };

  return (
    <>
      {spaceData.tokens.map((token, tokenIdx) => (
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
    </>
  );
};

export default SpaceGroup;
