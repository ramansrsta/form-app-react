import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { messageHandler } from '../../store/actions/actions';


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
class AboutUs extends Component {
    state = {
        message : ''
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitMessage(this.state.message)
        this.props.history.push('/contact-us');
        console.log(this.props);
    }

    onClickHandler = (event) => {
        this.setState({
            message : event.target.value
        })
    }

    render(){
        const { classes } = this.props
        return (
            <Fragment>
                <h1 className={classes.header}> About Us </h1>
                <form className={classes.root} autoComplete="off" onSubmit={this.onSubmitHandler}>
                    <TextareaAutosize 
                    aria-label="minimum height"
                    rowsMin={3} 
                    placeholder="Minimum 3 rows" 
                    value={this.state.message}
                    onChange={this.onClickHandler}
                    />

                    <Button type="submit" className={classes.button} variant="contained" color="primary">
                    Submit
                    </Button>
                </form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitMessage: (message) => dispatch(messageHandler(message))
    }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(AboutUs));