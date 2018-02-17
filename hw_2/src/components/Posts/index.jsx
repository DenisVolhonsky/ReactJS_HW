import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default class Posts extends React.Component {

    ///// определяем типы для пропов
    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        //rating: PropTypes.number.isRequired,
        //genre: PropTypes.array.isRequired
        //todos: PropTypes.arrayOf(PropTypes.string.isRequered).isRequired
    }

    render() {
        const {title, text, rating, genre} = this.props;

        return (
            <div className="posts">
                <h3><a className="posts__link" href="">{title}</a></h3>
                <p className="post__text">{text}</p>
                <span className="posts__rating">Rating: {rating}/10</span>
                <ul className="genre__list">
                    {genre.map(item => <li className="genre__item" key={item}>{item}</li>)}
                </ul>
                <span className="delete-btn"></span>
            </div>
        );
    }
}



