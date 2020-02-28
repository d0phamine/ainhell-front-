import {LOGIN_CHANGE_PASSWORD_TEXT, LOGIN_CHANGE_USERNAME_TEXT, GET_TOKEN, CHANGE_AUTH} from './actions';


const defaultState = {
    username: '',
    password:'',
    token: null,
    auth: false
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
        case GET_TOKEN:
            return{
                ...state,
                token: action.payload
            }
        case CHANGE_AUTH:
            return{
                ...state,
                auth: action.payload
            }
    }

    return state;
}

