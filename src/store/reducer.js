const initialState = {
    email : '',
    password: '',
    errorState: false
}

const reducer = ( state=initialState, action ) => {
    if(action.type === 'FORM_SUBMIT'){
        // action.value.preventDefault();
        // this.setState({
        //     email : '',
        //     password: '',
        //     errorState: false
        // })
    }
    return state;
};

export default reducer;