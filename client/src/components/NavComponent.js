import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavComponent.css";

import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";


import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

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

const NavComponent = () => {
  return (
    <div className="grid-container">
      <div className="logo">
        <img className="logo-img" src="images/go-logo.jpg" />
      </div>
      <div className="search-bar">
      <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="What would you like to do?" style={{width: 350 }} />
          </Grid>
        </Grid>
      </div>
      <div className="icons">icons</div>
    </div>
  );
};

export default NavComponent;
