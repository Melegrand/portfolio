import './index.scss';
import mouse from '../../img/mouse.png';

const Presentation = ({className}) => {

    return (
        <div className={'presentation ' + className}>
            <h1 className='presentation__name'>Mélody Legrand</h1>
            <h2 className='presentation__title'>Développeuse web fullstack spécialisée en accessibilité numérique</h2>
            <img className='presentation__mouse' src={mouse}/>
        </div>
    );
}

export default Presentation;