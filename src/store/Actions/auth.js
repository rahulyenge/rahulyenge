import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};


export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authUser = (loginData) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://reqres.in/api/login', loginData)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(response.data.token))

            }).catch(error => {
                dispatch(authFail(error));
            });

    }
}

export const authCheckState = () => {

    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());

        } else {

            dispatch(authSuccess(token));
        }

    };
};


