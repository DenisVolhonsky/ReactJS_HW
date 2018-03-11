import React from 'react';
import html from 'components/Stack/assets/html.svg';
import css from 'components/Stack/assets/css.svg';
import js from 'components/Stack/assets/js.svg';
import react from 'components/Stack/assets/react.svg';
import redux from 'components/Stack/assets/redux.svg';
import router from 'components/Stack/assets/router.svg';
import webpack from 'components/Stack/assets/webpack.svg';
import './style.css';

const Stack = () => {
    return (
        <div>
            <ul className="StackList">
                <li className="StackList__item">
                    <img className="StackList__icon" src={html} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={css} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={js} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={react} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={redux} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={router} alt=""/>
                </li>
                <li className="StackList__item">
                    <img className="StackList__icon" src={webpack} alt=""/>
                </li>
            </ul>
        </div>
    );
};

export default Stack;
