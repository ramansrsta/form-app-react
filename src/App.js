import './App.css';
import React, { Component, Fragment } from 'react';


import Home from './components/Home/home';
import AboutUs from "./components/AboutUs/aboutUs";
import ContactUs from './components/ContacUs/contactUs';
import NavBar from './components/NavBar/navBar';
import Login from './components/Login/login';


import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';

import { change, formSubmit } from './store/actions/actions';

import { Route, Switch, Redirect } from 'react-router-dom';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { withTranslation } from 'react-i18next';



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
      redirect: false,
      value: "en"
    }

    langChanger = (event) => {
      let newlang = event.target.value;
      this.setState({ value: newlang });
      this.props.i18n.changeLanguage(newlang);
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
              <Login 
              headerClass={classes.header}
              messageAlert={messageAlert}
              formClass={classes.root}
              submitHandler={this.handleSubmit}
              email={this.props.email}
              changeHandler={this.onChangeHandler}
              password={this.props.password}
              errorState={this.state.errorState}
              renderRedirect={this.renderRedirect}
              buttonClass={classes.button}
               /> : 
            <Fragment>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/contact-us" component={ContactUs} />
              </Switch>
              <div className="radio">
                {/*
                 for testing purpose
                 <div>
                  {t('Welcome')}
                </div>
                <Trans i18nKey="Welcome">
                  Welcome
                </Trans> */}

                <hr />
                <FormControl component="fieldset">
                  <FormLabel component="legend"> Language Preference </FormLabel>
                  <RadioGroup aria-label="Language" name="lan" value={this.state.value} onChange={this.langChanger}>
                    <FormControlLabel value="en" control={<Radio />} label="English" />
                    <FormControlLabel value="nep" control={<Radio />} label="Nepali" />
                  </RadioGroup>
                </FormControl>
              </div>
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

export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(withTranslation()(App)));