
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    
    const sections = data.fr.sections;
    
    const carouselRefs = useRef(sections.map(() => React.createRef()));
    const velocityRefs = useRef(sections.map(() => 0));

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
        if (!isVisible) return; 

        let animationFrameId;

        const smoothScroll = () => {
            const relativeScrollY = window.scrollY - startY;
            const maxScroll = 1000;
            const boundedScrollY = Math.max(0, Math.min(relativeScrollY, maxScroll));

            sections.forEach((section, index) => {
                const carousel = carouselRefs.current[index].current;
                if (!carousel) return;

                const offset = -500 + (index * 100);
                
                const directionMultiplier = (index % 2 === 0) ? 1 : -1;

                velocityRefs.current[index] += 
                    ((offset + boundedScrollY * 0.2 * directionMultiplier) - parseFloat(carousel.style.transform?.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;

                velocityRefs.current[index] *= 0.95;
                carousel.style.transform = `translateX(${velocityRefs.current[index]}px)`;
            });

            const hasMovement = velocityRefs.current.some(
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
    }, [isVisible, startY, sections]);

    const handleMouseOver = (index) => {
        carouselRefs.current.forEach((ref, i) => {
            if (ref.current && i !== index) {
                ref.current.style.opacity = '0.7';
            }
        });
    };

    const handleMouseOut = () => {
        carouselRefs.current.forEach(ref => {
            if (ref.current) {
                ref.current.style.opacity = '1';
            }
        });
    };

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
    {sections.map((section, index) => {
        return (
            <React.Fragment key={section.titre}>
                <Link to={`/${section.path}`}>
                    <div 
                        className="carrousel" 
                        ref={carouselRefs.current[index]} 
                        id={section.path} 
                    >
                        {Array(12).fill(null).map((_, i) => (
                            <Menu_page_item key={i} titre={section.titre}/>
                        ))}
                    </div>
                    {index < sections.length - 1 && <span className="split2" />}
                </Link>
            </React.Fragment>
        );
    })}
    <Split1 />
</div>
    );
};

export default Menu_page;

