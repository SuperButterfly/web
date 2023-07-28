import styles from './InstanceForm.module.css'
import { useEffect, useState } from 'react'
import { postInstance } from '@/redux/actions/instances'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { getAvailableInstances } from '@/redux/actions/instances'
import { getImages } from '../../../../redux/actions/instances'

const InstanceForm = ({ close, types }) => {
  const dispatch = useDispatch()
  const { availableTypes, availableImages } = useSelector(
    (state) => state.instances
  )

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
    zone: zones[0].value,
    type: '',
    volumeSize: 10,
    image: ''
  })

  const handleVolume = (e) => {
    const { name } = e.target
    const updatedVolume = volume + (name === 'decrease' ? -5 : 5)
    setVolume(updatedVolume)

    setInstanceData({
      ...instanceData,
      volumeSize: updatedVolume * 1024 * 1024 * 1024
    })
  }

  const handleVolumeInput = (e) => {
    const inputVolume = parseInt(e.target.value, 10)
    if (!isNaN(inputVolume)) {
      setVolume(inputVolume)

      setInstanceData({
        ...instanceData,
        volumeSize: inputVolume * 1024 * 1024 * 1024
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postInstance(instanceData))
      .then((res) => alert(res))
      .catch((error) => alert(error.message))
    close()
  }

  useEffect(() => {
    dispatch(getAvailableInstances(instanceData.zone))
    dispatch(getImages(instanceData.zone))
  }, [dispatch, instanceData.zone])

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
              <label className={styles.label}>Available Types</label>
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
                {availableTypes?.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Image - Operative System</label>
              <select
                id="instanceType"
                onChange={(e) =>
                  setInstanceData({
                    ...instanceData,
                    image: e.target.value
                  })
                }
                className={styles.select}
                defaultValue=""
              >
                {availableImages?.map((image, idx) => (
                  <option key={idx} value={image.id}>
                    {image.name}
                  </option>
                ))}
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
              <label className={styles.label}>Volume size</label>
              <div className={styles.btns}>
                <button
                  type="button"
                  className={styles.measureBtn}
                  onClick={handleVolume}
                  defaultValue="10"
                  name="decrease"
                >
                  <AiOutlineMinus className={styles.icon} />
                </button>
                <input
                  className={styles.volume}
                  type="number"
                  value={volume}
                  onChange={handleVolumeInput}
                  min="10"
                  max="10000"
                />
                GB
                <button
                  type="button"
                  className={styles.measureBtn}
                  onClick={handleVolume}
                  defaultValue="10"
                  name="increase"
                >
                  <AiOutlinePlus className={styles.icon} />
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
