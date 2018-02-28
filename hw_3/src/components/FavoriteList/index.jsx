import React from 'react';
// import PropTypes from 'prop-types';
import FavoriteItem from 'components/FavoriteItem';
import './style.css';

const FavoriteList = ({items, onClickDel}) => {
    return(
        <div className="favorite">
            <p className="favorite__title">Favorite list</p>
            {items.map(item => <FavoriteItem key={item.id} {...item} onClickDel={onClickDel}/>)}
        </div>
    );
}

// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }

export default FavoriteList;
