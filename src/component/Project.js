import arrow_link from '../svg/arrow_link.svg';
import imgTest from '../img/img_project/1920.jpg'

const Project = () => {


    return (
        <div className='project-card'>
        <div>
            <div className='project-title'>
                <p>Développement</p>
                <h2>SPOTIFLOW</h2>
            </div>
            <p className='project-card-text'>
                SPOTIFLOW est un projet qui s'inspire des sites de streaming musical les plus populaires. Cette plateforme vous permet de rechercher et de filtrer pour découvrir de la musique parmi une large sélection de chansons et d'albums, tout comme vous le feriez sur d'autres plateformes de streaming. Pour cela, le projet repose sur le framework Vue.js afin d'utiliser des composants, des routes, un stockage local et bien plus encore. Le site est construit sur une API alimentée par les données de Spotify, garantissant ainsi l'accès à une vaste sélection de chansons et d'albums.
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
