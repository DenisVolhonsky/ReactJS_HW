import React from "react";
import "./style.css";
import Posts from "components/PageMovies/Posts";
import { fetchData, fetchFind } from "API.js";
import SearchBlock from "components/PageMovies/SearchBlock";
import SearchField from "components/PageMovies/SearchField";
import FavoriteList from "components/PageMovies/FavoriteList";
import SearchCategory from "components/PageMovies/SearchCategory";

export default class PageMovies extends React.Component {
  state = {
    allPosts: [],
    favoriteItems: JSON.parse(localStorage.getItem("favoriteItems")) || []
  };

  handleChangeCategory = category => {
    fetchData(category).then(data => {
      this.setState({
        allPosts: data
      });
    });
  };

  handleFind = title => {
    fetchFind(title).then(data => {
      this.setState({
        allPosts: data
      });
    });
  };

  addToFavorite = film => {
    let arr = [...this.state.favoriteItems, film];
    this.setState({
      favoriteItems: arr.filter(
        (item, index, self) => index === self.findIndex(t => t.id === item.id)
      )
    });
  };

  deleteFavorite = id => {
    // delete for favorite list
    this.setState({
      favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
    });
  };

  /////////////////on loading/////////////
  componentWillMount() {
    fetchData("popular").then(data => {
      this.setState({
        allPosts: data
      });
    });
  }
  /////////////////////////////////////////

  render() {
    const { allPosts, favoriteItems } = this.state;
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(this.state.favoriteItems)
    ); // set data from Local Storage

    return (
        <div className="Content">
          <SearchBlock className="SearchBlock">
            <SearchField onChangeFilm={this.handleFind} />
            <SearchCategory onChangeCategory={this.handleChangeCategory} />
            <FavoriteList
              items={favoriteItems}
              onClickDel={this.deleteFavorite}
            />
          </SearchBlock>
          <Posts items={allPosts} onClickAdd={this.addToFavorite} />
        </div>
    );
  }
}
