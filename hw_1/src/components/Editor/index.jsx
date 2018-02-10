import React from 'react';
import './style.css';

class Editor extends React.Component {
    render() {
        return(
            <form className="form">
                <label className="all_labels" htmlFor="title">Введите название фильма:</label>
                <input type="text" className="form__title" id="title" tabIndex="1" autoFocus/>
                <label className="all_labels" htmlFor="text">Введите описание фильма:</label>
                <textarea className="form__text" id="text" cols="35" rows="10" tabIndex="2"></textarea>
                <label className="all_labels" htmlFor="rate">Выберите рейтинг фильма:</label>
                <select name="rate" id="rate" className="form__rate">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label className="all_labels" htmlFor="genre">Выберите жанр фильма:</label>
                <select id="genre" className="form__genre" multiple size="10">
                    <option value="фантастика">фантастика</option>
                    <option value="драма">драма</option>
                    <option value="приключения">приключения</option>
                    <option value="мелодрама">мелодрама</option>
                    <option value="семейный">семейный</option>
                    <option value="вестерн">вестерн</option>
                    <option value="триллер">триллер</option>
                    <option value="ужасы">ужасы</option>
                    <option value="комедия">комедия</option>
                    <option value="боевик">боевик</option>
                </select>
                <p className="form__note">* Вы можете выбрать несколько жанров используя (ctrl)</p>
                <button type="submit" className="form__submit">Сохранить</button>
            </form>
        );
    }
}

export default Editor;