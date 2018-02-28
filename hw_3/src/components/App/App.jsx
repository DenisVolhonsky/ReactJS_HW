import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import {fetchData, fetchFind} from 'API.js';
import SearchBlock from 'components/SearchBlock';
import SearchField from 'components/SearchField';
import FavoriteList from 'components/FavoriteList';
import SearchCategory from 'components/SearchCategory';

export default class App extends React.Component {
    state = {
        allPosts: []
    }

    handleChangeCategory = (category) => {
        fetchData(category).then(data => {
            this.setState({
                allPosts: data
            });
        });
    }

    handleFind = (title) => {
        console.log(title);
        fetchFind(title).then(data => {
            this.setState({
                allPosts: data
            });
        });
    }


    /////////////////on loading/////////////
    componentWillMount(){
        fetchData('popular').then(data => {
            this.setState({
                allPosts: data
            });
        });
    }
    /////////////////////////////////////////

    render() {

       const {allPosts} = this.state;
       console.log(allPosts);

        return (
            <div className="Container">
                <Header/>
                <div className="Content">

                    <SearchBlock className="SearchBlock">
                        <SearchField onChangeFilm={this.handleFind}/>
                        <SearchCategory onChangeCategory={this.handleChangeCategory}/>
                        <FavoriteList/>
                    </SearchBlock>

                    <Posts items={allPosts}/>
                </div>
            </div>
        );
    }
}