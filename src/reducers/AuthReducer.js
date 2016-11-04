import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

// reducer has to return with something different from undefined
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error:  '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            // never modify the state like state.email = action.payload; return state
            // You have to create a brand new object
            return { ...state, email: action.payload }

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
                user: action.payload,
            }

        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed.',
                password: '',
                loading: false
            }

        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            }
        default:
            return state;
    }
}
