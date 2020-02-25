import {LOGIN_CHANGE_PASSWORD_TEXT, LOGIN_CHANGE_USERNAME_TEXT} from './actions';


const defaultState = {
    username: '',
    password:''
}

export const loginReducer = (state = defaultState, action) => {
    console.log(state);
    switch(action.type) {
        case LOGIN_CHANGE_USERNAME_TEXT:
            return {
                ...state,
                username: action.payload
            };
        case LOGIN_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
    }

    return state;
}

