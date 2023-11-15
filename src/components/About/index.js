import Header from '../Header';
import arrow from '../../img/arrow.png';
import './index.scss';
const About = ({getLocation, location, handleChangeLocation}) => {
    document.title = `${String.fromCharCode(192)} propos | Mélody Legrand`

    return (
        <>
        <Header getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
        <section className="about">
            <div class="about__header">
                <img src={arrow} className='slide-in about__header__arrow'/>
                <h1 class='about__header__title'>&Agrave; propos</h1>
            </div>
            <div class="about__content">
                <p class="about__content__text">
                Passionnée de développement web, j'aime découvrir de nouvelles technologies et de nouveaux langages afin d'être à la pointe de ce qui se fait ! 
                Mon année de formation chez O'clock m'a permis d'acquérir une solide base dans le domaine du développement web, tout en mettant l'accent sur des pratiques inclusives et respectueuses des normes d'accessibilité.
                Minutieuse et perfectionniste, ces qualités se reflètent dans ma démarche de création de code propre et optimisé.
                Ayant été immergée dans un environnement pédagogique dynamique et collaboratif chez O'clock, je suis habituée à travailler efficacement en équipe tout en faisant preuve d'autonomie dans mes projets. Mes passions pour l'apprentissage et l'innovation me stimulent à rester constamment informée des évolutions récentes et à améliorer en permanence mes compétences techniques.
                </p>
            </div>
        </section>
        </>
    );
}

export default About;