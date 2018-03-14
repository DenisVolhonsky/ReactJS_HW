import React from 'react';
import './style.css'

const btn = ["popular", "top_rated", "upcoming"];

class SearchCategory extends React.Component {
    state = {
        selectBtn: 'popular'
    };

    _handleActiveBtn = event => {
        this.setState({
            selectBtn: event.target.value,
        });
        this.props.onChangeCategory(this.state.selectBtn);
    }


    render() {
        return (
            <div className="SearchCategory">
                {btn.map((item)=> (
                item === this.state.selectBtn ?
                    (<button
                            key={item}
                            className=" SearchCategory__btn SearchCategory__btn--active"
                            onClick={this._handleActiveBtn}
                            value={item}>
                            {item}
                    </button>)
                    :
                    (<button
                            key={item}
                            className="SearchCategory__btn"
                            onClick={this._handleActiveBtn}
                            value={item}>
                            {item}
                    </button>)
                ))}
            </div>
        );
    }
}

export default SearchCategory;

