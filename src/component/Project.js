import Btn from "./Btn";

const Project = ({project, titreSection}) => {
    return (
        <div className='project-card' id={project.id}>
        <div>
            <div className='project-title'>
                <h2>{project.titre_projet}</h2>
                <p>{titreSection} - {project.date}</p>
            </div>
            <p className='project-card-text'>{project.description}</p>
        </div>
        {project.url && <Btn text="VOIR" url={project.url} />}
        <div className='project-img'>
        {project.images && project.images.length > 0 && (
            project.images.map((img, index) => (
                <img key={index} src={`/img/${img}`} alt={`Project ${index}`} />
            ))
        )}

        {project.videos && project.videos.length > 0 && (
            project.videos.map((video, index) => (
                <video autoPlay loop muted playsInline key={index}>
                    <source src={`/video/${video}`} type="video/mp4" />
                </video>
            ))
        )}

        </div>
        </div>

    );
};


export default Project;
