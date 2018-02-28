import React from 'react';
import './style.css'

const PostsItem = ({id, title, overview, poster_path, vote_average, release_date, onClickAdd}) => ( // сразу деструктуризируем props
    <div className="PostsItem">
        <div className="Popularity">{vote_average}</div>
        <img className="PostsItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
        <div className="Title">{title}</div>
        <div className="Overview">{overview.slice(0, 120)+'...'}</div>
        <div className="Rate">{release_date}</div>
        <button className="Add" onClick={()=> onClickAdd({id, title, release_date, vote_average, poster_path})}>+</button>
    </div>
);

export default PostsItem;










