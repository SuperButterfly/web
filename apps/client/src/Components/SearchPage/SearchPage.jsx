import { useState } from "react";
import style from "./SearchPage.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import {IoReturnDownBack} from"react-icons/io5";
import {PiArrowsDownUpBold} from "react-icons/pi"

const SearchPage = () => {
  const [input, setInput] = useState("");
  
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={style.container}>
      <div className={style.search}>
        <AiOutlineSearch className={style.icoSearch} />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Go to..."
        />
      </div>

      {/* options  */}
    <div className={style.options}>
        <div className={style.option1}>
            <PiArrowsDownUpBold  className={style.ico}/>
          <p>Navigate</p>
          <IoReturnDownBack className={style.ico}/>
          <p>Go</p>
        </div>

        {/* options 2 */}
        <div className={style.option2}>
          <p>Open on</p>
        
          <button className={style.icoClt}><p>Ctl-f</p></button>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
         
        </div>
    </div>
    </div>
  );
};

export default SearchPage;
