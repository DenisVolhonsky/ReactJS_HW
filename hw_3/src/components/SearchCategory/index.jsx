import React from 'react';
import './style.css'

const SearchCategory = ({}) => {
    // let input = '';

    // const onFormSubmit = (event) => {
    //     event.preventDefault();  // denied sending form
    //     // if(input.value !== ''){   // checking for
    //     //     getWheather(input.value);  // transfering input.value to currentFormSubmit in App.jsx
    //     // }
    //     event.target.reset(); // reset input value after submit
    // }

        return(
            <div className="SearchCategory">
                <button className="SearchCategory__btn">Popular</button>
                <button className="SearchCategory__btn">Top rated</button>
                <button className="SearchCategory__btn">Incoming</button>
            </div>
        );
}

export default  SearchCategory;
