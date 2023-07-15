import { useState } from 'react'
import styles from './TabBar.module.css'
import plus from '../../../../../assets/mas.svg'
import cruzCerrar from '../../../../../assets/cruzCerrar.svg'
import menuburguer from '../../../../../assets/menuburguer.svg'

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tabla 1' },
    { id: 2, title: 'Tabla 2' },
    { id: 3, title: 'Tabla 3' }
  ])
  const [editingTab, setEditingTab] = useState(null)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const handleTabDoubleClick = (tab) => {
    setEditingTab(tab.id)
  }

  const handleTabBlur = () => {
    setEditingTab(null)
  }

  const handleTabTitleChange = (event, tab) => {
    const updatedTabs = tabs.map((t) => {
      if (t.id === tab.id) {
        return { ...t, title: event.target.value }
      }
      return t
    })
    setTabs(updatedTabs)
  }

  const handleAddTab = () => {
    const newTab = { id: Date.now(), title: `Tabla ${tabs.length + 1}` }
    setTabs([...tabs, newTab])
    setActiveTab(tabs.length)
    setEditingTab(newTab.id)
  }

  const handleDeleteTab = (tab) => {
    const updatedTabs = tabs.filter((t) => t.id !== tab.id)
    setTabs(updatedTabs)
    setEditingTab(null)
    if (activeTab >= updatedTabs.length) {
      setActiveTab(updatedTabs.length - 1)
    }
  }

  return (
    <div className={styles.tabBar}>
      <div className={styles.tabList}>
        <img
          className={styles.addTab}
          onClick={handleAddTab}
          src={plus}
          alt="plus"
        />
        <img className={styles.addTab} src={menuburguer} alt="menuburguer" />

        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${
              index === activeTab ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick(index)}
            onDoubleClick={() => handleTabDoubleClick(tab)}
          >
            {editingTab === tab.id ? (
              <input
                className={styles.inputTitle}
                type="text"
                value={tab.title}
                onChange={(event) => handleTabTitleChange(event, tab)}
                onBlur={handleTabBlur}
                autoFocus
              />
            ) : (
              tab.title
            )}
            {editingTab !== tab.id && tabs.length > 1 && (
              <img
                className={styles.deleteTab}
                onClick={() => handleDeleteTab(tab)}
                src={cruzCerrar}
                alt="cruzCerrar"
              />
            )}
          </div>
        ))}
      </div>
      {/* <div className={styles.tabContent}>
        {/* Contenido de la pestaña activa }
        {tabs[activeTab] && (
          <div className={styles.tabContentInner}>
            <p>{tabs[activeTab].title}</p>
            {/* Aquí puedes colocar el contenido de la tabla }
          </div>
        )}
      </div> */}
    </div>
  )
}

export default TabBar
