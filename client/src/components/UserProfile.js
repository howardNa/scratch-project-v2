import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
        <div className="user-info">
            <img className="user-img" src='../../images/byron-img.jpg'></img>

            <div className="user-info-column">
                <h3 className="user-info-row">Byron Inocencio</h3>
                <p className="user-info-row"><i>byronisonlyKindaKoo</i></p>
                <h4 className="user-info-row">June 30 1991</h4>
            </div>
        </div>
    </div>
    
  )
}

export default UserProfile;