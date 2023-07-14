import styles from './Instances.module.css'
import SearchBar from '../../Shared/SearchBar'
import InstanceCard from './InstanceCard'
import Table from '../../Shared/Table'
import { useState } from 'react'
import {
  INSTANCES,
  LER_INS,
  CO_PLAY_INS,
  DEV_INS,
  GPU_INS,
  STARDUST_INS,
  ENT_INS,
  POP_INS
} from './testData'

const instanceOptions = [
  { label: 'Local Elastic Restore', value: LER_INS },
  { label: 'Cost-Optimized - PLAY2/PRO2', value: CO_PLAY_INS },
  { label: 'Cost-Optimized DEV1/GP1', value: DEV_INS },
  { label: 'GPU', value: GPU_INS },
  { label: 'Stardust', value: STARDUST_INS },
  { label: 'Enterprise', value: ENT_INS },
  { label: 'Production-Optimized', value: POP_INS }
]

const Instances = () => {
  const [filteredInstances, setFilteredInstances] = useState(INSTANCES)
  const [columnsData, setColumnsData] = useState(instanceOptions[0].value)
  const [hasInstances, setHasInstances] = useState(false)

  const handleColumnsData = (value) => {
    const selectedOption = instanceOptions.find(
      (option) => option.label === value
    ) 
    if (selectedOption) {
      setColumnsData(selectedOption.value)
    } else {
      setColumnsData([])
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredInstances(INSTANCES)
    } else {
      const filtered = INSTANCES.filter((instance) => {
        return (
          instance.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          instance.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      setFilteredInstances(filtered)
    }
  }

  const columns = [
    'Name',
    'vCPUs',
    'RAM',
    'Disks',
    'Bandwidth',
    'Price',
    'Shop'
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Workspace instances</h2>
      </header>
      {!hasInstances ? (
        <section className={styles.pricing}>
          <h2>This workspace has no instances yet. Check the type of instances available below.</h2>
          <select
            id="instanceType"
            onChange={(e) => handleColumnsData(e.target.value)}
            className={styles.select}
            defaultValue="Local Elastic Restore"
          >
            {instanceOptions.map((option, idx) => (
              <option key={idx} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
          {columnsData && <Table columns={columns} data={columnsData} />}
        </section>
      ) : (
        <>
          <section>
            <h2 className={styles.title}>
              {filteredInstances.length > 0
                ? 'Instances list'
                : 'Create a new instance for your project'}
            </h2>
            <div className={styles.filterContainer}>
              <SearchBar
                handleSearch={handleSearch}
                placeholder="Search instance by ID or name"
              />
              {filteredInstances?.length !== INSTANCES.length && (
                <button
                  onClick={() => setFilteredInstances(INSTANCES)}
                  className={styles.filtersOff}
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Interface / Filter_Off">
                      <path
                        id="Vector"
                        d="M13 4H18.4C18.9601 4 19.2409 4 19.4548 4.10899C19.6429 4.20487 19.7948 4.35774 19.8906 4.5459C19.9996 4.75981 20 5.04005 20 5.6001V6.3448C20 6.58444 20 6.70551 19.9727 6.81942C19.9482 6.92146 19.9072 7.01893 19.8524 7.1084C19.7906 7.20931 19.7043 7.2958 19.5314 7.46875L18 9.00012M7.49961 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7083C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9809 14.1475 12.8915C14.2091 12.7909 14.2952 12.7048 14.4669 12.5331L14.4688 12.5314L15.5001 11.5001M15.5001 11.5001L5 1M15.5001 11.5001L19 15"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              )}
            </div>
          </section>
          <main className={styles.cardsContainer}>
            {filteredInstances.map((instance, key) => (
              <InstanceCard
                key={key}
                id={instance.id}
                name={instance.name}
                project={instance.project}
                price={instance.price}
                img={instance.logo}
                size={instance.size}
              />
            ))}
          </main>
        </>
      )}
    </div>
  )
}

export default Instances
