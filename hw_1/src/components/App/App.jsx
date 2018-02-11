import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'posts.js';
import Editor from "../Editor/index";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        <Posts
                            title={posts[0].title}
                            text={posts[0].text}
                            rating={posts[0].rating}
                            genre={posts[0].genre}
                        />
                        <Posts
                            title={posts[1].title}
                            text={posts[1].text}
                            rating={posts[1].rating}
                            genre={posts[1].genre}
                        />
                        <Posts
                            title={posts[2].title}
                            text={posts[2].text}
                            rating={posts[2].rating}
                            genre={posts[2].genre}
                        />
                        <Posts
                            title={posts[3].title}
                            text={posts[3].text}
                            rating={posts[3].rating}
                            genre={posts[3].genre}
                        />
                        <Posts
                            title={posts[4].title}
                            text={posts[4].text}
                            rating={posts[4].rating}
                            genre={posts[4].genre}
                        />
                        <Posts
                            title={posts[5].title}
                            text={posts[5].text}
                            rating={posts[5].rating}
                            genre={posts[5].genre}
                        />
                        <Posts
                            title={posts[6].title}
                            text={posts[6].text}
                            rating={posts[6].rating}
                            genre={posts[6].genre}
                        />
                        <Posts
                            title={posts[7].title}
                            text={posts[7].text}
                            rating={posts[7].rating}
                            genre={posts[7].genre}
                        />
                        <Posts
                            title={posts[8].title}
                            text={posts[8].text}
                            rating={posts[8].rating}
                            genre={posts[8].genre}
                        />
                        <Posts
                            title={posts[9].title}
                            text={posts[9].text}
                            rating={posts[9].rating}
                            genre={posts[9].genre}
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
