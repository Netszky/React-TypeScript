import React, { ReactElement } from 'react';
import Nav from '../Components/Nav';
import NavItem from '../Interfaces/INav';

const navItems: NavItem[] = [
    {name:"Home", link:"/"}, 
    {name:"Informations",link:"/informations"},
    {name:"Technologies", link:"/competences"}, 
    {name:"CV",link:"/CV"}, 
    {name:"A Propos", link:"/about"}
];

const Home = () :ReactElement => {
    return (
        <div className="nav-container">
            <Nav items={navItems}></Nav>
            <h1>Home</h1>
        </div>
    );
};

export default Home;