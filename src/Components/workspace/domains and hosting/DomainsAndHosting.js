import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import styles from './DomainsAndHosting.module.css';

const Domains_and_hosting = () => {
  const { resultantDomains } = useSelector(state => state.domains);
  return (
    <div>
      <div>
        <h2>Customize your domain</h2>
        <h4>Check availability</h4>
        <SearchBar/>
         {resultantDomains && resultantDomains.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {resultantDomains.map((domain, idx) => (
              <tr key={idx}>
                <td>{domain.domain}</td>
                <td>{domain.available ? 'Available' : 'Not Available'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No resultant domains found.</p>
      )}
      </div>
    </div>
  );
};

export default Domains_and_hosting;
