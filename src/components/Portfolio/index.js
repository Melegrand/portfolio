import { useEffect } from 'react';
import Header from '../Header';
import Project from './Project';
import './index.scss';
import SearchByTown from './miniatures/SearchByTown.png';
import map from './miniatures/map.png';
import ew from './miniatures/ew.png';
import univinfo from './miniatures/univinfo.png';
const Portfolio = ({getLocation, location, handleChangeLocation}) => {
    document.title = 'Portfolio | Mélody Legrand'

    const slides = [
        {
          title: 'Search By Town',
          image: SearchByTown,
          text: `Réalisée dans le cadre de ma formation O\'Clock et développée en React, l\'application est une recherche de ville par nom avec deux API, une pour donner la météo et l\'autre pour donner le nombre d\'habitants.      ${String.fromCharCode(8594)}`, 
          link:'https://search-town.vercel.app/'
        },
        {
            title: 'WordMap',
            image: map,
            text: `Réalisé dans le but de mettre en pratique mon apprentissage sur les bases de données, les views et comme défi personnel de travailler de manière interactive avec des svg.      ${String.fromCharCode(8594)}`,
            link:'https://github.com/Melegrand/wordMap'
          },
          {
            title: 'Univinfo',
            image: univinfo,
            text: 'Réalisé dans le cadre du projet tutoré de ma formation O\'clock. Il s\'agit d\'un ERP d\'envoi de campagnes de mails.',
            link:'https://github.com/O-clock-DWA-Qilin/Univinfo'
          },
          {
            title: 'Elec World',
            image: ew,
            text: 'Le site Elec World a été réalisé pour un besoin de l\'entreprise d\'être visible sur internet.',
            link:'https://www.elecworld.fr/'
        }]
    useEffect(() => {
        handleChangeLocation()
    }, [])

    return (
        <>
        <Header getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
        <section className="portfolio">
        <div className='portfolio__header'>
            <h1 className='portfolio__header__title'>Portfolio</h1>
        </div>

        <Project data={slides} />
        </section>
        </>
    );
}

export default Portfolio;