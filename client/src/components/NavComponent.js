import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavComponent.css";

import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";


import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Search from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';

// const NavComponent = () => {
//   return (
//     <div className="navbar-flex">

//       <img className="nav-logo" src="images/logo.png"></img>

//       {/* <h1 className="nav-logo">Let's Go!</h1> */}

//         <div className='nav-links'>
//           <Link className="link" to="/">Activities</Link>
//           <Link className="link" to="/profile">Profile</Link>
//           <Link className="link" to="/create">Create Activity</Link>
//           <Link className="link" to="/signup">Sign Up</Link>
//           <Link className="link" to="/login">Log in</Link>
//         </div>
//     </div>
//   )
// }

const NavComponent = (props) => {
  return (
    <div className="grid-container">
      <div className="logo">
        <img className="logo-img" src="images/goplay-logo.jpg" />
      </div>
      <div className="search-bar">
      <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="What would you like to do?" onChange={props.handleChange} onKeyPress={props.handleSearch} style={{width: 350, color: 'orange' }} />
          </Grid>
        </Grid>
      </div>
      <div className="icons">
        <Link to="/create" style={{ textDecoration: 'none' }}><Button variant="outlined">Create</Button></Link>
        <Link to="/profile"><img className="profile-icon" src='images/acc-icon.png' /></Link>
      </div>
    </div>
  );
};

export default NavComponent;
