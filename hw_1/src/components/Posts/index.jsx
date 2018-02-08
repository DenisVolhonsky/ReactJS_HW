import React from 'react';
import './style.css'

class Posts extends React.Component {
    render() {
        const {title, text, rating, genre} = this.props;
        return (
            <div className="Posts">
                <h3>{title}</h3>
                <button className="Delete-btn">Delete</button>
                <p>{text}</p>
                <span>{rating}</span>
                <div>{genre}</div>
            </div>
        );
    }
}

export default Posts;