import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import createStore from './redux/create.js';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


let store = createStore();

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
     document.getElementById('root')); 