import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import UserProfile from '../components/UserProfile.js';
import UserEventsComponent from '../components/UserEventsComponent.js';

const mapStateToProps = store => ({
  interestedInActivity: store.activities.interestedInActivity
});

const mapDispatchToProps = dispatch => ({


});

const UserEventsContainer = (props) => {
  return (
    <div>
      <UserProfile />
      <UserEventsComponent interestedInActivity={props.interestedInActivity} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer));