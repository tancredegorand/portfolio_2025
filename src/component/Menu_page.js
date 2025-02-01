import { useEffect, useRef, useState } from "react";

const Split1 = () => {
    return (
        <div className="split1">
            <span></span>
            <p>Cliquez pour découvrir</p>
            <span></span>
        </div>
    );
};

const Menu_page_dev_item = () => {
    return (
        <div className='menu_page_item'>
            <span></span>
            <p>Développement</p>
        </div>
    );
};

const Menu_page_son_item = () => {
    return (
        <div className='menu_page_item'>
            <span></span>
            <p>Son</p>
        </div>
    );
};

const Menu_page_visual_item = () => {
    return (
        <div className='menu_page_item'>
            <span></span>
            <p>Visuel</p>
        </div>
    );
};

const Menu_page = () => {
    const menuRef = useRef(null);
    const devItemRef = useRef(null);
    const sonItemRef = useRef(null);
    const visualItemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [startY, setStartY] = useState(0);
    
    const velocityRefs = {
        dev: useRef(0),
        son: useRef(0),
        visual: useRef(0)
    };

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
        const devItem = devItemRef.current;
        const sonItem = sonItemRef.current;
        const visualItem = visualItemRef.current;

        let animationFrameId;
        let lastScrollY = window.scrollY;

        const smoothScroll = () => {
            if (!devItem || !sonItem || !visualItem || !isVisible) return;

            // Calculer le scroll relatif depuis le début de la visibilité du composant
            const relativeScrollY = window.scrollY - startY;
            
            // Limiter le scroll relatif
            const maxScroll = 1000; // Valeur maximale de scroll à ajuster selon vos besoins
            const boundedScrollY = Math.max(0, Math.min(relativeScrollY, maxScroll));

            // Appliquer les transformations avec le scroll limité
            velocityRefs.dev.current += ((-500 + boundedScrollY * 0.2) - parseFloat(devItem.style.transform.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;
            velocityRefs.son.current += ((-boundedScrollY * 0.2) - parseFloat(sonItem.style.transform.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;
            velocityRefs.visual.current += ((-600 + boundedScrollY * 0.2) - parseFloat(visualItem.style.transform.replace('translateX(', '').replace('px)', '') || 0)) * 0.1;

            // Appliquer l'amortissement
            velocityRefs.dev.current *= 0.95;
            velocityRefs.son.current *= 0.95;
            velocityRefs.visual.current *= 0.95;

            // Mettre à jour les transformations
            devItem.style.transform = `translateX(${velocityRefs.dev.current}px)`;
            sonItem.style.transform = `translateX(${velocityRefs.son.current}px)`;
            visualItem.style.transform = `translateX(${velocityRefs.visual.current}px)`;

            if (Math.abs(velocityRefs.dev.current) > 0.1 || 
                Math.abs(velocityRefs.son.current) > 0.1 || 
                Math.abs(velocityRefs.visual.current) > 0.1) {
                animationFrameId = requestAnimationFrame(smoothScroll);
            }

            lastScrollY = window.scrollY;
        };

        const startSmoothScroll = () => {
            if (isVisible) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(smoothScroll);
            }
        };

        window.addEventListener('scroll', startSmoothScroll);

        // Effet d'opacité au survol
        const updateOpacity = (target) => {
            const items = [devItem, sonItem, visualItem].filter(item => item !== target);
            items.forEach(item => {
                item.style.opacity = '0.7';
            });
        };

        const resetOpacity = () => {
            [devItem, sonItem, visualItem].forEach(item => {
                item.style.opacity = '1';
            });
        };

        [devItem, sonItem, visualItem].forEach(item => {
            item.addEventListener('mouseover', () => updateOpacity(item));
            item.addEventListener('mouseout', resetOpacity);
        });

        return () => {
            window.removeEventListener('scroll', startSmoothScroll);
            cancelAnimationFrame(animationFrameId);
            [devItem, sonItem, visualItem].forEach(item => {
                item.removeEventListener('mouseover', () => updateOpacity(item));
                item.removeEventListener('mouseout', resetOpacity);
            });
        };
    }, [isVisible, startY]);

    return (
        <div className="menu_page" ref={menuRef}>
            <Split1 />
            <div className="carrousel" ref={devItemRef} id="dev_item">
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
            </div>
            <span className="split2"></span>
            <div className="carrousel" ref={sonItemRef} id="son_item">
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
            </div>
            <span className="split2"></span>
            <div className="carrousel" ref={visualItemRef} id="visual_item">
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
            </div>
            <Split1 />
        </div>
    );
};

export default Menu_page;