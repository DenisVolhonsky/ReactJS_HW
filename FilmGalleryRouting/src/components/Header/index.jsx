import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
    <header className="Header">
        <h1 className="Header__logo"><NavLink exact to="/">Movie Mate</NavLink></h1>
        <nav className="Navigation">
            <NavLink className="Navigation__link" activeClassName="Navigation__link--active" exact to='/'>Home</NavLink>
            <NavLink className="Navigation__link" activeClassName="Navigation__link--active" to='/movies'>Movies</NavLink>
            <NavLink className="Navigation__link" activeClassName="Navigation__link--active" to='/about'>About</NavLink>
        </nav>
    </header>
);

export default Header;
