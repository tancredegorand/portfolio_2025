import arrow_link from '../svg/arrow_link.svg';
import imgTest from '../img/img_project/1920.jpg'

const Project = ({project, titreSection}) => {


    return (
        <div className='project-card' id={project.id}>
        <div>
            <div className='project-title'>
                <p>{titreSection}</p>
                <h2>{project.titre_projet}</h2>
            </div>
            <p className='project-card-text'>{project.description}</p>
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
