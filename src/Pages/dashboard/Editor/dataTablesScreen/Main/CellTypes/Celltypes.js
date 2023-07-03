import styles from './Celltypes.module.css'

export default function Celltypes (type, commonProps, data, rowIndex, columnIndex, handleCellValueChange, handlePopUp) {
    switch(type) {
        case 'priority':
            return(
                <select 
                    {...commonProps} 
                    onChange= {(e) => handleCellValueChange(rowIndex, columnIndex, e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            );
        case 'state':
            return (
                <select 
                    {...commonProps} 
                    onChange= {(e) => handleCellValueChange(rowIndex, columnIndex, e.target.value)}
                >
                    <option value="unstarted">Unstarted</option>
                    <option value="in progress">In Progress</option>
                    <option value="complete">Complete</option>
                </select>
            );
        case 'number':
            return(
                <input
                    {...commonProps}
                    type='number'
                    onChange= {(e) => handleCellValueChange(rowIndex, columnIndex, e.target.value)}
                />            
            );
        case 'text':
            return(
                <input
                    {...commonProps}
                    type='text'
                    onChange= {(e) => handleCellValueChange(rowIndex, columnIndex, e.target.value)}
                />            
            );
        case 'date':
            return(
                <input
                    {...commonProps}
                    type='date'
                    onChange= {(e) => handleCellValueChange(rowIndex, columnIndex, e.target.value)}
                />            
            );
        case 'checkbox':
            return(
                <input 
                    {...commonProps}
                    type = "checkbox" 
                    onChange = {() => handleCellValueChange(rowIndex, columnIndex, !data[rowIndex][columnIndex].value )}
                    checked =  {data[rowIndex][columnIndex].value}
                />
            );
        case 'dropdownMenu':
            return(
                <button 
                    name={`PopupRow${rowIndex}`} 
                    type='button' 
                    className={styles.button}
                    onClick={(event) => handlePopUp(event)}
                >
                    Add
                </button>
            )
        default:
            break;
    }
}
