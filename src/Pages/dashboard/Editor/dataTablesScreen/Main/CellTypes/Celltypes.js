import styles from './Celltypes.module.css'

function getDropdownCell(data, rowIndex, columnIndex) {
  const selectedLabels = data[rowIndex][columnIndex].value;
  const labels = [];

  if (!selectedLabels.length)
    return(
      <span className={styles.emptyDropdownCell}>
        +
      </span>
    )
  

  for (let i = 0; i < selectedLabels.length; i++) {
    const elem = (i !== 2) ? selectedLabels[i] : `+${selectedLabels.length - 2}`;
    
    labels.push(
      <span className={styles.selectedLabels} key={i}>
        {elem}
      </span>
    );
    
    if (i === 2) {
      break;
    }
  }
  return labels;
}

export default function Celltypes(
  type,
  commonProps,
  data,
  rowIndex,
  columnIndex,
  handleCellValueChange,
  handlePopUp
) {
  switch (type) {
    case 'priority':
      return (
        <select
          {...commonProps}
          onChange={(e) =>
            handleCellValueChange(rowIndex, columnIndex, e.target.value)
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      )
    case 'state':
      return (
        <select
          {...commonProps}
          onChange={(e) =>
            handleCellValueChange(rowIndex, columnIndex, e.target.value)
          }
        >
          <option value="unstarted">Unstarted</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      )
    case 'number':
      return (
        <input
          {...commonProps}
          type="number"
          onChange={(e) =>
            handleCellValueChange(rowIndex, columnIndex, e.target.value)
          }
        />
      )
    case 'text':
      return (
        <input
          {...commonProps}
          type="text"
          onChange={(e) =>
            handleCellValueChange(rowIndex, columnIndex, e.target.value)
          }
        />
      )
    case 'date':
      return (
        <input
          {...commonProps}
          type="date"
          onChange={(e) =>
            handleCellValueChange(rowIndex, columnIndex, e.target.value)
          }
        />
      )
    case 'checkbox':
      return (
        <input
          {...commonProps}
          type="checkbox"
          onChange={() =>
            handleCellValueChange(
              rowIndex,
              columnIndex,
              !data[rowIndex][columnIndex].value
            )
          }
          checked={data[rowIndex][columnIndex].value}
        />
      )
    case 'dropdownMenu':
      return (
        <button
          name={`addButton${rowIndex}${columnIndex}`}
          type="button"
          className={styles.button}
          onClick={(event) => handlePopUp(event, rowIndex, columnIndex)}
        >
          {getDropdownCell(data, rowIndex, columnIndex)}
        </button>
      )
    default:
      break
  }
}
