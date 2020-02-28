
export const LOGIN_CHANGE_USERNAME_TEXT = 'LOGIN_CHANGE_USERNAME_TEXT';
export const LOGIN_CHANGE_PASSWORD_TEXT = 'LOGIN_CHANGE_PASSWORD_TEXT';
export const GET_TOKEN = 'GET_TOKEN';
export const CHANGE_AUTH = 'CHANGE_AUTH'

export const setUsernameText = (username) => ({
    type: LOGIN_CHANGE_USERNAME_TEXT,
    payload: username
})

export const setPasswordText = (password) => ({
    type: LOGIN_CHANGE_PASSWORD_TEXT,
    payload: password
})

export const setToken = (token) =>({
    type: GET_TOKEN,
    payload: token
})

export const setAuth = (auth) =>({
    type: CHANGE_AUTH,
    payload: auth
})