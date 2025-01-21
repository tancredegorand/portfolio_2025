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


const Menu_page_visual_item = () =>{
    return (
        <div className='menu_page_item'>
        <span></span>
        <p>Visuel</p>
    </div>
    );

};



const Menu_page = () => {
    useEffect(() => {
        const dev_item = document.getElementById("dev_item");
        const son_item = document.getElementById("son_item");
        const visual_item = document.getElementById("visual_item");


        const handleScroll = () => {
            if (dev_item && son_item && visual_item) {
                const dev_item_translate = -500 + window.scrollY * 0.05;
                const son_item_translate = -window.scrollY * 0.05;
                const visual_item_translate = -400 + window.scrollY * 0.05;

                dev_item.style.transform = `translateX(${dev_item_translate}px)`;
                son_item.style.transform = `translateX(${son_item_translate}px)`;
                visual_item.style.transform = `translateX(${visual_item_translate}px)`;
            }
        };


        const updateOpacity = (target, opacity) => {
            if (dev_item && son_item && visual_item) {
                if (target === dev_item) {
                    son_item.style.opacity = opacity;
                    visual_item.style.opacity = opacity;
                } else if (target === son_item) {
                    dev_item.style.opacity = opacity;
                    visual_item.style.opacity = opacity;
                } else if (target === visual_item) {
                    dev_item.style.opacity = opacity;
                    son_item.style.opacity = opacity;
                }
            }
        };

        const addHoverListeners = () => {
            if (dev_item && son_item && visual_item) {
                [dev_item, son_item, visual_item].forEach((item) => {
                    item.addEventListener("mouseover", () => updateOpacity(item, "0.7"));
                    item.addEventListener("mouseout", () => updateOpacity(item, "1"));
                });
            }
        };

        const removeHoverListeners = () => {
            if (dev_item && son_item && visual_item) {
                [dev_item, son_item, visual_item].forEach((item) => {
                    item.removeEventListener("mouseover", () => updateOpacity(item, "0.7"));
                    item.removeEventListener("mouseout", () => updateOpacity(item, "1"));
                });
            }
        };


        window.addEventListener("scroll", handleScroll);
        addHoverListeners();


        return () => {
            window.removeEventListener("scroll", handleScroll);
            removeHoverListeners();
        };
    }, []);

    return (
        <div className="menu_page">
            <Split1 />
            <div className="carrousel" id="dev_item">
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
                <Menu_page_dev_item />
            </div>
            <span className="split2"></span>
            <div className="carrousel" id="son_item">
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
                <Menu_page_son_item />
            </div>
            <span className="split2"></span>
            <div className="carrousel" id="visual_item">
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
                <Menu_page_visual_item />
            </div>
            <Split1 />
        </div>
    );
};

export default Menu_page;



