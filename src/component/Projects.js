import Project from './Project'

const Projects = () => {
    return(
        <div className='projects' id='projects'>
            <div className='projects-summary'>
                <span></span>
                <div>
                    <p>SPOTIFLOW</p>
                    <p>RUMBLE</p>
                    <p>SPOTIFLOW</p>
                </div>
            </div>
            <div class="projects-list">
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default Projects; 