import './property.css';

const Property = ({
  stateId,
  isCheked,
  propertyName,
  valueName,
  functionChange,
  addProperty,
  discardProperty,
  isLast
}) => {
  
  return (
    <div className="property-container">
      <div  className="property-input-container">
        <input 
          type="checkbox" 
          name={`${stateId}/isCheked`}
          className="property-checkinput"
          checked = {isCheked}
          style={isLast ? { display : 'none'} : { display : 'flex'}}
          onChange={functionChange}
        />
        <input
          type="text"
          name={`${stateId}/property`}
          placeholder="property"
          className="property-textinput"
          value={propertyName}
          onChange={functionChange}
          style={propertyName === '' || valueName === undefined ? {fontStyle: 'italic'} : {fontStyle: 'normal'}}
        />
        <input
          type="text"
          name={`${stateId}/value`}
          placeholder="value"
          className="property-textinput"
          value={valueName}
          onChange={functionChange}
          style={valueName === '' || valueName === undefined ? {fontStyle: 'italic'} : {fontStyle: 'normal'}}
        />
        <p 
          className="property-text"
          style={isLast ? { display : 'none'} : { display : 'flex'}}
        >;</p>
      </div>
      <div className="property-icons-container">
        <svg
          viewBox="0 0 1024 1024" 
          className="property-add-icon"
          style={isLast ? { display : 'flex'} : { display : 'none'}}
          onClick={addProperty}
        >
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      
        <button 
          className="property-button"
          style={isLast ? { display : 'none'} : { display : 'flex'}}
          onClick={(e) => discardProperty(stateId, e)}
        >
          <svg viewBox="0 0 1024 1024" className="property-discard-icon">
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Property;
