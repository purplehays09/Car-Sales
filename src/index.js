import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {carReducer} from './reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

//1. Dependencies, 2. Store, 3. Provider,  4, Connect, 5. mapState to props

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, added:false },
      { id: 2, name: 'Racing detail package', price: 1500, added:false },
      { id: 3, name: 'Premium sound system', price: 500, added:false },
      { id: 4, name: 'Rear spoiler', price: 250, added:false }
    ]
  };
  


const store = createStore(carReducer,initialState)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, rootElement);
