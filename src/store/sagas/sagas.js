import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* asyncInput(action){
    // try {
    //     let successMessage = '';
    //     yield axios.post('https://api.test.01cloud.dev/user/login',{
    //         email: action.email,
    //         password: action.password
    //     }).then(response => {
    //         console.log(response);
    //         successMessage = 'LOGIN SUCCESSFUL';
    //     }).catch(error => {
    //         console.log(error)
    //     }) 
    //     if(successMessage){
    //         yield put({type: "USER_LOGIN_SUCCEEDED", message : successMessage });
    //     }  else {
    //         yield put({type: "USER_LOGIN_FAILED", message: "LOGIN UNSUCCESSFUL EMAIL OR PASSWORD NOT MATCHING"});
    //     } 
    //  } catch (e) {
    //     yield put({type: "USER_LOGIN_FAILED", message: "LOGIN UNSUCCESSFUL EMAIL OR PASSWORD NOT MATCHING"});
    //  }


        const response = yield call(axios.post, 'https://api.test.01cloud.dev/user/login',{
                    email: action.email,
                    password: action.password
                })
        if(response){
            yield put({type: "USER_LOGIN_SUCCEEDED", message : "SUCCESSFUL" });
        }else{
            yield put({type: "USER_LOGIN_FAILED", message: "LOGIN UNSUCCESSFUL EMAIL OR PASSWORD NOT MATCHING"});
        } 
}

export default function* submitFormData() {
    yield takeEvery("FORM_SUBMIT", asyncInput)
}