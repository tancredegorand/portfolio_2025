import { useEffect, useRef, useState } from 'react';
import Project from './Project';

const Projects = ({ section }) => {
    const projectRefs = useRef([]); 
    const [visibleIndex, setVisibleIndex] = useState(null); 
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleIndex(index);
                    }
                });
            },
            { threshold: 0.2 }
        );

        projectRefs.current.forEach((project) => {
            if (project) observer.observe(project);
        });

        return () => {
            projectRefs.current.forEach((project) => {
                if (project) observer.unobserve(project);
            });
        };
    }, []);

    return (
        <div className='projects' id='projects'>
            <div className='projects-summary'>
                <span></span>
                <div>
                    {section.projets.map((projet, index) => (
                        <a href={`#${projet.id}`}>
                            <p 
                                key={index}
                                style={{
                                    opacity: visibleIndex === index ? 1 : 0.5, 
                                }}
                            >
                                {projet.titre_projet}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
            <div className="projects-list">
                {section.projets.map((project, index) => (
                    <div 
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        data-index={index}
                    >
                        <Project project={project} titreSection={section.titre} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;