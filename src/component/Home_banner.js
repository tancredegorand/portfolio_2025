import w_plane from "../svg/w_plane.svg";
import arrow from "../svg/arrow.svg";

const Home = () => {

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