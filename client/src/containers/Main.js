import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import ActivitiesContainer from './ActivitiesContainer'
import ViewContainer from './ViewContainer.js'
import UserEventsContainer from './UserEventsContainer.js'
import CreateActivity from '../components/CreateActivity.js'
import LogIn from '../components/LogIn.js'
import SignUp from '../components/SignUp.js'

const Main = (props) => {
  return (
    <div>
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
    </Switch> 
      </div>
  )
}

export default withRouter(connect(null, null)(Main));
