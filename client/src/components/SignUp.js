import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/LogIn.css'

const SignUp = () => {
  return (
<div className="log-in-container">
    <div className="log-in-box">

        <div className="username-row">
            <p>First Name: </p>
            <input id="first-name-input"></input>
        </div>

        <div className="username-row">
            <p>Last Name: </p>
            <input id="last-name-input"></input>
        </div>

        <div className="username-row">
            <p>Birthdate: </p>
            <input id="birthdate-input"></input>
        </div>

        <div className="username-row">
            <p>Image URL: </p>
            <input id="image-input"></input>
        </div>
    
        <div className="username-row">
            <p><i><strong>Username: </strong></i></p>
            <input id="username-field"></input>
        </div>

        <div className="password-row">
            <p><i><strong>Password: </strong></i></p>
            <input id="password-field"></input>
        </div>

        <button id="sign-up-button">Sign up</button>

    </div>
</div>
    
  )
}

export default SignUp;