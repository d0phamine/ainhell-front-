import {REGISTER_CHANGE_NAME_TEXT, REGISTER_CHANGE_PASSWORD_TEXT, REGISTER_CHANGE_USERNAME_TEXT, REGISTER_CHANGE_REPEAT_PASSWORD_TEXT} from './actions';

const defaultState = {
    username: '',
    password:'',
    name: '',
    repeatPassword: ''
}

export const registerReducer = (state = defaultState, action) => {
    console.log(state);
    switch(
        action.type
    ){
        case REGISTER_CHANGE_USERNAME_TEXT:
            return {
                ...state,
                username: action.payload
            };
        case REGISTER_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };
        case REGISTER_CHANGE_REPEAT_PASSWORD_TEXT:
            return {
                ...state,
                repeatPassword: action.payload
            };
        case REGISTER_CHANGE_NAME_TEXT:
            return {
                ...state,
                name: action.payload
            };
    }


    return state;
}