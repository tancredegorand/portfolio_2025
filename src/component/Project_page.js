import Menu from './Menu';
import Footer from './Footer';
import BannerTitle from './BannerTitle';

import arrow from '../svg/arrow.svg';

//import data from '../data/data.json';


const Category = () => {
    return(
        <div className='category'>
            <p>Vue.js</p>
        </div>
    ); 
}; 

const ProjectBanner = () => {
    return (
        <div className='project_banner'>
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
                    <a href="#fr"><img 
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
            <Footer />
        </div>
    );
};

export default ProjectPage;