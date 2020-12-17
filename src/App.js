import './App.css';
import React, { Component } from 'react';
import TextFieldComponent from './components/TextField/TextField';
import ButtonComponent from './components/Button/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

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
      errorState: false
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.submitHandler(this.props.email,this.props.password)
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
      messageAlert = (<Alert className={classes.alert} severity="info">{this.props.message}</Alert>);
    }
    return (
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
            
            <ButtonComponent type="submit" className={classes.button} variant="contained" color="primary">
               Submit
            </ButtonComponent>
          </form>
        </div>
      );
   }
  }

const mapStateToProps = state => {
  return {
    email : state.email,
    password: state.password,
    message: state.message
  };
}

const matchDispatchToProps = dispatch => {
  return {
    changeHandler: (name,value) => dispatch({type:'CHANGE', name:name, value: value}),
    submitHandler: (email,password) => dispatch({type:'FORM_SUBMIT', email:email, password:password})
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(App));