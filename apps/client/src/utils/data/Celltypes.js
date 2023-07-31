import styles from './Celltypes.module.css'
//!BREAKPOINT
function getCellValue(type, data, rowIndex, columnIndex) {
  const selectedLabels = data[rowIndex][columnIndex].value;
  const labels = [];
  const limits = { dropdownMenu: 2, people: 2 }

  if (!selectedLabels.length)
    return (
      <span className={styles.emptyDropdownCell}>
        +
      </span>
    )

  for (let i = 0; i < selectedLabels.length; i++) {
    let elem = null;
    if (i !== limits[type]) {
      if (type === 'dropdownMenu')
        elem = selectedLabels[i]
      else elem = selectedLabels[i].slice(0, 2).toUpperCase()
    }
    else elem = `+${selectedLabels.length - limits[type]}`;

    labels.push(
      <span className={styles.selectedLabels} key={i}>
        {elem}
      </span>
    );

    if (i === limits[type]) {
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
    case 'priority': {
      //Los casos priority y state no necesitan onBlur
      const { onBlur, ...priorityProps } = commonProps;
      return (
        <select
          {...priorityProps}
          onChange={(e) =>
            handleCellValueChange(/* rowIndex, columnIndex,  */type, e.target.value)
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      )
    }
    case 'state': {
      const { onBlur, ...stateProps } = commonProps;
      return (
        <select
          {...stateProps}
          onChange={(e) =>
            handleCellValueChange(/* rowIndex, columnIndex,  */type, e.target.value)
          }
        >
          <option value="unstarted">Unstarted</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      )
    }
    case 'number':
      return (
        <input
          {...commonProps}
          type="number"
          onChange={(e) =>
            handleCellValueChange(/* rowIndex, columnIndex,  */type, e.target.value)
          }
        />
      )
    case 'text':
      return (
        <input
          {...commonProps}
          type="text"
          onChange={(e) =>
            handleCellValueChange(/* rowIndex, columnIndex,  */type, e.target.value)
          }
        />
      )
    case 'date':
      return (
        <input
          {...commonProps}
          type="date"
          onChange={(e) =>
            handleCellValueChange(/* rowIndex, columnIndex,  */type, e.target.value)
          }
        />
      )
    case 'checkbox':
      return (
        <label className={styles.materialCheckbox}>
          <input
            {...commonProps}
            type="checkbox"
            onChange={() =>
              handleCellValueChange(
                /* rowIndex,
                columnIndex, */
                type,
                !data[rowIndex][columnIndex].value
              )
            }
            checked={data[rowIndex][columnIndex].value}
          />
          <span className={styles.checkmark}></span>
        </label>
      )
    case 'dropdownMenu':
      return (
        <button
          name={`addButton${rowIndex}${columnIndex}`}
          type="button"
          className={styles.button}
          onClick={(event) => handlePopUp(type, event, rowIndex, columnIndex)}
        >
          {getCellValue(type, data, rowIndex, columnIndex)}
        </button>
      )
    case 'people':
      return (
        <button
          name={`addButton${rowIndex}${columnIndex}`}
          type="button"
          className={styles.button}
          onClick={(event) => handlePopUp(type, event, rowIndex, columnIndex)}
        >
          {getCellValue(type, data, rowIndex, columnIndex)}
        </button>
      )
    default:
      break
  }
}
