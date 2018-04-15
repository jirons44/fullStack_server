import axios from 'axios';

import { FETCH_USER } from './types';

    // redux-thunk automatically passes dispatch so we can call when ready
    // ..i.e. data returned, then send action to reducers

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');


    dispatch({
        type: FETCH_USER,
        payload: res.data }
    );
};