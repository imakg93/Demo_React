import authReducer from './auth.reducer';
import * as actionTypes from '../action/actionTypes';

describe('authReducer', () => {
    it('shuld test intial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        });
    });

    it('shuld test auth success', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'Some Token',
            userId: 'Some Id'
        }
        )).toEqual({
            token: 'Some Token',
            userId: 'Some Id',
            loading: false,
            error: null,
            redirectPath: '/'
        });
    });

    it('shuld test AUTH_START', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_START,
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: true,
            error: null,
            redirectPath: '/'
        });
    });

    it('shuld test AUTH_FAIL', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_FAIL,
            error: 'some Error'
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: 'some Error',
            redirectPath: '/'
        });
    });

    it('shuld test AUTH_FAIL', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_LOGOUT
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        });
    });

    it('shuld test AUTH_LOGOUT', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_LOGOUT
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        });
    });
    it('shuld test SET_PATH', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        }, {
            type: actionTypes.SET_PATH,
            path: 'some path'
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: 'some path'
        });
    });

    it('shuld test CLOSE_SNACK', () => {
        expect(authReducer({
            token: null,
            userId: null,
            loading: false,
            error: 'some msg',
            redirectPath: '/'
        }, {
            type: actionTypes.CLOSE_SNACK
        }
        )).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            redirectPath: '/'
        });
    });
})
