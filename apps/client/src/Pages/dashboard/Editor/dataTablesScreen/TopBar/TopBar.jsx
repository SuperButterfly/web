import { useState } from 'react'
import styles from './TopBar.module.css'
import Dropdown from '../Dropdown/Dropdown'
import ArrowRight from '../../../../../assets/angle-right.svg'
import ArrowDown from '../../../../../assets/angle-down.svg'
import disconnectedCircle from '../../../../../assets/disconnectedCircle.svg'
import Ellipse from '../../../../../assets/Ellipse.svg'
import borrar from '../../../../../assets/borrar.svg'

const TopBar = ({ exportedFunctions }) => {
  const cleanNewColumn = {
    type: 'text',
    title: undefined,
    order: 'ASC',
    visible: true
  }

  const [newColumn, setNewColumn] = useState({ ...cleanNewColumn })
  const [list, setList] = useState(false)

  const addColumn = exportedFunctions.addColumn

  const handleCreateColumn = () => {
    addColumn(newColumn)
    setNewColumn(cleanNewColumn)
  }

  const handleList = () => {
    setList(!list)
  }

  return (
    <div className={styles.TopBar}>
      <button className={styles.buttons} onClick={exportedFunctions.redo}>
        Rehacer
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.undo}>
        Deshacer
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.clean}>
        Borrar todo
        <img className={styles.ddArrows} src={borrar} alt="borrar" />
      </button>
      <button className={styles.buttons} onClick={handleList}>
        <span>Estado de conexion</span>
        <img
          className={styles.ddArrows}
          src={`${list ? ArrowDown : ArrowRight}`}
          alt="arrows"
        />
        {list && (
          <ul className={styles.ulList}>
            <li className={styles.list} onClick={exportedFunctions.connect}>
              <img
                className={styles.iconsConection}
                src={Ellipse}
                alt="Ellipse"
              />
              Connect!
            </li>
            <li className={styles.list} onClick={exportedFunctions.disconnect}>
              <img
                className={styles.iconsConection}
                src={disconnectedCircle}
                alt="disconnectedCircle"
              />
              Disconnect!
            </li>
            <li className={styles.list}>Opcion 3</li>
          </ul>
        )}
      </button>
      <button
        className={styles.buttons}
        onClick={exportedFunctions.handleAddVersion}
      >
        Guardar version
      </button>
      <Dropdown
        title="Tipo"
        id="type"
        list={[
          { key: 'text', value: 'Text' },
          { key: 'number', value: 'Number' },
          { key: 'date', value: 'Date' },
          { key: 'priority', value: 'Priority' },
          { key: 'state', value: 'State' },
          { key: 'checkbox', value: 'Checkbox' },
          { key: 'dropdownMenu', value: 'Dropdown Menu' },
          { key: 'people', value: 'People' }
        ]}
        handler={handleCreateColumn}
      />
      <Dropdown
        title="Order"
        id="order"
        list={[
          { key: 'ASC', value: 'Ascendent' },
          { key: 'DESC', value: 'Descendent' }
        ]}
        handler={handleCreateColumn}
      />
      <Dropdown
        title="Visible"
        id="visible"
        list={[
          { key: true, value: 'Visible' },
          { key: false, value: 'Hidden' }
        ]}
        handler={handleCreateColumn}
      />
      {/* <button className={styles.buttons}>function1</button>
      <button className={styles.buttons}>function2</button>
      <button className={styles.buttons}>function3</button> */}
    </div>
  )
}

export default TopBar
