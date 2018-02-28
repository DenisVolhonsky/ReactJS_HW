import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';

const FavoriteItem = ({id, title, release_date, vote_average, poster_path, onClickDel}) => (
            <div>
                <img className="FavoriteItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                <div className="FavoriteItem__body">
                    <h3>{title}</h3>
                    <p>{release_date}</p>
                    <p>{vote_average}</p>
                    <button onClick={()=>onClickDel(id)}>-</button>
                </div>
            </div>
);

// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }

export default FavoriteItem;