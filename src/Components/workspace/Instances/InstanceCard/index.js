import styles from './InstanceCard.module.css'

const InstanceCard = ({ id, img, name, project, price, size }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="logo" className={styles.img} />
        <span className={styles.text}>
          <b>ID:</b>
          <br /> {id}
        </span>
        <span className={styles.text}>
          <b>Name:</b>
          <br /> {name}
        </span>
        <span className={styles.text}>
          <b>Size:</b>
          <br /> {size}
        </span>
        <span className={styles.text}>
          <b>Price:</b>
          <br /> {price}
        </span>
        <span className={styles.text}>
          <b>Project:</b>
          <br /> {project}
        </span>
      </div>
    </>
  )
}

export default InstanceCard
