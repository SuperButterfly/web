import styles from './popsubmenuitem.module.css'

function PopsubmenuItem({ label, hadleClick, shortcut }) {
  return (
    <div
      className={`${styles['popmenu-submenu-item']} ${styles.item}`}
      onClick={hadleClick}
      name={label}
    >
      {/* <svg
        viewBox="0 0 1024 1024"
        className={styles['popmenu-submenu-item-icon']}
      >
        <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
      </svg> */}
      <span>{label}</span>
      <span>{shortcut}</span>
    </div>
  )
}

export default PopsubmenuItem
