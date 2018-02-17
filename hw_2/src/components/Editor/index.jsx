import React from 'react';
import v4 from 'uuid/v4';
import './style.css';


export default class Editor extends React.Component {
  //  static propTypes = {
        //onFormSubmit: PropTypes.func.isRequired
  //  }
    constructor(){
        super();
        this.checkBox=[];
    }

    _HandleSubmit = event =>{
        event.preventDefault();

        const newPost = {
            id: v4(),
            title: this.inputTitle.value,
            text: this.inputText.value,
            rating:this.inputRating.value,
            genre:[]
        }

        this.checkBox.map(item=>{
            let checkGenre;
            if(item.checked) {
                checkGenre = item.value;
            }
            return newPost.genre.push(checkGenre);
        });

        newPost.genre = newPost.genre.filter(el=>el !== undefined);

        if(newPost.title==='' || newPost.text==='' || newPost.rating==='' || newPost.genre.length===0){
            alert ('Нужно заполнить все поля формы!')
            return;
        }
        else {
            this.props.onFormSubmit(newPost);  // тоже что и onAddTodo(newPost)
            this.form.reset();
        }

        console.log(newPost);
    }

    render() {
        const optionsVal = [1,2,3,4,5,6,7,8,9,10];
        const checkboxVal = ["фантастика","драма","приключения","мелодрама","семейный","вестерн","триллер","ужасы","комедия","боевик"];

        return(
            <div className="posts__adding">
                           <form className="form" onSubmit={this._HandleSubmit} ref={node=>this.form=node}>
                    <label className="all_labels" htmlFor="title">Введите название фильма:</label>
                    <input type="text" className="form__title" tabIndex="1" autoFocus ref={node=>this.inputTitle=node}/>

                    <label className="all_labels" htmlFor="text">Введите описание фильма:</label>
                    <textarea className="form__text" cols="35" rows="10" tabIndex="2"  ref={(node=>this.inputText = node)}></textarea>

                    <label className="all_labels" htmlFor="rate">Рейтинг фильма:</label>
                    <select id="rate" className="form__rate" tabIndex="3" ref={node=>this.inputRating=node}>
                        {optionsVal.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>

                    <p className="all_labels">Выберите жанр фильма:</p>
                    {checkboxVal.map((item, idx)=>
                        <div className="form__genre" tabIndex="4" key={item}>
                            <input type="checkbox" id={`g${idx}`} value={item} ref={node=>this.checkBox[idx]=node}/>
                            <label htmlFor={`g${idx}`}>{item}</label>
                        </div>
                    )}

                    <p className="form__note">* Вы можете выбрать несколько жанров.</p>
                    <button className="form__submit" tabIndex="5">Добавить</button>
                </form>
            </div>
        );
    }
}


