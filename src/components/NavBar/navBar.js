import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    list: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: '2%'
    },
    item: {
        fontWeight: 'bolder'
    }
  }));


const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    return <Redirect to='/' />
}

const NavBar = () => {

    const classes = useStyles()

    return (
        <MenuList className={classes.list}>
            <MenuItem className={classes.item} component={Link} to="/"> Home </MenuItem>
            <MenuItem className={classes.item} component={Link} to="/about-us"> About Us</MenuItem>
            <MenuItem className={classes.item} component={Link} to="/contact-us"> Contact Us</MenuItem>
            <Button type="submit" onClick={handleLogout} className={classes.button} variant="contained" color="primary">
                Logout
            </Button>
        </MenuList> 
    );
};

export default NavBar