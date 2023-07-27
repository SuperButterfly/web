
import style from "./options.module.css";
import { FiSliders } from "react-icons/fi";

const Option2 = ({ id, deleteData ,options,handleoption}) => {
  const deleteLine = () => {
    deleteData (id);
    handleOptions("op2")
  };
  const handleOptions = () => {
    handleoption("op2");
  };

 
  return (
    <div>
      <FiSliders onClick={handleOptions} className={style.buttonIco}/>
      {options.option2 === true ? (
        <div className={style.options}>
          <div onClick={deleteLine}>
            <h2>Delete</h2>
          </div>
          <div>
            <h2>Color red</h2>
          </div>
          <div>
            <h2>Color blue</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Option2;
