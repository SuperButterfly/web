
import './color-group.css';
import { useState } from 'react';
import ColorToken from './ColorToken';
import ColorMenu from './ColorMenu';

const ColorGroup = ({ ColorGroup }) => {

  const [open, setOpen] = useState(false);

  const handleMenu = (option) => {
    console.log('handleMenu: ', option)
    setOpen(!open);
  };

  return (
    <div className="color-group-color-group">
      <div className="color-group-container">
        <h3 className="color-group-text">{ColorGroup.name}</h3>
        <svg viewBox="0 0 1024 1024" className="color-group-icon"
          onClick={handleMenu}
        >
          <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
        </svg>
        {open && <ColorMenu handleMenu={handleMenu} />}
      </div>
      <div className="color-group-container1">
        {
          ColorGroup.tokens.map(({ name, color }, index) => (
            <ColorToken name={name} color={color} />
          ))
        }
        <div className="color-group-container2">
          <svg viewBox="0 0 1024 1024" className="color-group-icon2">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ColorGroup;
