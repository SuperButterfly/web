import styles from './Instances.module.css';
import SearchBar from '../../Shared/SearchBar';
import logoInst from './logoInst.png';
import InstanceCard from './InstanceCard';

const handleSearch = (searchTerm) => {
  const filteredInstances = INSTANCES.filter((instance) => {
    return instance.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instance.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return filteredInstances;
};

const INSTANCES = [
    {
        name: 'www.web-model-kkk-tt.com',
        id: '3rtkfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Web model',
    },
    {
        name: 'www.another-project-tt.com',
        id: '4fgcfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Another project',
    },
    {
        name: 'www.espacio-de-prueba.com',
        id: '3rtkfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
    {
        name: 'www.espacio-de-prueba.com',
        id: '3rtkfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
];

const Instances = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>{true ? 'Instances list' : 'Create a new instance for your project'}</h2>
                <SearchBar handleSearch={handleSearch} placeholder='Search instance by ID or name'/>
            </header>

            <main className={styles.cardsContainer}>
            {
                INSTANCES.length && INSTANCES.map((instance, key) => {
                    if (handleSearch(instance.id) || handleSearch(instance.name)) {
                        return (
                            <InstanceCard
                                key={key}
                                id={instance.id}
                                name={instance.name}
                                project={instance.project}
                                price={instance.price}
                                img={instance.logo}
                                size={instance.size}
                            />
                        )
                    }
                })
            }
            </main>
        </div>
    )
}

export default Instances;