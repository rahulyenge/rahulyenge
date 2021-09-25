import axios from 'axios'
import * as actionTypes from './actionTypes'


export const regStart = () => {
    return {
        type: actionTypes.REG_START
    };
};

export const regSuccess = (token, userId) => {
    return {
        type: actionTypes.REG_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const regFail = (error) => {
    return {
        type: actionTypes.REG_FAIL,
        error: error
    };
};

export const regSt = (error) => {
    return {
        type: actionTypes.REG_ST,
    };
};

export const resetRegSt = () => {
    return dispatch => {
        dispatch(regSt());
    };
}


export const register = (userData) => {
    return dispatch => {
        // const userDataApi = {
        //     email: userData.email,
        //     password: userData.password
        // }
        dispatch(regStart());
        axios.post('https://reqres.in/api/register', userData)
            .then(response => {
                dispatch(regSuccess(response.data.token, response.data.id))
            })
            .catch(error => {
                dispatch(regFail(error));
            });
    };
}


