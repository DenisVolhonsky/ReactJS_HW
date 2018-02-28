import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostsItem';
import './style.css'

// const Posts = ({id, title, text, rating, genre, onTodoClick}) => ( // сразу деструктуризируем props
//     <div className="posts">
//         <h3><a className="posts__link" href="">{title}</a></h3>
//         <p className="post__text">{text}</p>
//         <span className="posts__rating">Rating: {rating}/10</span>
//         <ul className="genre__list">
//             {genre.map(item => <li className="genre__item" key={item}>{item}</li>)}
//         </ul>
//         <span className="delete-btn" onClick={()=>onTodoClick(id)}></span>
//     </div>
// );

const Posts = ({items}) => (
    <div className="Posts">
        {items.map(post => <PostsItem key={post.id} {...post}/>)}
    </div>
);

Posts.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            release_date: PropTypes.string.isRequired
        })
    )
}

export default Posts;





