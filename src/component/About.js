import { useLanguage } from '../context/LanguageContext';

import pp_img from '../img/pp.jpg'
import school_svg from '../svg/education.svg'
import location_svg from '../svg/location.svg'
import persona from '../svg/persona.svg'



const About = () =>{
    const { data, loading } = useLanguage();

    return (
        <div className="about" id="about">
            <img id="pp" src={pp_img}/>
            <div className='about_text_section'>
            <p className='about-content'>{data.info.about.txt}</p>
            <div className='personal_infos'>
                    <div>
                        <img src={school_svg}/>
                        <p>{data.info.about.inge}</p>
                    </div>
                    <div>
                    <img src={persona}/>
                        <p>{data.info.about.age}</p>
                    </div>
                    <div>
                        <img src={location_svg}/>
                        <p>Paris, France</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 


