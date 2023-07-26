import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loaderContent}>
      <div
        style={{
          animationName: 'spin',
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
        className={styles.circle}
      ></div>

      <div className={styles.loader}>
        <img
          src="https://res.cloudinary.com/deqxuoyrc/image/upload/v1685556235/Recurso_1_jikyyy.svg"
          alt="Loader"
          style={{ width: '20vh' }}
        />
      </div>
    </div>
  )
}

export default Loader
