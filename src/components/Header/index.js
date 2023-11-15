import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import email from './email.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';
const Header = ({getLocation, location, handleChangeLocation}) => {
    const [menuIsExpanded, setMenuIsExpanded] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    function getScreenSize() {
        let screenSize = window.innerWidth;
        if (screenSize > 1250) {
            setMenuIsExpanded(false)
            setIsOpen(false);
        }
    }

    function burgerClic (){
        menuIsExpanded ? setMenuIsExpanded(false) : setMenuIsExpanded(true)
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    window.addEventListener('resize', getScreenSize)

    useEffect(() => {
        getLocation()
        handleChangeLocation()
      }, []);

    return (
        <>
        <Link to="#main" className="evitement">Passer directement au contenu principal</Link>
        <nav role="navigation" aria-label="Menu principal" className="navigation">
            <button id="icon" className={`icon ${isOpen ? 'is-opened' : 'is-closed'} navigation__container__burger`} onClick={burgerClic}>
                <svg className="svg" x="0" y="0" width="75px" height="75px" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="24"></circle>
                </svg>
                 <span class="span"></span>
            </button>
            <ul className={menuIsExpanded ? "navigation__container expanded" : "navigation__container"} aria-expanded={menuIsExpanded ? true : false}>
                <div className="navigation__container__list">
                    <li className="navigation__container__list__element"><Link onClick={handleChangeLocation} aria-current={location === '/' ? 'page' : null} to="/" className={location === '/' ? "navigation__container__list__element__link currentPage" : "navigation__container__list__element__link"}>Accueil</Link></li>
                    <li className="navigation__container__list__element"><Link onClick={handleChangeLocation} aria-current={location === '/about' ? 'page' : null} to="/about" className={location === '/about' ? "navigation__container__list__element__link currentPage" : "navigation__container__list__element__link"}>&Agrave; propos</Link></li>
                    <li className="navigation__container__list__element"><Link onClick={handleChangeLocation} aria-current={location === '/skills' ? 'page' : null} to="/skills" className={location === '/skills' ? "navigation__container__list__element__link currentPage" : "navigation__container__list__element__link"}>Compétences</Link></li>
                    <li className="navigation__container__list__element"><Link onClick={handleChangeLocation} aria-current={location === '/portfolio' ? 'page' : null} to="/portfolio" className={location === '/portfolio' ? "navigation__container__list__element__link currentPage" : "navigation__container__list__element__link"}>Portfolio</Link></li>
                    <li className="navigation__container__list__element"><Link onClick={handleChangeLocation} aria-current={location === '/contact' ? 'page' : null} to="/contact" className={location === '/contact' ? "navigation__container__list__element__link currentPage" : "navigation__container__list__element__link"}>Contact</Link></li>
                    <div className="navigation__container__list__element__networks">
                        <li className="navigation__container__list__element__networks__link"><a href='https://github.com/Melegrand' className="navigation__container__list__element__link"><img alt='' src={github} className='img'></img></a></li>
                        <li className="navigation__container__list__element__networks__link"><a href='https://www.linkedin.com/in/melody-legrand-3716a6212/' className="navigation__container__list__element__link"><img alt ='' src={linkedin} className='img'></img></a></li>
                        <li className="navigation__container__list__element__networks__link"><a href='mailto:dstm.melody@gmail.com' className="navigation__container__list__element__link"><img alt ='' src={email} className='img'></img></a></li>
                    </div>
                </div>
            </ul>
        </nav>
        </>
    );
}

export default Header;