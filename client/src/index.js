// whenever you don't specify a path to your import
// ...webpack searches for an NPM module in node-modules directory.
// no need to assign to a variable

import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App'
import reducers from './reducers';



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// <App />  jsx tag, reactDom expects a component instance
//  create-react-app created a file index.html
// ....search the file for id='root'
// .... that is the 2nd parm to react dom

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.querySelector('#root')
);
