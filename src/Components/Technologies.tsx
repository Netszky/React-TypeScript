import React from 'react';
import Nav from './Nav';
import { navItems } from '../App'

const Technologies:React.FC = () => {
    return (
        <div>
            <Nav items={navItems}></Nav>
        </div>
    );
};

export default Technologies;