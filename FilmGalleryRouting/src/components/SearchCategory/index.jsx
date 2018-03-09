import React from 'react';
import './style.css'

const SearchCategory = ({onChangeCategory})=>(
                <div className="SearchCategory">
                    <button className="SearchCategory__btn" onClick={() => onChangeCategory('popular')}>Popular</button>
                    <button className="SearchCategory__btn" onClick={() => onChangeCategory('top_rated')}>Top rated</button>
                    <button className="SearchCategory__btn" onClick={() => onChangeCategory('upcoming')}>Upcoming</button>
                </div>
)

export default SearchCategory;