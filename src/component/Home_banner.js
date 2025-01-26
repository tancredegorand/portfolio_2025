import { useEffect } from "react";
import w_plane from "../svg/w_plane.svg";
import arrow from "../svg/arrow.svg";

const Home = () => {

  useEffect(() => {
    const plane = document.getElementById('planeHome');


    const normaliseScroll = (scrollY) => {
        return scrollY / window.innerHeight;
    };
    
    const calculateXTranslate = (normalizedScroll) => {
        const screenWidth = window.innerWidth;
        const startPosition = -170;
        const totalDistance = screenWidth + 250;
        return startPosition + (normalizedScroll * totalDistance);
    };
    
    const calculateYTranslate = (normalizedScroll) => {
      let coef = 1.4; 
      if(window.innerWidth > 900){
          coef = 1.1
      }

        const screenHeight = window.innerHeight * 0.8; 
        const baseTranslation = normalizedScroll * screenHeight * coef; 
        const oscillationAmplitude = 100; 
        const oscillationFrequency = 3;
    
        const oscillation = Math.sin(normalizedScroll * Math.PI * oscillationFrequency) * oscillationAmplitude;
    
        return -baseTranslation + oscillation;
    };





    const calculateRotation = (x, y) => {
      const baseRotate = 5; 


      return baseRotate;
  };

    
    
    const handleScroll = () => {
        const normalizedScrollPosition = normaliseScroll(window.scrollY);
        const xPosition = calculateXTranslate(normalizedScrollPosition); 
        const yPosition = calculateYTranslate(normalizedScrollPosition);

        const rotate = calculateRotation(yPosition); 


    
        plane.style.transform = `translate(${xPosition}px, ${yPosition}px) rotate(${rotate}deg)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  

    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
    };
}, []);







  return (
    <div className="home">

      <span className="blur_point" id="orange_blur_point"></span>
      <span className="blur_point" id="blue_blur_point"></span>

      <div className="home-header">
        <h1>Tancrède Gorand</h1>
        <p className="subtitle">INGÉNIERIE CRÉATIVE</p>
      </div>

      <img id="planeHome" src={w_plane} alt="Airplane illustration" />
      <a href="#about"><img 
        id="arrowHome" 
        src={arrow} 
        alt="scroll down" 
      /></a>
    </div>
  );
};

export default Home;