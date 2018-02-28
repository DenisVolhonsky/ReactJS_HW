import React from 'react';
import './style.css'

const SearchField = ({onChangeFilm}) => {

    let input = '';

    const onFormSubmit = (event) => {
        event.preventDefault();  // denied sending form
        if(input.value !== ''){   // checking for
            console.log(input.value);
            onChangeFilm(input.value);  // transfering input.value to currentFormSubmit in App.jsx
        }
        event.target.reset(); // reset input value after submit
    }

        return(
            <form className="SearchField" onSubmit={onFormSubmit}>
                <input className="SearchField__input" type="text" ref={node => (input=node)}/>
                <button className="SearchField__btn">Enter</button>
            </form>
        );
}

export default  SearchField;
