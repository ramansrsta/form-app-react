import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {

    const [ formData, setFormData] = useState({
      email : '',
      password: ''
    });

    const handleSubmit = e => {
      e.preventDefault();
      setFormData({
        email: '',
        password: ''
      })
    }

    const onChangeHandler = event => {
      setFormData({
        [event.target.name] : event.target.value
      })
    }

    const useStyles = makeStyles(() => ({
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
    }));

    const classes = useStyles();

    return (
      <div className={ App }>
        <h1 className={classes.header}> Login Page </h1>
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            required
            id="standard-email-input"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
          />

          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
          />
          
          <Button type="submit" className={classes.button} variant="contained" color="primary">
             Submit
          </Button>
        </form>
      </div>
    
    );
  }

export default App;
