
import React, { useRef, useEffect, useState } from "react";
import data from '../data/data.json';

const Split1 = () => {
    return (
        <div className="split1">
            <span></span>
            <p>Cliquez pour découvrir</p>
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

const Menu_page = () => {
    const menuRef = useRef(null);
    const [startY, setStartY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    // Récupérer les sections depuis le JSON
    const sections = data.fr.sections;
    
    // Création des refs pour chaque carrousel
    const carouselRefs = useRef(sections.map(() => React.createRef()));
    const velocityRefs = useRef(sections.map(() => 0));

    // Observer pour détecter la visibilité du composant `menu_page`
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        setStartY(window.scrollY); // Sauvegarder la position initiale
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

    // Fonction pour animer le mouvement des carrousels
    useEffect(() => {
        if (!isVisible) return; // Si le composant n'est pas visible, ne pas animer

        let animationFrameId;
        let lastScrollY = window.scrollY;

        const smoothScroll = () => {
            const relativeScrollY = window.scrollY - startY;
            const maxScroll = 1000;
            const boundedScrollY = Math.max(0, Math.min(relativeScrollY, maxScroll));

            sections.forEach((section, index) => {
                const carousel = carouselRefs.current[index].current;
                if (!carousel) return;

                const offset = -500 + (index * 100);
                
                // Si l'index est pair, on déplace à gauche, sinon à droite
                const directionMultiplier = (index % 2 === 0) ? 1 : -1;

                velocityRefs.current[index] += 
                    ((offset + boundedScrollY * 0.2 * directionMultiplier) - parseFloat(carousel.style.transform?.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;

                velocityRefs.current[index] *= 0.95; // Réduire la vitesse au fil du temps
                carousel.style.transform = `translateX(${velocityRefs.current[index]}px)`;
            });

            // Condition pour continuer à animer même avec de petits déplacements
            const hasMovement = velocityRefs.current.some(
                velocity => Math.abs(velocity) > 0.05 // Valeur plus petite pour permettre un mouvement plus continu
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
    }, [isVisible, startY, sections]);

    // Gestion de l'opacité lors du survol
    const handleMouseOver = (index) => {
        // Réduire l'opacité des autres carrousels sauf celui survolé
        carouselRefs.current.forEach((ref, i) => {
            if (ref.current && i !== index) {
                ref.current.style.opacity = '0.7';
            }
        });
    };

    const handleMouseOut = () => {
        // Réinitialiser l'opacité de tous les carrousels
        carouselRefs.current.forEach(ref => {
            if (ref.current) {
                ref.current.style.opacity = '1';
            }
        });
    };

    // Ajouter les événements de survol et de sortie pour chaque carrousel
    useEffect(() => {
        carouselRefs.current.forEach((ref, index) => {
            if (ref.current) {
                ref.current.addEventListener('mouseover', () => handleMouseOver(index));
                ref.current.addEventListener('mouseout', handleMouseOut);
            }
        });

        return () => {
            carouselRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    ref.current.removeEventListener('mouseover', () => handleMouseOver(index));
                    ref.current.removeEventListener('mouseout', handleMouseOut);
                }
            });
        };
    }, [sections]);

    return (
        <div className="menu_page" ref={menuRef}>
            <Split1 />
            {sections.map((section, index) => (
                <React.Fragment key={section.titre}>
                    <div 
                        className="carrousel" 
                        ref={carouselRefs.current[index]} // Référence assignée
                        id={section.titre}
                    >
                        {Array(12).fill(null).map((_, i) => (
                            <Menu_page_item key={i} titre={section.titre} />
                        ))}
                    </div>
                    {index < sections.length - 1 && <span className="split2" />}
                </React.Fragment>
            ))}
            <Split1 />
        </div>
    );
};

export default Menu_page;

