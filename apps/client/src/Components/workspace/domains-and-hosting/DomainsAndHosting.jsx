import useDomainsAndHosting from './useDomainsAndHosting'
import SearchBar from '../../Shared/SearchBar'
import styles from './DomainsAndHosting.module.css'
import { useState } from 'react'

const DomainsAndHosting = () => {
  const [prueba, setPrueba] = useState(false)
  const {
    resultantDomains,
    loading,
    searchTerm,
    setSearchTerm,
    executeSearch,
    reset,
    handleSearch
  } = useDomainsAndHosting()
  console.log(resultantDomains[1])
  return (
    <div>
      <h2>Customize your domain</h2>
      <h4>Check availability</h4>
      {!prueba && (
        <>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <SearchBar
              handleSearch={handleSearch}
              placeholder="Search a domain"
              search={executeSearch}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <button className={styles.buttonReset} onClick={reset}>
              Reset
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Domain</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resultantDomains && resultantDomains.length > 0 ? (
                resultantDomains.map((domain, idx) => (
                  <tr key={idx}>
                    <td>{domain.domain}</td>
                    <td>{domain.available ? 'Available' : 'Not Available'}</td>
                    <td>
                      ${' '}
                      {domain.tld.offers.create?.price.units
                        ? domain.tld.offers.create?.price.units
                        : 0}{' '}
                      €
                    </td>
                    <td>
                      {domain.available ? (
                        <button onClick={() => setPrueba(true)}>
                          Register
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))
              ) : !loading ? (
                <tr>Busca un dominio</tr>
              ) : (
                <tr>Buscando dominio...</tr>
              )}
            </tbody>
          </table>
        </>
      )}
      {prueba && (
        <>
          <button
            onClick={() => setPrueba(false)}
            className={styles.buttonReset}
          >
            volver
          </button>
          <form
            action=""
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h4>Contact information</h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <input type="text" placeholder="First Name..." />
              <input type="text" placeholder="Last Name..." />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email address..."
              />
              <input type="text" name="" id="" placeholder="Phone..." />
            </div>
            <h4>Address</h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <input type="text" placeholder="Address..." />
              <input type="text" placeholder="City..." />
              <input type="text" placeholder="Postal Code..." />
              <select name="" id="">
                <option value="">Selecciona un pais</option>
                <option value="">Espana</option>
                <option value="">Espana</option>
                <option value="">Espana</option>
                <option value="">Espana</option>
                <option value="">Espana</option>
              </select>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default DomainsAndHosting
