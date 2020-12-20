import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './contactus.css';

class ContactUs extends Component {
    render(){
        return (
            <Fragment>
                <div className="message">
                    <h1> {this.props.aboutMessage} </h1>
                    <p> by {this.props.email}</p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        aboutMessage : state.aboutmessage,
        email: state.email
    }
}

export default connect(mapStateToProps,null)(ContactUs);