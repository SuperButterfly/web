import styles from './Instances.module.css';
import SearchBar from '../../Shared/SearchBar';
import logoInst from './logoInst.png';
import InstanceCard from './InstanceCard';

const handleSearch = () => {

}

const INSTANCES = [
    {
        name: 'wwww.espacio-de-prueba.com',
        id: '9abdfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
    {
        name: 'wwww.espacio-de-prueba.com',
        id: '9abdfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
    {
        name: 'wwww.espacio-de-prueba.com',
        id: '9abdfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
    {
        name: 'wwww.espacio-de-prueba.com',
        id: '9abdfe43sdefg78',
        size: '10GB',
        price: '14.00€/month',
        logo: logoInst,
        project: 'Espacio de prueba',
    },
]

const Instances = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>{true ? 'Instances list' : 'Create a new instance for your project'}</h2>
                <SearchBar handleSearch={handleSearch}/>
            </header>

            <main className={styles.cardsContainer}>
            {
                INSTANCES.length && INSTANCES.map((instance, key) => {
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
                })
            }
            </main>
        </div>
    )
}

export default Instances;