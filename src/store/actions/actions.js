export const CHANGE = 'CHANGE';
export const FORM_SUBMIT = 'FORM_SUBMIT';



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