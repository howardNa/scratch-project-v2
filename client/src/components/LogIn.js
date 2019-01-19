import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/LogIn.css'

const LogIn = () => {
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

        <button id="sign-in-button">Sign in</button>

    </div>
</div>
    
  )
}

export default LogIn;

