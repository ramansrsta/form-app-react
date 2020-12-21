import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router-dom';


import { Trans } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    list: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: '2%',
      padding: '1%'
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
            <MenuItem className={classes.item} component={Link} to="/">
                <Trans i18nKey="Navigation.home">
                    Home
                </Trans>
            </MenuItem>
            <MenuItem className={classes.item} component={Link} to="/about-us">
                <Trans i18nKey="Navigation.aboutUs">
                    About us
                </Trans>
            </MenuItem>
            <MenuItem className={classes.item} component={Link} to="/contact-us">
                <Trans i18nKey="Navigation.contactUs">
                    Contact us
                </Trans>
            </MenuItem>
            <Button type="submit" onClick={handleLogout} className={classes.button} variant="contained" color="primary">
                <Trans i18nKey="Navigation.logout">
                    Logout
                </Trans>
            </Button>
        </MenuList> 
    );
};

export default NavBar