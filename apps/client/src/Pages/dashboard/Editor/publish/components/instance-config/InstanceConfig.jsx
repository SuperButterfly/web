import styles from './InstanceConfig.module.css'
import { useState } from 'react'

const InstanceConfig = ({ zone, serverConfig, blockStorageConfig, publicIPConfig }) => {
  const [costs, setCosts] = useState({
    server: serverConfig.cost,
    blockStorage: blockStorageConfig.cost,
    publicIP: publicIPConfig.cost,
    total: serverConfig.cost + blockStorageConfig.cost + publicIPConfig.cost
  })

  const handleCost = (e) => {
  const { value } = e.target

  if (value === 'month') {
    setCosts({
      server: serverConfig.cost * 24 * 30,
      blockStorage: blockStorageConfig.cost * 24 * 30,
      publicIP: publicIPConfig.cost * 24 * 30,
      total: (serverConfig.cost + blockStorageConfig.cost + publicIPConfig.cost) * 24 * 30
    });
  } else if (value === 'hour') {
    setCosts({
      server: serverConfig.cost,
      blockStorage: blockStorageConfig.cost,
      publicIP: publicIPConfig.cost,
      total: serverConfig.cost + blockStorageConfig.cost + publicIPConfig.cost
    })
  }
}


return (
     <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.whiteHeader} colSpan={2}></th>
            <th className={styles.blueHeader}>1</th>
            <th className={styles.blueHeader}>
              <select onChange={handleCost}>
                <option value='hour'>Hour</option>
                <option value='month'>Month</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.whiteColumn} ${styles.firstColumn}`}>Availability zone</td>
            <td className={styles.whiteColumn}>{zone}</td>
            <td className={styles.blueColumn}></td>
            <td className={styles.blueColumn}>$0.00</td>
          </tr>
          <tr>
            <td className={`${styles.whiteColumn} ${styles.firstColumn}`}>Server</td>
            <td className={styles.whiteColumn}>{serverConfig.type}</td>
            <td className={styles.blueColumn}></td>
            <td className={styles.blueColumn}>{costs.server}</td>
          </tr>
          <tr>
            <td className={`${styles.whiteColumn} ${styles.firstColumn}`}>Image</td>
            <td className={styles.whiteColumn}>{serverConfig.image}</td>
            <td className={styles.blueColumn}></td>
            <td className={styles.blueColumn}>$0.00</td>
          </tr>
          <tr>
            <td className={`${styles.whiteColumn} ${styles.firstColumn}`}>Block Storage</td>
            <td className={styles.whiteColumn}>{blockStorageConfig.size}</td>
            <td className={styles.blueColumn}></td>
            <td className={styles.blueColumn}>{costs.blockStorage}</td>
          </tr>
          <tr>
            <td className={`${styles.whiteColumn} ${styles.firstColumn}`}>Public IP</td>
            <td className={styles.whiteColumn}>{publicIPConfig.hasFlexibleIP ? 'Yes' : 'No'}</td>
            <td className={styles.blueColumn}>&nbsp;</td>
            <td className={styles.blueColumn}>{costs.publicIP}</td>
          </tr>
          <tr>
            <td className={styles.whiteColumn} colSpan={2}></td>
            <td className={styles.darkBlueRow}></td>
            <td className={styles.darkBlueRow}>{costs.total}</td>
          </tr>
        </tbody>
      </table>
      <button className={styles.createBtn}>Create instance</button>
    </div>
  )
}

export default InstanceConfig
