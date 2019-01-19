import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavComponent.css'

const NavComponent = () => {
  return (
    <div className="navbar-flex">
      
      <h1 className="nav-logo">Scratch-Logo</h1>

        <div className='nav-links'>      
          <Link className="link" to="/">Activities</Link>
          <Link className="link" to="/profile">Profile</Link>
          <Link className="link" to="/create">Create Activity</Link>
        </div>
    </div>
  )
}

export default NavComponent;