import './index.scss';
import photo from '../../img/photo.png';
import Presentation from '../Presentation';
const Left = () => {

    return (
        <section className="left">
            <section className="left__polygon"></section>
            <div className='left__container'>
                <img className='left__container__photo' src={photo} alt=""/>
            </div>
            <Presentation className='mobil'/>
        </section>
    );
}

export default Left;