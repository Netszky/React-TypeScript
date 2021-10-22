import React, { ReactElement} from 'react';
import NavItem from '../Interfaces/INav';
import { NavLink } from 'react-router-dom';

export interface NavItems {
    items: NavItem[];
}

const Nav: React.FC<NavItems> = ({items}:NavItems):ReactElement => {
    return (
        <header>
        <nav> 
            <ul className="nav">
                {items.map(item =>{
                    return <NavLink className="nav-item" activeClassName="nav-active" exact to={item.link}>{item.name}</NavLink>
                })}
            </ul>
        </nav>
        </header>
    );
};

export default Nav;