import w_plane from '../svg/w_plane.svg'
import arrow_link from '../svg/arrow_link.svg'

const Footer = () =>{
    return (
        <div className="footer">
            <span id="span-space"></span>
            <div className='mail_box_container'>
                <div className="mail_box">
                    <img className="footer_plane" src={w_plane}/>
                    <p>Lorem ipsum</p>
                    <p className="mail">tancredegorand@orange.fr</p>
                    <div className='footer_btn_section'>
                        <a><button>
                            <span></span>
                            <p>LinkedIn</p>
                            <img src={arrow_link}/>
                        </button></a>
                        <a><button>
                            <span></span>
                            <p>Bento</p>
                            <img src={arrow_link}/>
                        </button></a>
                    </div>
                </div>
            </div>
            <div className="end-footer">
                <p>Mentions légales</p>
                <p>©2025 Tancrède Gorand</p>
                
            </div>
        </div>
    );
};

export default Footer; 


