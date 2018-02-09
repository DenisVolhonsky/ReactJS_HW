import React from 'react';
import './style.css';

class Editor extends React.Component {
    render() {
        return(
            <div className="editor">
                <input type="text" name="" id="" placeholder="title"/>
                <input type="text" name="" id="" placeholder="text"/>
                <select name="rate" className="editor__rate">

                </select>
            </div>
        );
    }
}

export default Editor;