import React from 'react';
import './style.css'

const PostsItem = ({id, title, overview, poster_path, vote_average, release_date, onClickAdd}) => ( // сразу деструктуризируем props
    <div className="PostsItem">
        <div className="PostsCard">
            <div className="PostsItem__popularity">{vote_average}</div>
            <img className="PostsItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
            <div className="PostsItem_info">
                <div className="PostsItem__title">{title}</div>
                <div className="PostsItem__overview">{overview.slice(0, 120) + '...'}</div>
                <div className="PostsItem__rate">Release date: {release_date.slice(0, 4)}</div>
            </div>
            <button className="PostsItem__add"
                    onClick={() => onClickAdd({id, title, release_date, vote_average, poster_path})}>+
            </button>
        </div>
    </div>
);

export default PostsItem;










