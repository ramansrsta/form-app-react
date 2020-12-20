import React from 'react';
import TextFieldComponent from '../../components/TextField/TextField';
import ButtonComponent from '../../components/Button/Button';

const Login = props => {
    
    return (
        <div>
            <h1 className={props.headerClass}> Login Page </h1>
            {props.messageAlert}
            <form className={props.formClass} autoComplete="off" onSubmit={props.submitHandler}>
            <TextFieldComponent
                required
                label="Email"
                type="email"
                name="email"
                value={props.email}
                onChange={props.changeHandler}
            />

            <TextFieldComponent
                required
                label="Password"
                type="password"
                name="password"
                value={props.password}
                onChange={props.changeHandler}
                error = {props.errorState}
                helperText = { props.errorState ? 'Password should be more than 8 Chars ' : false}
            />

            {props.renderRedirect()}
            
            <ButtonComponent type="submit" className={props.buttonClass} variant="contained" color="primary">
                Submit
            </ButtonComponent>
            </form>
    </div>
    );
};

export default Login;