import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const Split1 = () => {
    const { language } = useLanguage();
    
    return (
        <div className="split1">
            <span></span>
            <p>{language === 'fr' ? 'Cliquez pour découvrir' : 'Click to discover'}</p>
            <span></span>
        </div>
    );
};

const Menu_page_item = ({ titre }) => {
    return (
        <div className='menu_page_item'>
            <span></span>
            <p>{titre}</p>
        </div>
    );
};

const Menu_page = ({ currentSection }) => {
    const menuRef = useRef(null);
    const [startY, setStartY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { data, loading } = useLanguage();
    
    // Initialiser les refs au niveau supérieur
    const [carouselRefs, setCarouselRefs] = useState([]);
    const [velocityRefs, setVelocityRefs] = useState([]);
    
    // Initialiser ou mettre à jour les refs une fois les données chargées
    useEffect(() => {
        if (!loading && data) {
            const sections = data.info.sections;
            setCarouselRefs(sections.map(() => React.createRef()));
            setVelocityRefs(Array(sections.length).fill(0));
        }
    }, [loading, data]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        setStartY(window.scrollY); 
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => {
            if (menuRef.current) {
                observer.unobserve(menuRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible || loading || !data) return; 

        const sections = data.info.sections;
        let animationFrameId;
        const velocityValues = [...velocityRefs];

        const smoothScroll = () => {
            const relativeScrollY = window.scrollY - startY;
            const maxScroll = 1000;
            const boundedScrollY = Math.max(0, Math.min(relativeScrollY, maxScroll));

            sections.forEach((section, index) => {
                const carousel = carouselRefs[index]?.current;
                if (!carousel) return;

                const offset = -500 + (index * 100);
                
                const directionMultiplier = (index % 2 === 0) ? 1 : -1;

                velocityValues[index] += 
                    ((offset + boundedScrollY * 0.2 * directionMultiplier) - parseFloat(carousel.style.transform?.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;

                velocityValues[index] *= 0.95;
                carousel.style.transform = `translateX(${velocityValues[index]}px)`;
            });

            setVelocityRefs(velocityValues);

            const hasMovement = velocityValues.some(
                velocity => Math.abs(velocity) > 0.05 
            );

            if (hasMovement) {
                animationFrameId = requestAnimationFrame(smoothScroll);
            }
        };

        const startSmoothScroll = () => {
            if (isVisible) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(smoothScroll);
            }
        };

        window.addEventListener('scroll', startSmoothScroll);

        return () => {
            window.removeEventListener('scroll', startSmoothScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible, startY, data, loading, carouselRefs, velocityRefs]);

    const handleMouseOver = (index) => {
        carouselRefs.forEach((ref, i) => {
            if (ref.current && i !== index) {
                ref.current.style.opacity = '0.7';
            }
        });
    };

    const handleMouseOut = () => {
        carouselRefs.forEach(ref => {
            if (ref.current) {
                ref.current.style.opacity = '1';
            }
        });
    };

    useEffect(() => {
        if (loading || !data || carouselRefs.length === 0) return;
        
        const sections = data.info.sections;
        
        carouselRefs.forEach((ref, index) => {
            if (ref.current) {
                const mouseOverHandler = () => handleMouseOver(index);
                ref.current.addEventListener('mouseover', mouseOverHandler);
                ref.current.addEventListener('mouseout', handleMouseOut);
                
                return () => {
                    if (ref.current) {
                        ref.current.removeEventListener('mouseover', mouseOverHandler);
                        ref.current.removeEventListener('mouseout', handleMouseOut);
                    }
                };
            }
        });
    }, [loading, data, carouselRefs]);
    
    // Rendu conditionnel si les données sont en cours de chargement
    if (loading) {
        return <div>Chargement...</div>;
    }
    
    const sections = data.info.sections;
    
    const renderCarousel = (section, index, isLastItem) => (
        <React.Fragment key={section.titre}>
            <Link to={`/${section.path}`}>
                <div 
                    className="carrousel" 
                    ref={carouselRefs[index]} 
                    id={section.path} 
                >
                    {Array(12).fill(null).map((_, i) => (
                        <Menu_page_item key={i} titre={section.titre} />
                    ))}
                </div>
                {!isLastItem && <span className="split2" />}
            </Link>
        </React.Fragment>
    );

    const filteredSections = currentSection 
        ? sections.filter(section => section.path !== currentSection.path)
        : sections;

    return (
        <div className="menu_page" ref={menuRef}>
            <Split1 />
            {filteredSections.map((section, index) => 
                renderCarousel(
                    section, 
                    index, 
                    index === filteredSections.length - 1
                )
            )}
            <Split1 />
        </div>
    );
};

export default Menu_page;