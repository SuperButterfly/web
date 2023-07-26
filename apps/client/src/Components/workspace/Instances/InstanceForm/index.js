import styles from './InstanceForm.module.css'
import { useState } from 'react'
import { postInstance } from '@/redux/actions/instances'
import { useDispatch } from 'react-redux'

const InstanceForm = ({ close, types }) => {
  const dispatch = useDispatch()
  const zones = [
    { label: 'Paris 1', value: 'fr-par-1' },
    { label: 'Paris 2', value: 'fr-par-2' },
    { label: 'Paris 3', value: 'fr-par-3' },
    { label: 'Amsterdam 1', value: 'nl-ams-1' },
    { label: 'Amsterdam 2', value: 'nl-ams-2' },
    { label: 'Warsaw 1', value: 'pl-waw-1' },
    { label: 'Warsaw 2', value: 'pl-waw-2' }
  ]

  const [volume, setVolume] = useState(10)

  const [instanceData, setInstanceData] = useState({
    name: '',
    zone: '',
    type: '',
    volumeSize: 10,
    image: ''
  })

  const handleVolume = (e) => {
    const { id } = e.target
    if (id === 'less') {
      setVolume(volume - 5)
      setInstanceData({
        ...instanceData,
        volumeSize: volume * 1024 * 1024 * 1024
      })
    }
    if (id === 'more') {
      setVolume(volume + 5)
      setInstanceData({
        ...instanceData,
        volumeSize: volume * 1024 * 1024 * 1024
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(instanceData)
    dispatch(postInstance(instanceData))
      .then((res) => alert(res))
      .catch((error) => alert(error.message))
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
              <label className={styles.label}>Instance name: </label>
              <input
                type="text"
                className={styles.input}
                onChange={(e) =>
                  setInstanceData({ ...instanceData, name: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Availability Zone</label>
              <select
                id="zone"
                onChange={(e) =>
                  setInstanceData({ ...instanceData, zone: e.target.value })
                }
                className={styles.select}
                defaultValue={zones[0].value}
              >
                {zones.map((zone, idx) => (
                  <option key={idx} value={zone.value}>
                    {zone.label}
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
                    type: e.target.value
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
              <label className={styles.label}>Image - Operative System</label>
              <select
                id="instanceType"
                onChange={(e) =>
                  setInstanceData({
                    ...instanceData,
                    type: e.target.value
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

            {/* <div className={styles.formGroup}>
              <label className={styles.label} type="button">
                Quantity
              </label>
              <button className={styles.measureBtn} type="button">
                -
              </button>
              <span className={styles.value}></span>
              <button>+</button>
            </div> */}

            <div className={styles.controllers}>
              <label className={styles.label}>Volume size GB</label>
              <div className={styles.btns}>
                <button
                  type="button"
                  className={styles.measureBtn}
                  onClick={handleVolume}
                  defaultValue="10"
                  id="less"
                >
                  -
                </button>
                <span className={styles.volume}>{volume}</span>
                <button
                  type="button"
                  className={styles.measureBtn}
                  onClick={handleVolume}
                  defaultValue="10"
                  id="more"
                >
                  +
                </button>
              </div>
            </div>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default InstanceForm
