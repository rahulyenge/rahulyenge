import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    regst: false,
    authst: false
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.REG_ST: return Object.assign({}, state, {
            regst: false
        });
        case actionTypes.REG_START: return Object.assign({}, state, {
            error: null, loading: true
        });
        case actionTypes.REG_SUCCESS: return Object.assign({}, state, {
            // token: action.idToken,
            // userId: action.userId,
            error: null,
            loading: false,
            regst: true

        });
        case actionTypes.REG_FAIL: return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
        case actionTypes.AUTH_START: return Object.assign({}, state, {
            error: null, loading: true, regst: false
        });
        case actionTypes.AUTH_SUCCESS: return Object.assign({}, state, {
            token: action.idToken,
            error: null,
            loading: false,
            authst: true
        })
        case actionTypes.AUTH_FAIL: return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
        case actionTypes.AUTH_LOGOUT: return Object.assign({}, state,
            {
                token: null,
                userId: null,
                authst: false,
                regst: false,

            });
        default:
            return state;
    };
};





export default reducer;

