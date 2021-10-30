import "./style.css"

import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

const SocialLink = props => {
    return (
        <a href={props.to} target="_blank" className={props.className}>
            <img src={props.icon} alt={props.alt}/>
            { props.children }
        </a>
    )
}

const AboutUs = ({ className }) => {
    const componentClass = className;


    return (
        <div className={componentClass}>
            <div className={componentClass+"_content"}>
                <div className={componentClass+"_text"}>
                    <span className="blue"><b>Simple Store</b></span> - простой магазин, реализован для практики на React и для моего портфолио.
                    API товаров взято с сайта fakestoreapi. 
                </div>
            <div className={componentClass+"_links"}>
                <SocialLink className={componentClass+"_link"} icon={Linkedin} alt="Icon: Linkedin" to="https://www.linkedin.com/in/konstantin-bozhko/">LinkedIn</SocialLink>
                <SocialLink className={componentClass+"_link"} icon={Github} alt="Icon: Github" to="https://github.com/Kokosik11/react-shop">Github (проекта)</SocialLink>
                <SocialLink className={componentClass+"_link"} icon={Github} alt="Icon: Github" to="https://github.com/Kokosik11">Github</SocialLink>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;