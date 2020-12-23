import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { messageHandler } from '../../store/actions/actions';

class AboutUsForm extends Component{
    render(){
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
            {({ isValid , dirty }) => (
                <Form>
                    <br></br>
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" /><br></br>
    
                    <label htmlFor="phoneNo">Phone Number</label>
                    <Field name="phoneNo" type="number" />
                    <ErrorMessage name="phoneNo" /><br></br>
    
                    <label htmlFor="website"> Your Personal Website </label>
                    <Field name="website" type="text" />
                    <ErrorMessage name="website" /><br></br>
    
                    <button type="submit" disabled={!(isValid && dirty)}>Submit</button>
                </Form>
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

export default connect(null,mapDispatchToProps)(AboutUsForm);