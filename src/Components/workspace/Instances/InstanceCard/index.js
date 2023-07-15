import styles from './InstanceCard.module.css'

const InstanceCard = ({ id, img, name, project, price, size, update }) => {
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
        <span className={styles.text}>
          <b>Manage:</b>
          <br />
          <button onClick={update} className={styles.edit}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M21.6677 4.38308L26.5222 9.14065C26.7267 9.34108 26.7267 9.6681 26.5222 9.86853L14.7681 21.388L9.77361 21.9312C9.10625 22.0051 8.54115 21.4513 8.61649 20.7972L9.17083 15.9025L20.925 4.38308C21.1295 4.18265 21.4632 4.18265 21.6677 4.38308ZM30.3865 3.17523L27.7601 0.601289C26.942 -0.20043 25.6127 -0.20043 24.7892 0.601289L22.884 2.46845C22.6795 2.66888 22.6795 2.9959 22.884 3.19633L27.7385 7.9539C27.9431 8.15433 28.2767 8.15433 28.4813 7.9539L30.3865 6.08674C31.2045 5.27974 31.2045 3.97695 30.3865 3.17523ZM20.6667 18.2549V23.6243H3.44444V6.74604H15.8122C15.9844 6.74604 16.1458 6.67748 16.2696 6.56144L18.4224 4.45165C18.8314 4.05079 18.5408 3.37039 17.9649 3.37039H2.58333C1.15712 3.37039 0 4.5044 0 5.90213V24.4683C0 25.866 1.15712 27 2.58333 27H21.5278C22.954 27 24.1111 25.866 24.1111 24.4683V16.1451C24.1111 15.5808 23.4168 15.3012 23.0078 15.6968L20.855 17.8066C20.7366 17.9279 20.6667 18.0862 20.6667 18.2549Z"
                fill="#828282"
              />
            </svg>
          </button>
        </span>
      </div>
    </>
  )
}

export default InstanceCard
