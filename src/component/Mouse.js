import { useEffect } from "react";


const Footer = () =>{

    useEffect(() => {

        
        const dot = document.getElementById('dot'); 
        const circle = document.getElementById('circle');

        
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY= event.clientY;

            dot.style.left = mouseX+'px';
            dot.style.top = mouseY+'px';

            setTimeout(function() {
                circle.style.left = mouseX + 'px';
                circle.style.top = mouseY + 'px';
              }, 40);  

          };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };

    }, []);


      return (
        <div id="dot_container">
            <span className='dot' id="dot"></span>
            <span className='circle' id="circle"></span>
        </div> 
      );
};

export default Footer;