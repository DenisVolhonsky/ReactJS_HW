import React from 'react';
import './style.css'

class Posts extends React.Component {
    render() {
        const {title, text, rating, genre} = this.props;
        return (
            <div className="posts">
                <h3>{title}</h3>
                <p>{text}</p>
                <span>{rating}</span>
                <div>{genre}</div>
                <button className="delete-btn">Delete</button>
            </div>
        );
    }
}

export default Posts;