import './App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        marginTop: '3%',
        marginLeft: '20%',
        padding: '12px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
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
        email : '',
        password: '',
        error: false
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
          email : '',
          password: '',
          errorState: false
      })
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
      this.setState({
          [name] : value
      })
    }
   
   render(){
    const { classes } = this.props;
    return (
        <div>
          <h1 className={classes.header}> Login Page </h1>
          <form className={classes.root} autoComplete="off" onSubmit={(event) =>this.props.submitHandler(event)}>
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              value={this.props.email}
              onChange={this.onChangeHandler}
            />
  
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              value={this.props.password}
              onChange={this.onChangeHandler}
              error = {this.props.errorState}
              helperText = { this.props.errorState ? 'Password should be more than 8 Chars ' : false}
            />
            
            <Button type="submit" className={classes.button} variant="contained" color="primary">
               Submit
            </Button>
          </form>
        </div>
      );
   }
  }

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    errorState : state.errorState
  };
}

const matchDispatchToProps = dispatch => {
  return {
    submitHandler: (event) => dispatch({ type: 'FORM_SUBMIT',value:event})
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(App));