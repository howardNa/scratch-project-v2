import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import '../styles/LogIn.css'

const mapStateToProps = store => ({

    //
  });
    
const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => {
        dispatch(actions.signInWithGoogle())
    }
});


class LogIn extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="log-in-container">
                <div className="log-in-box">
                
                    <div className="username-row">
                        <p>Username: </p>
                        <input id="username-field"></input>
                    </div>
    
                    <div className="password-row">
                        <p>Password: </p>
                        <input id="password-field"></input>
                    </div>
    
                    <div className='log-in-row'>
                        <button id="sign-in-button">Log in</button>
                        <a href='auth/google'><img id='google-sign-in-button' src="../../images/google-sign-in.png"></img></a>
                    </div>
    
                </div>
            </div>
                
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
