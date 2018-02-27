import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import {fetchData} from 'API.js';
// import Editor from "../Editor/index";

export default class App extends React.Component {
    state = {
        allPosts: []//posts
    }

    // onAddTodo = todo => {
    //     this.setState({
    //         allPosts: [...this.state.allPosts, todo]
    //     });
    // }

    // onDeleteTodo = id => {
    //     this.setState({
    //        allPosts: this.state.allPosts.filter(post => post.id !== id )
    //     });
    // }


    //////////////////////////////
    componentWillMount(){
        fetchData().then(data => {
            this.setState({
                allPosts: data
            });
        });
    }

    //////////////////////////////

    render() {

       const {allPosts} = this.state;
        console.log(allPosts);
        return (
            <div className="container">
                <Header/>
                <div className="posts__container">
                    {/*<Editor/>*/}
                    <Posts items={allPosts}/>
                </div>
            </div>
        );
    }
}