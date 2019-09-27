import './scss/custom.scss';
import './scss/defaultVariables.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// Redux components
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import persistCombinedReducers from "./js/store/reducers/index";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fontawesome';

require('dotenv').config()

const store = createStore(persistCombinedReducers, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
