import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'db.js';
import v4 from 'uuid/v4';
import Editor from "../Editor/index";


//console.log(posts);

export default class App extends React.Component {
    state = {
           allPosts: posts
    }

    onAddTodo = (todo) => {
        this.setState({
            allPosts: [...this.state.allPosts, todo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        {this.state.allPosts.map(post => <Posts key={post.id} {...post}/>)}
                    </div>
                    <div className="posts__adding">
                        <Editor onFormSubmit={this.onAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }

}