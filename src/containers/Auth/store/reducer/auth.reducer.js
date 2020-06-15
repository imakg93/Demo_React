import { updateObject } from '../utility/auth.utility';
import * as actionTypes from '../action/actionTypes';

const intialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    redirectPath: '/'
}

const authStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    });
};


const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        loading: false,
        error: null,
    });
};


const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const authLogout = (state) => {
    return updateObject(state, {
        token: null,
        userId: null,
    });
}

const setRedirectPath = (state, action) => {
    return updateObject(state, {
        redirectPath: action.path
    });
}

const closeSnack = (state) => {
    return updateObject(state, {
        error: null
    });
}


const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state);
        case actionTypes.SET_PATH: return setRedirectPath(state, action);
        case actionTypes.CLOSE_SNACK: return closeSnack(state);
        default: return state
    }
}

export default authReducer;