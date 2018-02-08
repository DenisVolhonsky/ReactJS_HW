import React from 'react';
import Header from 'components/Header';
import './App.css';
import Posts from "../Posts/index";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="Posts-body">
                    <Posts
                        title='Star Wars'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        rating='1/10'
                        genre='Action'

                    />
                    <Posts
                        title='Star Wars'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        rating='1/10'
                        genre='Action'

                    />
                    <Posts
                        title='Star Wars'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        rating='1/10'
                        genre='Action'

                    />
                    <Posts
                        title='Star Wars'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        rating='1/10'
                        genre='Action'

                    />
                    <Posts
                        title='Star Wars'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        rating='1/10'
                        genre='Action'

                    />
                </div>
            </div>
        );
    }
}

export default App;

