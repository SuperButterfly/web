import './owns.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Owns = () => {
  
  const [isOpen , setIsOpen] = useState(false);
  let navigate = useNavigate();
  
  const handleClick = ev => {
    ev.preventDefault();
    const id = window.localStorage.getItem('projectid');
    if(isOpen) {
      navigate(`../Editor/${id}`);
    }
    else navigate(`../Editor/database`);
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="owns-container">
      
      <div className="owns-container1">
        <span>una tabla de usuario va aquí</span>
      </div>
      <div className="owns-container2">
        <span>una tabla de usuario va aquí</span>
      </div>
    </div>
  );
};

export default Owns;
