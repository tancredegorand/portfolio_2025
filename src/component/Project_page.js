import Menu from './Menu';
import Footer from './Footer';
import BannerTitle from './BannerTitle';
import Menu_page from './Menu_page';
import Projects from './Projects'

import arrow from '../svg/arrow.svg';

//import data from '../data/data.json';


const Category = () => {
    return(
        <div className='category'>
            <span></span>
            <p>Vue.js</p>
        </div>
    ); 
}; 

const ProjectBanner = () => {
    return (
        <div className='project_banner'>

        <span className="blur_point" id="orange_blur_point"></span>
        <span className="blur_point" id="blue_blur_point"></span>

            <div className='titles_page'>
                <BannerTitle numTranslate="translate1"/>
                <BannerTitle numTranslate="translate2"/>
                <BannerTitle numTranslate="translate3"/> 
            </div>
            <div className='categories_container'>
                <div className='categories'>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
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




const ProjectPage = () => {
    return (
        <div>
            <Menu />
            <ProjectBanner />
            <Projects/>
            <Menu_page/>
            <Footer />
        </div>
    );
};

export default ProjectPage;