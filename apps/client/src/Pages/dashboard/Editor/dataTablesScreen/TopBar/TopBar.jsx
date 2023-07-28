import { useState } from 'react'
import styles from './TopBar.module.css'
import Dropdown from '../Dropdown/Dropdown'
import { setVersions } from '../../../../../redux/slices/datatableSlices'
import { useDispatch } from 'react-redux'
import { versionHistory } from '../../../../../store'
import { v4 as uuidv4 } from 'uuid'

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

  const dispatch = useDispatch()

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

  const handleAddVersion = () => {
    const tmpDate = new Date()
    const tmpId = uuidv4()

    // se crea una version
    const newVersion = {
      id: tmpId,
      name: tmpId,
      description: 'Descripción...',
      date: tmpDate,
      time: tmpDate.toISOString().substring(11, 19),
      author: 'anonimo',
      data: versionHistory.getCurrent()
    }

    //se pushea dentro del estado global versions
    dispatch(setVersions(newVersion))
    console.log('AGREGADO..')
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
      <div className={styles.divConnection} onClick={handleList}>
        <button className={styles.buttonConnection}>
          <span>Estado de conexion</span>
          <img
            className={styles.ddArrows}
            src={`${list ? ArrowDown : ArrowRight}`}
            alt="arrows"
          />
        </button>
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
      </div>
      <button className={styles.buttons} onClick={handleAddVersion}>
        Guardar version
      </button>

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
