import './App.css';
import React, { Component } from 'react';
import TextFieldComponent from './components/TextField/TextField';
import ButtonComponent from './components/Button/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
      const formData = {
        email : this.state.email,
        password : this.state.password
      }
      axios.post('https://api.test.01cloud.dev/user/login',formData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      this.setState({
        email: '',
        password: ''
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
          <form className={classes.root} autoComplete="off" onSubmit={this.handleSubmit}>

            <TextFieldComponent
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />

            <TextFieldComponent
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
              error = {this.state.errorState}
              helperText = { this.state.errorState ? 'Password should be more than 8 Chars ' : false}
            />
            
            <ButtonComponent
            type="submit" 
            className={classes.button} 
            variant="contained" 
            color="primary">
               Submit
            </ButtonComponent>

          </form>
        </div>
      );
   }
  }

export default withStyles(styles)(App);