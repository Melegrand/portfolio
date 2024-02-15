import { useEffect } from 'react';
import Header from '../Header';
import Project from './Project';
import './index.scss';
import SearchByTown from './miniatures/SearchByTown.png';
import map from './miniatures/map.png';
import ew from './miniatures/ew.png';
import univinfo from './miniatures/univinfo.png';
import pagination from './miniatures/pagination.png';
import breadcrumb from './miniatures/breadcrumb.png';
import puzzle from './miniatures/puzzle.png';

const Portfolio = ({getLocation, location, handleChangeLocation}) => {
    document.title = 'Portfolio | Mélody Legrand'

    const slides = [
        {
          title: 'Univinfo',
          image: univinfo,
          text: 'Créé dans le cadre du projet tutoré de ma formation chez O\'Clock, cet ERP dédié à l\'envoi de campagnes de mails a été conçu pour être entièrement accessible. Il permet de gérer les campagnes avec une vue mensuelle et offre la flexibilité de planifier leur envoi ou de les expédier instantanément.',
          link:'https://github.com/O-clock-DWA-Qilin/Univinfo',
          live: ''
        },
        {
          title: 'Puzzle',
          image: puzzle,
          text: 'Ce puzzle a été conçu lors de mon stage, utilisant React JavaScript et Tailwind CSS. L\'objectif était de développer un puzzle interactif où les pièces peuvent être échangées de place et également pivotées sur elles-mêmes pour être résolues.',
          link:'',
          live: 'https://www.legendsofthepast.gg/puzzle'
        },
        {
          title: 'Search By Town',
          image: SearchByTown,
          text: `Développée en React, cette application est une recherche de villes par leur nom qui utilise deux API distinctes : l'une pour obtenir les données météorologiques et l'autre pour fournir le nombre d'habitants. Ces données sont ensuite utilisées pour dynamiser une carte représentant la répartition de la population des villes correspondantes.`, 
          link:'https://github.com/Melegrand/search_town',
          live:'https://search-town.vercel.app/'
        },
        {
          title: 'WordMap',
          image: map,
          text: `Réalisé dans le but de mettre en pratique mon apprentissage sur les bases de données, les views et comme défi personnel de travailler de manière interactive avec des svg.`,
          link:'https://github.com/Melegrand/wordMap',
          live:''
        },
        {
          title: 'Elec World',
          image: ew,
          text: 'Le site Elec World a été réalisé pour répondre aux besoins de l\'entreprise en matière de visibilité sur internet. Développé en HTML, Sass et JavaScript, une attention particulière a été accordée à l\'accessibilité pour assurer une expérience utilisateur optimale.',
          link:'',
          live:'https://www.elecworld.fr/'
        },
        {
          title: 'Pagination',
          image: pagination,
          text: 'Ce package simplifie la mise en place d\'une pagination avec React tout en respectant les normes d\'accessibilité. Son déploiement sur npm vise à le rendre accessible à toute la communauté souhaitant bénéficier de cette fonctionnalité.',
          link:'https://github.com/Melegrand/react-pagination',
          live:'https://www.npmjs.com/package/react-pagination-accessible'
        },
        {
          title: 'Fil d\'Ariane',
          image: breadcrumb,
          text: 'Ce package facilite l\'intégration d\'un fil d\'Ariane avec React, en veillant à son accessibilité. Sa mise à disposition sur npm vise à le rendre accessible à la communauté.',
          link:'https://github.com/Melegrand/Breadcrumb',
          live:'https://www.npmjs.com/package/breadcrumb-fil-dariane'
        }
      ]
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