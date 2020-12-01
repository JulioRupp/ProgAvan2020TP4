import React from 'react';
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {

    return (
        <div className="header">
                <div className="logo">
                    <Link to="/">
                        <h1 className="logo_name">Películas</h1>
                    </Link>
                </div>
                <Navbar />
        </div>
    );
};

export default Header;
