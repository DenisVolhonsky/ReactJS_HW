import React from 'react';
import { NavLink } from 'react-router-dom';
import pagehome from './pagehome.svg';
import './style.css';

const PageHome = () => (
            <div className="Home">
                <img className="Home__icon" src={pagehome} alt="home-img"/>
                <h1 className="Home__title">Welcome to Movie Mate</h1>
                <p className="Home__text">This is a single page application that lets you manage all kinds of movies.</p>
                <p className="Home__text">If you wish to learn more about Movie Mate visit <NavLink className="Home__link" to='/about'>About Page</NavLink>.</p>
                <p className="Home__text">Or start browsing right now in <NavLink className="Home__link" to='/movies'>Movie Gallery</NavLink>.</p>
            </div>
)

export default PageHome;
