import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';

const FavoriteItem = ({id, title, release_date, vote_average, poster_path, onClickDel}) => {
    // console.log(typeof release_date, release_date );
    // let release = release_date.substr(0,4);
    return (
        <div className="FavoriteItem">
            <img className="FavoriteItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
            <div className="FavoriteItem__body">
                <h3 className="FavoriteItem__title">{title}</h3>
                <div className="FavoriteItem__release">Release date: {release_date.substr(0,4)}</div>
                <div className="FavoriteItem__vote">Rating: {vote_average}</div>
                <button className="FavoriteItem__btn" onClick={()=>onClickDel(id)}>-</button>
            </div>
        </div>
    )
}



// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }

export default FavoriteItem;