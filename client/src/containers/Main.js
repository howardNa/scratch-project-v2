import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import ActivitiesContainer from './ActivitiesContainer'
import ViewContainer from './ViewContainer.js'
import UserEventsContainer from './UserEventsContainer.js'
import CreateActivity from '../components/CreateActivity.js'
import LogIn from '../components/LogIn.js'
import SignUp from '../components/SignUp.js'
import '../styles/Main.css';


const Main = (props) => {

  return (
    <div className="main">
      <Switch>
        <Route
          exact path='/'
          component={ActivitiesContainer}
        />
         <Route
          exact path='/activity/:id'
          component={ViewContainer}
        />
        <Route
          exact path='/profile'
          component={UserEventsContainer}
        />
        <Route
          exact path='/create'
          component={CreateActivity}
        />
        <Route
          exact path='/signup'
          component={SignUp}
        />
        <Route
          exact path='/login'
          component={LogIn}
        />
        
    </Switch> 
      </div>
  )
}

export default withRouter(connect(null, null)(Main));
