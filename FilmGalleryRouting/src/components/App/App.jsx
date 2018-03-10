import React from 'react';
import './App.css';
import Header from "components/Header";
import PageHome from 'components/PageHome';
import PageMovies from 'components/PageMovies';
import PageAbout from 'components/PageAbout';
import {Route, Switch, Redirect} from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <div className="Container">
                <Header />
                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route path="/movies" component={PageMovies} />
                    <Route path="/about" component={PageAbout} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

