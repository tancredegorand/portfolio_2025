import { useEffect } from 'react';

import Menu from './Menu'
import Menu_page from './Menu_page';
import Footer from './Footer';

const Categories_menu = () => {
    useEffect(() => {
        window.scrollBy(0, 4);
    }, []); 
    return(
        <div>
            <Menu/>
            <Menu_page/>
            <Footer/>
        </div>
    );

};

export default Categories_menu; 