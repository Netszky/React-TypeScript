import React, { ReactElement } from 'react';
import Nav from '../Components/Nav';
import { navItems } from '../App';

const Home = () :ReactElement => {
    return (
        <div>
            <Nav items={navItems}></Nav>
            <div className="container-home pad">
                <p className="label">Chigot Julien</p>
                <p className="label">Apprenti Développeur</p>
            </div>
        </div>
    );
};

export default Home;