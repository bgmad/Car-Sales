import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer, initialState } from './reducers/reducer';

// import the Provider and wrap the App comp. with thi <Proveder>
//      pass a 'store' attrib. and pass it the const store declared with creatStore

// import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer);

/* store is an object which has a getState method that we can use to retrieve a centralised state for the app*/

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, rootElement);
