import { useLocation } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

import Menu from './Menu';
import Footer from './Footer';
import BannerTitle from './BannerTitle';
import Menu_page from './Menu_page';
import Projects from './Projects';

import arrow from '../svg/arrow.svg';

const Category = ({category}) => {
    return(
        <div className='category'>
            <span></span>
            <p>{category}</p>
        </div>
    ); 
}; 

const ProjectBanner = ({section}) => {
    return (
        <div className='project_banner'>
            <span className="blur_point" id="orange_blur_point"></span>
            <span className="blur_point" id="blue_blur_point"></span>

            <div className='titles_page'>
                <BannerTitle numTranslate="translate1" text={section.titre}/>
                <BannerTitle numTranslate="translate2" text={section.titre}/>
                <BannerTitle numTranslate="translate3" text={section.titre}/> 
            </div>
            <div className='categories_container'>
                <div className='categories'>
                    {section.categories.map((category, index) => (
                        <Category key={index} category={category} />
                    ))}
                </div>
                <div>
                    <a href="#projects"><img 
                    id="arrowHome" 
                    src={arrow} 
                    alt="scroll down" 
                    /></a>
                </div>
            </div>
        </div>
    ); 
}; 

const Project_page = () => {
    const location = useLocation();
    const path = location.pathname.slice(1);
    const { data, loading } = useLanguage();
    
    if (loading) {
        return <div>Chargement...</div>;
    }
    
    const section = data.info.sections.find(sec => sec.path === path);

    return (
        <div>
            <Menu />
            <ProjectBanner section={section}/>
            <Projects section={section}/>
            <Menu_page currentSection={section}/>
            <Footer />
        </div>
    );
};

export default Project_page;