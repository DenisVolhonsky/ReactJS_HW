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
        allPosts: [],
        favoriteItems:[]
    }

    handleChangeCategory = category => {
        fetchData(category).then(data => {
            this.setState({
                allPosts: data
            });
        });
    }

    handleFind = title => {
        console.log(title);
        fetchFind(title).then(data => {
            this.setState({
                allPosts: data
            });
        });
    }

    addToFavorite = film => {
        let arr = [...this.state.favoriteItems, film];
        this.setState({favoriteItems: arr.filter((item, index, self) => index === self.findIndex(t =>  t.id === item.id))});
    }

    deleteFavorite = id => {    // delete for favorite list
        this.setState({
            favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
        });
    }


    /////////////////on loading/////////////
    componentWillMount(){

        let favorite = localStorage.getItem('favoriteItems');
        this.setState({favoriteItems: JSON.parse(favorite)});

        fetchData('popular').then(data => {
            this.setState({
                allPosts: data
            });
        });
    }
    /////////////////////////////////////////

    render() {
       const {allPosts, favoriteItems} = this.state;
       console.log(favoriteItems);

        localStorage.setItem('favoriteItems', JSON.stringify(this.state.favoriteItems));  // set data from Local Storage

        return (
            <div className="Container">
                <Header/>
                <div className="Content">
                    <SearchBlock className="SearchBlock">
                        <SearchField onChangeFilm={this.handleFind}/>
                        <SearchCategory onChangeCategory={this.handleChangeCategory}/>
                        <FavoriteList items={favoriteItems} onClickDel={this.deleteFavorite}/>
                    </SearchBlock>
                    <Posts items={allPosts} onClickAdd={this.addToFavorite}/>
                </div>
            </div>
        );
    }
}

