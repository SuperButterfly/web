import styles from './InstanceForm.module.css'
import { useState } from 'react'

const InstanceForm = ({ close, types }) => {
  const zones = [
    'Paris 1',
    'Paris 2',
    'Paris 3',
    'Amsterdam 1',
    'Amsterdam 2',
    'Warsaw 1',
    'Warsaw 2'
  ]

  const [volume, setVolume] = useState(10)

  const [instanceData, setInstanceData] = useState({
    zone: '',
    instance_type: '',
    quantity: '',
    volumeType: '',
    volumeSze: '',
    image: ''
  })

  const handleVolume = (e) => {
    const { value } = e.target
    if (value === 'less') setVolume(volume - 5)
    if (value === 'more') setVolume(volume + 5)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform any additional validation or data manipulation if needed

    // Send the instanceData to the server or perform any other action
    console.log(instanceData)

    // Close the form
    close()
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <header className={styles.header}>
          <h2>Get an instance</h2>
          <button onClick={close}>X</button>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Availability Zone</label>
              <select
                id="zone"
                onChange={(e) =>
                  setInstanceData({ ...instanceData, zone: e.target.value })
                }
                className={styles.select}
                defaultValue=""
              >
                {zones?.map((zone, idx) => (
                  <option key={idx} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Instance Type</label>
              <select
                id="instanceType"
                onChange={(e) =>
                  setInstanceData({
                    ...instanceData,
                    instance_type: e.target.value
                  })
                }
                className={styles.select}
                defaultValue=""
              >
                {types?.map((group) => {
                  return group.instances.map((instance, idx) => (
                    <option key={idx} value={instance.type}>
                      {instance.type}
                    </option>
                  ))
                })}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Quantity</label>
              <button className={styles.measureBtn}>-</button>
              <span className={styles.value}></span>
              <button>+</button>
            </div>

            <div className={styles.controllers}>
               <label className={styles.label}>Volume size GB</label>
            <div className={styles.btns}>
              <button className={styles.measureBtn} onClick={handleVolume} value='less'>
                -
              </button>
              <span className={styles.volume}>{volume}</span>
              <button className={styles.measureBtn} onClick={handleVolume} value='more'>
                +
              </button>
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default InstanceForm
