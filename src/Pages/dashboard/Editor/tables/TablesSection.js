import './tablessection.css';

const TablesSection = ({selected, change}) => {
  
  return (
    <div className="tables-section-container">
      <span 
        className="tables-section-text"
        style={!selected ? {borderColor:"transparent"} : {borderColor:"#5ca9fd"}}
        onClick={()=> change(true)}
      >Owns</span>
      <span 
        className="tables-section-text1"
        style={!selected ? {borderColor:"#5ca9fd"} : {borderColor:"transparent"}}
        onClick={()=> change(false)}
      >Samples</span>
    </div>
  );
};

export default TablesSection;