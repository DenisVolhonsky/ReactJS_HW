import React from 'react';
import './style.css'

class Posts extends React.Component {
    render() {
        const {title, text, rating, genre} = this.props;
        return (
            <div className="posts">
                <h3><a className="posts__link" href="">{title}</a></h3>
                <p className="post__text">{text}</p>
                <span className="posts__rating">Rating: {rating}</span>
                <ul className="genre__list">
                    <li className="genre__item">{genre}</li>
                </ul>
                <span className="delete-btn"></span>
            </div>
        );
    }
}

export default Posts;