import Header from "../Header";
import './index.scss';
import Presentation from "../Presentation";

const Right = ({getLocation, location, handleChangeLocation}) => {

    return (
        <section className="right">
            <Header getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
            <Presentation className=""/>
        </section>
    );
}

export default Right;