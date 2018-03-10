import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PageMovies/PostsItem';
import './style.css'

const Posts = ({items, onClickAdd}) => {
    if(items.length === 0){
        return (
            <div className="Posts">
                <p className="Posts__empty">Nothing find!!! Try again...</p>
            </div>
        )
    }
    else{
        return (
            <div className="Posts">
                {items.map(post => <PostsItem key={post.id} {...post} onClickAdd={onClickAdd}/>)}
            </div>
        )
    }

}


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






