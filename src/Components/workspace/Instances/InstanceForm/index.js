import styles from './InstanceForm.module.css'
import { useState } from 'react'

const InstanceForm = () => {
  const zones = [
    'Paris 1',
    'Paris 2',
    'Paris 3',
    'Amsterdam 1',
    'Amsterdam 2',
    'Warsaw 1',
    'Warsaw 2'
  ]

  const [instanceData, setInstanceData] = useState({
    zone: '',
    instance_type: '',
    quantity: '',
    volume_type: '',
    volume_size: '',
    image: ''
  })

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <header>
          <button>X</button>
        </header>
        <main>
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
              {zones.map((option, idx) => (
                <option key={idx} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Volume Type</label>
            <select
              id="volumeType"
              onChange={(e) =>
                setInstanceData({
                  ...instanceData,
                  volume_type: e.target.value
                })
              }
              className={styles.select}
              defaultValue=""
            >
              {zones.map((option, idx) => (
                <option key={idx} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </main>
      </div>
    </div>
  )
}

export default InstanceForm
