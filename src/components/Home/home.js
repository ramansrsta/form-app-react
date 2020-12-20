import React, { Component } from 'react';
import { connect } from 'react-redux';

import santa from '../../assets/santa.jpg';



class Home extends Component { 
    render() {
        return (
           <div style={{ marginLeft:'5%', textAlign:'center'}}>
               <h1>User Details page</h1>
               <img src={santa} alt="Santa" width="70px" height="70px" />
               <p> Email : {this.props.email} </p>
               <p> Name : Raman Shrestha </p>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email : state.email
    }
}

export default connect(mapStateToProps,null)(Home);