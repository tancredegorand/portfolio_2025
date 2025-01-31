import { useEffect, useRef, useState } from "react";

const BannerTitleContent = ({ numItem, numTranslate, text }) => {
    const textRef = useRef(null);
    const [dynamicSpacing, setDynamicSpacing] = useState(210); // Valeur par défaut

    // Fonction pour mettre à jour dynamicSpacing
    const updateDynamicSpacing = () => {
        if (textRef.current) {
            const wordWidth = textRef.current.offsetWidth; // Récupère la largeur du texte
            setDynamicSpacing(wordWidth + 5); // Ajuste l'espacement basé sur la largeur
        }
    };

    // Effet pour mettre à jour l'espacement à chaque redimensionnement ou changement de texte
    useEffect(() => {
        updateDynamicSpacing(); // Met à jour l'espacement lors du premier rendu ou du changement de texte

        // Écouteur de redimensionnement de la fenêtre
        window.addEventListener('resize', updateDynamicSpacing);

        // Nettoyage : supprime l'écouteur lors du démontage ou du changement
        return () => {
            window.removeEventListener('resize', updateDynamicSpacing);
        };
    }, [text]); // Recalcule à chaque fois que `text` change

    // Condition modifiée : true pour translate1 et translate3, false pour translate2
    const applyLeftStyle = numTranslate !== 'translate2';

    return (
        <div
            className={`bannerTitleContent ${numItem} ${numTranslate}`}
            style={
                applyLeftStyle
                    ? { left: `max(calc(${dynamicSpacing}px * 10), 100%)` }
                    : { right: `max(calc(${dynamicSpacing}px * 10), 100%)` }
            }
        >
            <span></span>
            <p ref={textRef}>{text}</p>
        </div>
    );
};
const BannerTitle = ({numTranslate}) => {
    const nbItem = 10; 
    return (
        <div className={`bannerTitle`}>
            {[...Array(nbItem)].map((_, index) => (
                <BannerTitleContent key={index} numItem={`item${index + 1}`} numTranslate={numTranslate} text="Testesteste" />
            ))}
        </div>
    );
};

export default BannerTitle;