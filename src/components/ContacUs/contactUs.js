import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './contactus.css';

class ContactUs extends Component {
    render(){
        return (
            <Fragment>
                <div className="message">
                    <h1> Phone No: {this.props.aboutUsPhoneNo} </h1>
                    <p> Email: {this.props.aboutUsEmail}</p>
                    <p> Webiste: {this.props.aboutUsWebsite}</p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        aboutUsEmail : state.aboutUsEmail,
        aboutUsPhoneNo: state.aboutUsPhoneNo,
        aboutUsWebsite: state.aboutUsWebsite
    }
}

export default connect(mapStateToProps,null)(ContactUs);