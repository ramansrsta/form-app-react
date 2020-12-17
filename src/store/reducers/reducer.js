const initialState = {
    email : '',
    password: '',
    message: ''
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
            message : action.message
        }
    }
    if(action.type === 'USER_LOGIN_FAILED'){
        return {
            ...state,
            message : action.message
        }
    }
    return state;
};

export default reducer;