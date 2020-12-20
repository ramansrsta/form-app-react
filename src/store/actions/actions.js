export const CHANGE = 'CHANGE';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const MESSAGE_FROM_ABOUT_US = 'MESSAGE_FROM_ABOUT_US';



export const change = (name,value) => {
    return {
        type: CHANGE,
        name: name,
        value: value
    }
}

export const formSubmit = (email,password) => {
    return {
        type: FORM_SUBMIT,
        email: email,
        password: password
    }
}

export const messageHandler = (message) => {
    return {
        type: MESSAGE_FROM_ABOUT_US,
        message: message
    }
}