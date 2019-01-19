import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import UserProfile from '../components/UserProfile.js';
import UserEventsComponent from '../components/UserEventsComponent.js';

const UserEventsContainer = (props) => {
  return (
    <div>
      <UserProfile />
      <UserEventsComponent />
    </div>
  )
}

export default withRouter(connect(null, null)(UserEventsContainer));