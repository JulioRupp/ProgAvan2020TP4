import React from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <ul className="links">
                <li>
                    <Link to="/" className="link" >Inicio</Link>
                </li>
                <li>
                    <Link to="/error404" className="link">Salir</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
