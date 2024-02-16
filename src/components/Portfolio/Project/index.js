import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faLight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Project = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const screenRef = useRef(null);
    const instructionRef = useRef(null);
    let startX;

    const handleNext = () => {
        currentIndex !== data.length && setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        currentIndex !== data.length && setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleInstruction = () => {
        instructionRef.current.style.display = "none";
    }
    const currentProject = data[currentIndex];

    useEffect(() => {
        const element = screenRef.current;
    
        const handleTouchStart = (event) => {
          startX = event.touches[0].clientX;
        };
    
        const handleTouchEnd = (event) => {
          const endX = event.changedTouches[0].clientX;
          const deltaX = endX - startX;
    
          if (deltaX > 50) {
            handlePrev()
          } else if (deltaX < -50) {
            handleNext()

          }
        };
    
        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);
    
        return () => {
          element.removeEventListener('touchstart', handleTouchStart);
          element.removeEventListener('touchend', handleTouchEnd);
        };
      }, []); 
    return (
        <div className="portfolio__project">
            {/* <div className="portfolio__project__buttons">
                <button className="prev-button button--nav" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lsaquo;
                </button>

                <button className="next-button button--nav" onClick={handleNext} disabled={currentIndex === data.length - 1}>
                    &rsaquo;
                </button>
            </div> */}
            <div className="portfolio__project__buttons--prev">
                <button className="prev-button button--nav" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lsaquo;
                </button>
            </div>
            <div className="portfolio__project__link" ref={screenRef}>
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
                
                <div className='portfolio__project__link__instruction' ref={instructionRef}>
                    <div className='portfolio__project__link__instruction__container'>
                        <FontAwesomeIcon icon={faHandPointer} style={{color: "#FFD43B"}} className='portfolio__project__link__instruction__container__icon'/>
                    </div>
                    <div className='portfolio__project__link__instruction__text'>
                        <button className='portfolio__project__link__instruction__text__btn' onClick={handleInstruction}><FontAwesomeIcon icon={faCircleXmark} className='portfolio__project__link__instruction__text__icon'/></button>
                    </div>
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
