import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import TeamDB from 'components/TeamDB.js'
import './style.css';

const Team = (props) => {
    return (
        <div className="TeamList">
            <ul className="TeamList__members">
                {TeamDB.map(item =>(
                    <li key={item.id}>
                        <NavLink
                            className="TeamList__members__link"
                            activeClassName="TeamList__members__link--active"
                            exact to={`${props.match.path}/${item.id}`}>
                            {item.name}
                            </NavLink>
                    </li>)
                )}
            </ul>

            <div className="TeamList__card">
                {TeamDB.map(item =>(
                    <div className="MemberCard" key={item.id}>
                        <img className="MemberCard__img" src={`${item.photo}`} alt={`${item.name}`}/>
                        <div className="MemberCard__info">
                            <h2 className="MemberCard__name">{`${item.name}`}</h2>
                            <p className="MemberCard__pos">{`${item.position}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

// {/*<Switch>*/}
// {/*<Route exact path={`${props.match.path}/0`} renrer{()=><h1>0</h1>}></Route>*/}
// {/*<Route exact path={`${props.match.path}/1`} renrer{()=><h1>1</h1>}></Route>*/}
// {/*<Route exact path={`${props.match.path}/2`} renrer{()=><h1>0</h1>}></Route>*/}
// {/*</Switch>*/}