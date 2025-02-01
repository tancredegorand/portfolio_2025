import arrow_link from '../svg/arrow_link.svg';
import imgTest from '../img/img_project/1920.jpg'

const Project = () => {


    return (
        <div className='project-card'>
        <div>
            <div className='project-title'>
                <p>Développement</p>
                <h2>SPOTIFLOW TEST DE FOU</h2>
            </div>
            <p className='project-card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <a><button>
            <span></span>
            <p>VOIR</p>
            <img src={arrow_link}/>
        </button></a>
        <div className='project-img'>
            <img src={imgTest}/>
            <img src={imgTest}/>
            <img src={imgTest}/>
        </div>
        </div>

    );
};


export default Project;
