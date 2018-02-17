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
    // onAddTodo = () => {
    //     this.setState({
    //         id: v4(),
    //         title: '',
    //         text: 'Брюс Уэйн',
    //         rating: 3,
    //     //    genre: ['драма']
    //     });

       // console.log(this.state);
       //  let posts1;
       //  posts1 = posts;
       //  console.log(posts1);
       //  posts1 = [...posts1, this.state];
       //  console.log(posts1);
       //  console.log( typeof posts1);



    render() {
      // const {title} = this.state;
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    <div className="posts__body">
                        {this.state.allPosts.map(post => <Posts key={post.id} {...post}/>)}
                    </div>
                    <div className="posts__adding">
                        <Editor />
                    </div>
                </div>
            </div>
        );
    }

}