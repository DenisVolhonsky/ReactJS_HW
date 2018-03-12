import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Career from 'components/Career';
import Stack from 'components/Stack';
import Team from 'components/Team';
import './style.css';

const NavLinks = [
    {
        path: '/team',
        text: 'the team',
        component: Team
    },
    {
        path: '/stack',
        text: 'our stack',
        component: Stack
    },
    {
        path: '/career',
        text: 'career',
        component: Career
    }
];

const PageAbout = (props) => {
    return (
        <div className="AboutPage">
            <div className="AboutPage__nav">
                <nav className="AboutNav">
                    {NavLinks.map(item => (<NavLink key={item.text} className="AboutNav__link" activeClassName="AboutNav__link--active" to={`${props.match.path}${item.path}`}>{item.text}</NavLink>))}
                </nav>
            </div>
            <div className="AboutPage__body">
                <Switch>
                    {NavLinks.map(item=>(<Route key={item.text} path={`${props.match.path}${item.path}`} component={item.component}></Route>))}
                </Switch>
            </div>
        </div>
    );
};

export default PageAbout;

