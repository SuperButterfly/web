import './tables-container.css';
import { useState } from 'react';
import TablesSection from './TablesSection.js';
import Owns from './Owns.js';
import Samples from './Samples.js';
import { useNavigate } from 'react-router';

const TablesContainer = () => {
  
  const [isTablesSelected, setIsTablesSelected] = useState(true);
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
  <div className="tables-container-container">
    <TablesSection selected={isTablesSelected} change={setIsTablesSelected} />
    <button 
        type="button" 
        className="owns-button"
        onClick={handleClick}  
      >
        {isOpen ? 'close' : 'open'} data manager
      </button>
      
    {isTablesSelected && <Owns /> }
    {!isTablesSelected && <Samples /> }
  </div>
  );
};

export default TablesContainer;