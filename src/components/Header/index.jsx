
import { NavLink } from "react-router-dom";

import Search from '../Search';

import './style.css';

const Header = ({className, pathname, setPathname}) => {
    const componentClass = className;



    return (
        <div className={componentClass}>
            <NavLink className={componentClass+"_logo"} to='/home'>
                <div className={componentClass+"_logo-img"}></div>
                <div className={componentClass+"_logo-heading"}>Simple store</div>
            </NavLink>

            <div className={componentClass+"_right-content"}>
                
                <Search className="search" />

                <div className={componentClass+"_links"}>
                    <NavLink exact onClick={() => setPathname()} activeClassName={'active-menu-item'} className='SectionNavigation-Item Section' to='/about-us'>
                        <span className='Section-Title'>О нас</span>
                    </NavLink>
                    <NavLink exact onClick={() => setPathname()} activeClassName={'active-menu-item'} className='SectionNavigation-Item Section' to='/categories'>
                        <span className='Section-Title'>Категории</span>
                    </NavLink>
                    <NavLink exact onClick={() => setPathname()} activeClassName={'active-menu-item'} className='SectionNavigation-Item Section' to='/cart'>
                        <span className='Section-Title'>Корзина</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;