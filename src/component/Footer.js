import Btn from './Btn';

import w_plane from '../svg/w_plane.svg'

const Footer = () =>{
    return (
        <div className="footer">
            <span id="span-space"></span>
            <div className='mail_box_container'>
                <div className="mail_box">
                    <img className="footer_plane" src={w_plane}/>
                    <p>Créons ensemble !</p>
                    <p className="mail">tancredegorand@gmail.com</p>
                    <div className='footer_btn_section'>
                        <Btn text="LinkedIn" url="https://www.linkedin.com/in/tancredegorand/"/>
                        <Btn text="Bento" url="https://bento.me/tancredegorand"/>
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