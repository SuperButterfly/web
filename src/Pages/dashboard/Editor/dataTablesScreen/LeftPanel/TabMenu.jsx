import styles from './leftPanel.module.css';

const TabMenu = ({selected, change}) => {
  
  return (
    <div className={styles.elementsSectionContainer}>
      <span 
        className={styles.elementsSectionText}
        style={!selected ? {borderColor:"transparent"} : {borderColor:"#5ca9fd"}}
        onClick={()=> change(true)}
      >Version History</span>
      <span 
        className={styles.elementsSectionText}
        style={!selected ? {borderColor:"#5ca9fd"} : {borderColor:"transparent"}}
        onClick={()=> change(false)}
      >Advanced</span>
    </div>
  );
};

export default TabMenu;