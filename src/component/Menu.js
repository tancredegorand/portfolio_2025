import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import LanguageSwitcher from './LanguageSwitcher';




const Menu = () => {

    const { data, loading } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const burger = document.getElementById('burger');
      const spans = burger.getElementsByTagName('span');
      const menu_container = document.getElementById('menu_container'); 
      const menu_list = document.getElementById('menu_list'); 
      const body = document.body;
      
      const handleBurgerClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        
        if (!isOpen) {
          spans[0].classList.add('isopen1');
          spans[1].classList.add('isopen2');
          menu_container.classList.add('menu_hide');
          menu_list.classList.add('menu_liste_show');
          body.style.overflow = 'hidden';
        } else {
          spans[0].classList.remove('isopen1');
          spans[1].classList.remove('isopen2');
          menu_container.classList.remove('menu_hide');
          menu_list.classList.remove('menu_liste_show');
          body.style.overflow = 'auto';
        }
      };
  
      burger.addEventListener('click', handleBurgerClick);
  
      return () => {
        burger.removeEventListener('click', handleBurgerClick);
      };
    }, [isOpen]);
  
    return (
        <div>
            <div className="menu" id='menu_container'>
                <div>
                    <Link to="/">{data.info.header.accueil}</Link>
                </div>
                <div className='rightSection'>  
                  <LanguageSwitcher/>
                  <div className="burger" id="burger">
                    <span></span>
                    <span></span>
                </div>

                </div>
            </div>
            <div className='menu_list' id='menu_list'>
                <ul>
                    <li><Link to="/">{data.info.header.accueil}</Link> </li>
                    <li><Link to="/categories_menu">{data.info.header.projet}</Link> </li>
       
                </ul>
            </div>
        </div>
    );
  };
  
  export default Menu;





