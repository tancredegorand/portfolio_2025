import Btn from "./Btn";

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
        <Btn text="VOIR"/>
        <div className='project-img'>
            {project.images.map((img, index) => (
                <img key={index} src={`/img/${img}`} alt={`Project ${index}`} />
            ))}
        </div>
        </div>

    );
};


export default Project;
