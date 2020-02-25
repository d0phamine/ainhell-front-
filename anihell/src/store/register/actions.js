export const REGISTER_CHANGE_USERNAME_TEXT = 'REGISTER_CHANGE_USERNAME_TEXT';
export const REGISTER_CHANGE_PASSWORD_TEXT = 'REGISTER_CHANGE_PASSWORD_TEXT';
export const REGISTER_CHANGE_REPEAT_PASSWORD_TEXT = 'REGISTER_CHANGE_REPEAT_PASSWORD_TEXT';
export const REGISTER_CHANGE_NAME_TEXT = 'REGISTER_CHANGE_NAME_TEXT';

export const setUsernameText = (username) => ({
    type: REGISTER_CHANGE_USERNAME_TEXT,
    payload: username
})

export const setPasswordText = (password) => ({
    type: REGISTER_CHANGE_PASSWORD_TEXT,
    payload: password
})

export const setRepeatPasswordText = (repeatPassword) => ({
    type: REGISTER_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: repeatPassword
})

export const setNameText = (name) => ({
    type: REGISTER_CHANGE_NAME_TEXT,
    payload: name
})