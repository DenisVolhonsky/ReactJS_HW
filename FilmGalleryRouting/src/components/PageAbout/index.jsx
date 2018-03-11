import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './style.css';

const NavLinks = [
    {
        path: '/team',
        text: 'the team'
    },
    {
        path: '/stack',
        text: 'our stack'
    },
    {
        path: '/career',
        text: 'career'
    }
];

const PageAbout = (props) => {
    return (
        <div className="AboutPage">
            <div className="AboutPage__nav">
                <nav className="AboutNav">
                    {NavLinks.map(i=>(<Link key={i.text} className="AboutNav__link" activeClassName="AboutNav__link--active" exact to={`${props.match.path}${i.path}`}>{i.text}</Link>))}
                </nav>
            </div>
            <div className="AboutPage__body">
                <Switch>
                    {NavLinks.map(i=>(<Route key={i.text} exact path={`${props.match.path}${i.path}`} render={()=><h3>{i.text}</h3>}></Route>))}
                </Switch>
            </div>
        </div>
    );
};

export default PageAbout;

