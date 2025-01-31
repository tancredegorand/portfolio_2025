import { useEffect, useState } from 'react';


const Menu = () => {
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
                    <a href="#accueil">Accueil</a>
                </div>
                <div className="burger" id="burger">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='menu_list' id='menu_list'>
                <ul>
                    <li>Accueil</li>
                    <li>Développement</li>
                    <li>Son</li>
                    <li>Visuel</li>
                </ul>
            </div>
        </div>
    );
  };
  
  export default Menu;





