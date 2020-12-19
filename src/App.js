import './App.css';
import React, { Component, Fragment } from 'react';

import TextFieldComponent from './components/TextField/TextField';
import ButtonComponent from './components/Button/Button';
import Home from './components/Home/home';
import AboutUs from "./components/AboutUs/aboutUs";
import ContactUs from './components/ContacUs/contactUs';
import NavBar from './components/NavBar/navBar';


import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';

import { change, formSubmit } from './store/actions/actions';

import { Route, Switch, Redirect } from 'react-router-dom';


const styles = theme => ({
    root: {
        marginTop: '3%',
        marginLeft: '20%',
        padding: '12px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
    },
    alert: {
      width: '57%',
      marginLeft: '21%',
    },
    button: {
      marginTop: '3%'
    },
    header: {
      textAlign:'center'
    }
  });
class App extends Component {

    state = {
      errorState: false,
      redirect: false
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.submitHandler(this.props.email,this.props.password)
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
         return <Redirect to='/' />
      }
    }

    onChangeHandler = event => {
      const { name, value } = event.target;
      if(event.target.value.length < 8 && event.target.name === 'password'){
        this.setState({
          errorState: true
        })
      }else{
        this.setState({
          errorState: false
        })
      }
      this.props.changeHandler(name,value)
    }
   
   render(){

    const { classes } = this.props;
    let messageAlert = '';
    if(this.props.message){
      messageAlert = (<Alert className={classes.alert} severity="success">{this.props.message}</Alert>);
    }else if(this.props.failMessage){
      messageAlert = (<Alert className={classes.alert} severity="error">{this.props.failMessage}</Alert>);
    }


  
    
    return (
        <div>
            {
            !this.props.isAuth ?
            <div> 
              <h1 className={classes.header}> Login Page </h1>
              {messageAlert}
              <form className={classes.root} autoComplete="off" onSubmit={this.handleSubmit}>
                <TextFieldComponent
                  required
                  label="Email"
                  type="email"
                  name="email"
                  value={this.props.email}
                  onChange={this.onChangeHandler}
                />
      
                <TextFieldComponent
                  required
                  label="Password"
                  type="password"
                  name="password"
                  value={this.props.password}
                  onChange={this.onChangeHandler}
                  error = {this.state.errorState}
                  helperText = { this.state.errorState ? 'Password should be more than 8 Chars ' : false}
                />

               {this.renderRedirect()}
                
                <ButtonComponent type="submit" className={classes.button} variant="contained" color="primary">
                  Submit
                </ButtonComponent>
              </form>

            </div> : 
            <Fragment>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/contact-us" component={ContactUs} />
              </Switch>
            </Fragment> 
            }

    
        </div>
      );
   }
  }

const mapStateToProps = state => {
  return {
    email : state.email,
    password: state.password,
    message: state.message,
    failMessage: state.failMessage,
    isAuth : state.isAuth
  };
}

const matchDispatchToProps = dispatch => {
  return {
    changeHandler: (name,value) => dispatch(change(name,value)),
    submitHandler: (email,password) => dispatch(formSubmit(email,password))
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(App));