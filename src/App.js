import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {

    const [ formData, setFormData] = useState({
      email : '',
      password: '',
    });

    const [errorState,errorStateChanger] = useState(false)

    const handleSubmit = e => {
      e.preventDefault();
      setFormData({
        ...formData,
        email: '',
        password: ''
      })
    }

    const onChangeHandler = event => {
      if(event.target.value.length < 8 && event.target.name === 'password'){
        errorStateChanger(true);
      }else{
        errorStateChanger(false);
      }
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
    }

    const useStyles = makeStyles((theme) => ({
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
      <div>
        <h1 className={classes.header}> Login Page </h1>
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            required
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
          />

          <TextField
            required
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            error = {errorState}
            helperText = { errorState ? 'Password should be more than 8 Chars ' : false}
          />
          
          <Button type="submit" className={classes.button} variant="contained" color="primary">
             Submit
          </Button>
        </form>
      </div>
    
    );
  }

export default App;
