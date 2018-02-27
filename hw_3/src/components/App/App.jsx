import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'db.js';
import Editor from "../Editor/index";

export default class App extends React.Component {
    state = {
        allPosts: posts
    }

    onAddTodo = todo => {
        this.setState({
            allPosts: [...this.state.allPosts, todo]
        });
    }

    onDeleteTodo = id => {
        this.setState({
           allPosts: this.state.allPosts.filter(post => post.id !== id )
        });
    }


    //////////////////////////////
    componentWillMount(){
        // https://api.themoviedb.org/3/search/company?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47&page=1
        // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47`)
    .then(response=>{
        if(response.ok) return response.json();
        throw new Error('Fetching error'+ response.statusText);
    })
    .then(data => {
        let films = [];
        data.results.map(item => {
            const {id, title, overview, poster_path, popularity, release_date} = item;
            films.push({id, title, overview, poster_path, popularity, release_date});
            return films;
        });

        console.log(films);

    })
    .catch(err => console.log(err));
    }

    //////////////////////////////


    render() {

       // console.log("hi");

        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        {this.state.allPosts.map(post => <Posts onTodoClick={this.onDeleteTodo} key={post.id} {...post}/>)}
                    </div>
                    <Editor onFormSubmit={this.onAddTodo}/>
                </div>
            </div>
        );
    }
}