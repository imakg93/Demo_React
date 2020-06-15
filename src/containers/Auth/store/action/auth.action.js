import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken, userId
    };
};

export const closeSnack = () => {
    return {
        type: actionTypes.CLOSE_SNACK
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authExpirationTime = (expirationTime) => {
    console.log('expirationTime', expirationTime);
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, +expirationTime * 1000);
    }
}

export const auth = (email, password, isSignup) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2fVehAzeCiUM86bS9oLsLug7pnFI0iVw';
    if (!isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2fVehAzeCiUM86bS9oLsLug7pnFI0iVw'
    }
    return dispatch => {
        dispatch(authStart());
        axios.post(url, authData).then(res => {
            const expirationDate = new Date(new Date().getTime() + (+res.data.expiresIn) * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(authExpirationTime(res.data.expiresIn));
        }).catch(err => {
            console.log('success', err.response.data.error);
            dispatch(authFail(err.response.data.error))
        });
    };
};

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.SET_PATH,
        path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = localStorage.getItem('expirationDate');
            if (new Date(expirationDate) < new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(authExpirationTime((new Date(expirationDate).getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}

export const onSocialLogin = (user) => {
    return dispatch => {
        const expirationDate = new Date(new Date().getTime() + user._token.expiresAt);
        localStorage.setItem('token', user._token.accessToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', user._profile.id);
        dispatch(authSuccess(user._token.accessToken, user._profile.id));
        //dispatch(authExpirationTime(user._token.expiresAt));
    }
}