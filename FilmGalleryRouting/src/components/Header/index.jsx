import React from 'react';
import './style.css';

const Header = () => (
    <header className="Header">
        <h1><a className="Header__logo" href="">Home Cinema</a></h1>
        <ul className="Navigation">
            <li className="Navigation__item"><a className="Navigation__link">About</a></li>
            <li className="Navigation__item"><a className="Navigation__link">Browse</a></li>
            <li className="Navigation__item"><a className="Navigation__link">Login</a></li>
        </ul>
    </header>
);

export default Header;
