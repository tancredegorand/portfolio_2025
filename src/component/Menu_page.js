import { useEffect } from "react";


const Split1 = () =>{
    return (
            <div className="split1">
                <span></span>
                <p>Cliquez pour découvrir</p>
                <span></span>
            </div>
    );
};


const Menu_page_dev_item = () =>{
    return (
        <div className='menu_page_item'>
        <span></span>
        <p>Développement</p>
    </div>
    );

};


const Menu_page_son_item = () =>{
    return (
        <div className='menu_page_item'>
        <span></span>
        <p>Son</p>
    </div>
    );

};


const Menu_page_visuel_item = () =>{
    return (
        <div className='menu_page_item'>
        <span></span>
        <p>Visuel</p>
    </div>
    );

};




const Menu_page = () =>{

    return (
        <div className="menu_page">
            <Split1/>
            <div className="carrousel dev_item">
                <Menu_page_dev_item/>
                <Menu_page_dev_item/>
                <Menu_page_dev_item/>
                <Menu_page_dev_item/>
                <Menu_page_dev_item/>
            </div>
            <span className="split2"></span>
            <div className="carrousel son_item">
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
                <Menu_page_son_item/>
            </div>
            <span className="split2"></span>
            <div className="carrousel visuel_item">
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
                <Menu_page_visuel_item/>
            </div>
            <Split1/>
            
        </div>
    );
};

export default Menu_page; 



