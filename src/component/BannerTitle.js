import { useEffect, useRef, useState } from "react";

const BannerTitleContent = ({ numItem, numTranslate, text }) => {
    const textRef = useRef(null);
    const [dynamicSpacing, setDynamicSpacing] = useState(210); 

    const updateDynamicSpacing = () => {
        if (textRef.current) {
            const wordWidth = textRef.current.offsetWidth; 
            setDynamicSpacing(wordWidth + 5); 
        }
    };

    useEffect(() => {
        updateDynamicSpacing(); 

        window.addEventListener('resize', updateDynamicSpacing);

        return () => {
            window.removeEventListener('resize', updateDynamicSpacing);
        };
    }, [text]); 

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