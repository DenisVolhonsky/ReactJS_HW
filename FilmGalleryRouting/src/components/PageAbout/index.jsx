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
    },
    {
        path: '/stack',
        text: 'our stack',
    },
    {
        path: '/career',
        text: 'career',
    }
];

const PageAbout = (props) => {
    return (
        <div className="AboutPage">
            <div className="AboutPage__nav">
                <nav className="AboutNav">
                    {NavLinks.map(i=>(<NavLink key={i.text} className="AboutNav__link" activeClassName="AboutNav__link--active" exact to={`${props.match.path}${i.path}`}>{i.text}</NavLink>))}
                </nav>
            </div>
            <div className="AboutPage__body">
                <Switch>
                    {/*{NavLinks.map(i=>(<Route key={i.text} exact path={`${props.match.path}${i.path}`} component={Career}></Route>))}*/}
                   <Route exact path={`${props.match.path}/team`} component={Team}></Route>
                   <Route exact path={`${props.match.path}/stack`} component={Stack}></Route>
                   <Route exact path={`${props.match.path}/career`} component={Career}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default PageAbout;

