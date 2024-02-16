import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Project = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const currentProject = data[currentIndex];

    return (
        <div className="portfolio__project">
            <div className="portfolio__project__buttons">
                <button className="prev-button button--nav" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lsaquo;
                </button>

                <button className="next-button button--nav" onClick={handleNext} disabled={currentIndex === data.length - 1}>
                    &rsaquo;
                </button>
            </div>
            <div className="portfolio__project__buttons--prev">
                <button className="prev-button button--nav" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lsaquo;
                </button>
            </div>
            <div className="portfolio__project__link">
                <div className="portfolio__project__link__content">
                    <h2 className="portfolio__project__link__content__title">{currentProject.title}</h2>
                    <div className="portfolio__project__link__content__container">
                        <div className="portfolio__project__link__content__container__img">
                            <img className="portfolio__project__link__content__container__img__element" src={currentProject.image} alt={currentProject.title} />
                        </div>
                        <div className="portfolio__project__link__content__container__desc">
                            <p className="portfolio__project__link__content__container__desc__element">{currentProject.text}</p>
                            <div className={`portfolio__project__link__content__container__desc__link${currentProject.link === '' || currentProject.live === '' ? '--one' : '--many'}`}>
                                {currentProject.link !== '' && <a href={currentProject.link} className={`portfolio__project__link__content__container__desc__link__container${currentProject.link === '' || currentProject.live === '' ? '--one' : '--many'}__element`}>Repository Github</a>}
                                {currentProject.live !== '' && <a href={currentProject.live} className={`portfolio__project__link__content__container__desc__link__container${currentProject.link === '' || currentProject.live === '' ? '--one' : '--many'}__element`}>Site en ligne</a>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio__project__link__number">
                    {data.map((project, index) => (
                       <button key={index} className='portfolio__project__link__number__btn'><p onClick={() => setCurrentIndex(index)} className={`portfolio__project__link__number__element ${currentIndex === index ? 'active' : ''}`}></p></button>
                    ))}
                    <p className="portfolio__project__link__number__element--mobile">{currentIndex + 1} / {data.length}</p>
                </div>

            </div>
            <div className="portfolio__project__buttons--next">
                <button className="next-button button--nav" onClick={handleNext} disabled={currentIndex === data.length - 1}>
                    &rsaquo;
                </button>
            </div>
        </div>
    );
};

export default Project;
