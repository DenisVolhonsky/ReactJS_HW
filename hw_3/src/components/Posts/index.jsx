import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Posts = ({id, title, text, rating, genre, onTodoClick}) => ( // сразу деструктуризируем props
    <div className="posts">
        <h3><a className="posts__link" href="">{title}</a></h3>
        <p className="post__text">{text}</p>
        <span className="posts__rating">Rating: {rating}/10</span>
        <ul className="genre__list">
            {genre.map(item => <li className="genre__item" key={item}>{item}</li>)}
        </ul>
        <span className="delete-btn" onClick={()=>onTodoClick(id)}></span>
    </div>
);

Posts.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default Posts;

