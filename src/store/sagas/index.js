import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* asyncInput(action){
    try {
        yield axios.post('https://api.test.01cloud.dev/user/login',{
            email: action.email,
            password: action.password
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })     
        yield put({type: "USER_LOGIN_SUCCEEDED", message : "LOGIN SUCCESSFUL"});
     } catch (e) {
        yield put({type: "USER_LOGIN_FAILED", message: "LOGIN UNSUCCESSFUL"});
     }
}

export default function* submitFormData() {
    yield takeEvery("FORM_SUBMIT", asyncInput)
}