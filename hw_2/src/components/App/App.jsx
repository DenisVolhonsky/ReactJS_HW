import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'db.js';
import Editor from "../Editor/index";

//console.log(posts);

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        {posts.map(post => <Posts key={post.id} {...post}/>)}
                    </div>
                    <div className="posts__adding">
                        <Editor/>
                    </div>
                </div>
            </div>
        );
    }
}

