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
        const startPosition = -150;
        const totalDistance = screenWidth + 250;
        return startPosition + (normalizedScroll * totalDistance);
    };

    const handleScroll = () => {
        const normalizedScrollPosition = normaliseScroll(window.scrollY);
        const xPosition = calculateXTranslate(normalizedScrollPosition);  
        
        plane.style.transform = `translate(${xPosition}px)`;
    };

    
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

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