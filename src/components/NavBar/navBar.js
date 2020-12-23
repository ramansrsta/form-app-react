import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Trans } from 'react-i18next';

import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
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

const NavBar = (props) => {

    const classes = useStyles()

    return (
        <>
            <MenuList className={classes.list}>
                <FormControl className={classes.formControl}>
                    <Select
                    value={props.value} 
                    onChange={props.onChange} 
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="nep">Nepali</MenuItem>
                    </Select>
                </FormControl>

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
        </>
    );
};

export default NavBar