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

                <label className="all_labels" htmlFor="rate">Рейтинг фильма:</label>
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

                <p className="all_labels">Выберите жанр фильма:</p>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g1" value="фантастика"/>
                    <label htmlFor="g1">фантастика</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g2" value="драма"/>
                    <label htmlFor="g2">драма</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g3" value="приключения"/>
                    <label htmlFor="g3">приключения</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g4" value="мелодрама"/>
                    <label htmlFor="g4">мелодрама</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g5" value="семейный"/>
                    <label htmlFor="g5">семейный</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g6" value="вестерн"/>
                    <label htmlFor="g6">вестерн</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g7" value="триллер"/>
                    <label htmlFor="g7">триллер</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g8" value="ужасы"/>
                    <label htmlFor="g8">ужасы</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g9" value="комедия"/>
                    <label htmlFor="g9">комедия</label>
                </div>
                <div className="form__genre">
                    <input type="checkbox" name="" id="g10" value="боевик"/>
                    <label htmlFor="g10">боевик</label>
                </div>
                <p className="form__note">* Вы можете выбрать несколько жанров используя (ctrl)</p>

                <button type="submit" className="form__submit">Сохранить</button>
            </form>
        );
    }
}

export default Editor;