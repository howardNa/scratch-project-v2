import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
        <div className="user-info">
            <img className="user-img" src="../../build/images/anon-user-icon.png"></img>

            <div className="user-info-column">
                <h3 className="user-info-row">Tim Mayfield</h3>
                <p className="user-info-row"><i>tMayfield87</i></p>
                <h4 className="user-info-row">June 7, 1987</h4>
            </div>
        </div>
    </div>
    
  )
}

export default UserProfile;