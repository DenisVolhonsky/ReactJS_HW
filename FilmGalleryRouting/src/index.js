import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'index.css'
import App from 'components/App/App'

const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter basename="/React_JS_Portfolio/FilmGalleryRouting/build">
        <App/>
    </BrowserRouter>
) , root);

registerServiceWorker();