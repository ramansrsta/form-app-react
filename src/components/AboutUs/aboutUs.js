import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { messageHandler } from '../../store/actions/actions';

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
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

class AboutUsForm extends Component{
    
    render(){
        const { classes } = this.props;
        return (
            <Formik
            initialValues={{
                email: '',
                phoneNo: '',
                website: ''
            }}
    
            validationSchema = {
                Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                    phoneNo: Yup.string().required('Required')
                    .length(10, 'This field has to be exactly 10 numbers!'),
                    website: Yup.string().url().required('Required')
                })
            }
            onSubmit = {({email,phoneNo,website}) => {
               this.props.onSubmitMessage(email,phoneNo,website);
               this.props.history.push('/contact-us');
            }}
            >
            {({ isValid , dirty, handleChange,phoneNo, website, errors, email, handleSubmit }) => (
                <>
                <h1 className={classes.header}> About Us </h1>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {/* 
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" /><br></br> 
                    
                    <label htmlFor="phoneNo">Phone Number</label>
                    <Field name="phoneNo" type="number" />
                    <ErrorMessage name="phoneNo" /><br></br>
    
                    <label htmlFor="website"> Your Personal Website </label>
                    <Field name="website" type="text" />
                    <ErrorMessage name="website" /><br></br>
                    */}


                    <TextField
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />

                    <TextField
                        id="phoneNo"
                        type="number"
                        name="phoneNo"
                        label="Phone No"
                        value={phoneNo}
                        onChange={handleChange}
                        error={Boolean(errors.phoneNo)}
                        helperText={errors.phoneNo}
                    />

                    <TextField
                        id="website"
                        type="text"
                        name="website"
                        label="Website"
                        value={website}
                        onChange={handleChange}
                        error={Boolean(errors.website)}
                        helperText={errors.website}
                    />
    
                    <Button className={classes.button} variant="contained" color="primary" type="submit" disabled={!(isValid && dirty)}>Submit</Button>
                </form>
                </>
                )}
    
            </Formik>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitMessage: (email,phoneNo,website) => dispatch(messageHandler(email,phoneNo,website))
    }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(AboutUsForm));