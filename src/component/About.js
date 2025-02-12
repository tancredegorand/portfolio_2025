import pp_img from '../img/pp.jpg'
import school_svg from '../svg/education.svg'
import location_svg from '../svg/location.svg'
import persona from '../svg/persona.svg'



const About = () =>{

    return (
        <div className="about" id="about">
            <img id="pp" src={pp_img}/>
            <div className='about_text_section'>
            <p className='about-content'>Créateur numérique, passionné par la résolution de problèmes alliant technologie, créativité et analyse, j’évolue entre l'<span className='bold'>UI/UX</span>, le <span className='bold'>développement web</span> et l'<span className='bold'>audiovisuel</span> pour concevoir des solutions innovantes et esthétiques. </p>
            <div className='personal_infos'>
                    <div>
                        <img src={school_svg}/>
                        <p>Ingénieur IMAC</p>
                    </div>
                    <div>
                    <img src={persona}/>
                        <p>22 Ans</p>
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


