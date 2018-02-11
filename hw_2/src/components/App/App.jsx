import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'posts.js';
import Editor from "../Editor/index";

console.log(posts);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        <Posts
                            {...posts[0]}
                        />
                        <Posts
                            {...posts[1]}
                        />
                        <Posts
                            {...posts[2]}
                        />
                        <Posts
                            {...posts[3]}
                        />
                        <Posts
                            {...posts[4]}
                        />
                        <Posts
                            {...posts[5]}
                        />
                        <Posts
                            {...posts[6]}
                        />
                        <Posts
                            {...posts[7]}
                        />
                        <Posts
                            {...posts[8]}
                        />
                        <Posts
                            {...posts[9]}
                        />
                    </div>
                    <div className="posts__adding">
                        <Editor/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
