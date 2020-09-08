import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

//1. Dependencies, 2. Store, 3. Provider,  4, Connect, 5. mapState to props

const initialState = {}
function reducer(){
    return{
        title:''
    }
}

const store = createStore(reducer,initialState)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, rootElement);
