const initialState = {
    email : '',
    password: '',
    message: '',
    failMessage: '',
    isAuth: false,
    aboutUsEmail: '',
    aboutUsPhoneNo: '',
    aboutUsWebsite: ''
}

const reducer = ( state=initialState, action ) => 
{
    if(action.type === 'CHANGE')
    {
       return {
           ...state,
           [action.name] : action.value
       }
    }
    if(action.type === 'USER_LOGIN_SUCCEEDED'){
        return {
            ...state,
            message : action.message,
            email: action.email,
            password: action.password,
            isAuth: true
        }
    }
    if(action.type === 'USER_LOGIN_FAILED'){
        return {
            ...state,
            failMessage : action.message
        }
    }
    if(action.type === 'MESSAGE_FROM_ABOUT_US'){
        return {
            ...state,
            aboutUsEmail:  action.aboutUsEmail,
            aboutUsPhoneNo: action.aboutUsPhoneNo,
            aboutUsWebsite: action.aboutUsWebsite 
        }
    }
    return state;
};

export default reducer;