import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import teamDB from 'components/teamDB.js'
import './style.css';

const Team = (props) => {
    return (
        <div className="TeamList">
            <ul className="TeamList__members">
                {teamDB.map(item =>(
                    <li key={item.id}>
                        <NavLink
                            className="TeamList__members__link"
                            activeClassName="TeamList__members__link--active"
                            to={`${props.match.path}/${item.id}`}>
                            {item.name}
                        </NavLink>
                    </li>)
                )}
            </ul>


            <Switch>
            <Route path={`${props.match.path}/0`} render={()=><h1>0</h1>}/>
            <Route path={`${props.match.path}/1`} render={()=><h1>1</h1>}/>
            <Route path={`${props.match.path}/2`} render={()=><h1>2</h1>}/>
            </Switch>


            {/*<div className="TeamList__card">*/}
                {/*{teamDB.map(item =>(*/}
                    {/*<div className="MemberCard" key={item.id}>*/}
                        {/*<img className="MemberCard__img" src={`${item.photo}`} alt={`${item.name}`}/>*/}
                        {/*<div className="MemberCard__info">*/}
                            {/*<h2 className="MemberCard__name">{`${item.name}`}</h2>*/}
                            {/*<p className="MemberCard__pos">{`${item.position}`}</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*))}*/}
            {/*</div>*/}
        </div>
    );
};

export default Team;


//
//











//
// <div>
//     {/*{teamDB.map(item=> <NavLink key={item.id} exact to={`${match.path}/${item.id}`}>{item.name}</NavLink>)}*/}
//     <NavLink to="/about/team/0">0</NavLink>
//
//     <Route
//         path="/about/team/0"
//         render={props => {
//             console.log(props);
//             return <h1>qwe</h1>
//         }}
//     />
// </div>