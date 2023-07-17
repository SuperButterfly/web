import styles from './Table.module.css'

const Table = ({ columns, data }) => {
  const visibleColumns = columns

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {visibleColumns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((instance, index) => (
          <tr key={index}>
            {visibleColumns.map((column) => (
              <td key={column}>{instance[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
