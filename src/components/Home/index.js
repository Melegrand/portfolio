import Right from '../Right';
import Left from '../Left';
import './index.scss';
const Home = ({getLocation, location, handleChangeLocation}) => {
    document.title = 'Accueil | Mélody Legrand'

    return (
        <section className="home">
            <Left/>
            <Right getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
        </section>
    );
}

export default Home;