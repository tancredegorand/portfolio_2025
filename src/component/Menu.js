import { useEffect, useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const burger = document.getElementById('burger');
      const spans = burger.getElementsByTagName('span');
      
      const handleBurgerClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        
        if (!isOpen) {
          spans[0].classList.add('isopen1');
          spans[1].classList.add('isopen2');
        } else {
          spans[0].classList.remove('isopen1');
          spans[1].classList.remove('isopen2');
        }
      };
  
      burger.addEventListener('click', handleBurgerClick);
  
      return () => {
        burger.removeEventListener('click', handleBurgerClick);
      };
    }, [isOpen]);
  
    return (
      <div className="menu">
        <div>
          <a href="#accueil">Accueil</a>
        </div>
  
        <div className="burger" id="burger">
          <span></span>
          <span></span>
        </div>
   
        <ul>
          <li>Accueil</li>
          <li>Développement</li>
          <li>Son</li>
          <li>Visuel</li>
        </ul>
      </div>
    );
  };
  
  export default Menu;