import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App'
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

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
