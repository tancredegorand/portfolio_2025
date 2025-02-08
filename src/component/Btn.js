import arrow_link from '../svg/arrow_link.svg'


const Btn = ({text, url}) => {
    return(
        <a href={url} target='_blank'>
            <button>
                <div>
                    <span></span>
                    <span id='span-btn-not-fixed'></span>
                </div>
                <p>{text}</p>
                <img src={arrow_link}/>
            </button>
        </a>
    ); 
}; 

export default Btn;