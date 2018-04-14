// why index.js  purpose...allow import reducers directory..automatically gets u all the files in directory

import { combineReducers } from 'redux';

import authReducer from './authReducers';

export default combineReducers({
    auth: authReducer
});