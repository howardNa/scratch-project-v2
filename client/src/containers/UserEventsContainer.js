import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import UserProfile from '../components/UserProfile.js';
import UserEventsComponent from '../components/UserEventsComponent.js';

const mapStateToProps = store => ({
  interestedInActivity: store.activities.interestedInActivity,
  confirmedActivity: store.activities.confirmedActivity,
  createdActivity: store.activities.createdActivity
});

const mapDispatchToProps = dispatch => ({

  viewActivity: (e) => {
    dispatch(actions.viewActivity(parseInt(e.target.id), e.target.getAttribute('status')))
  },

  deleteActivity: (e) => {
    dispatch(actions.deleteActivity(parseInt(e.target.id)))
  },

  notGoing: (e) => {
    dispatch(actions.notGoing(parseInt(e.target.id)))
  },

  unhostActivity: (e) => {
    dispatch(actions.unhostActivity(parseInt(e.target.id)))
  }

});

class UserEventsContainer extends Component {

  constructor(props) {
    super(props)

    this.viewActivityPage = this.viewActivityPage.bind(this);
  }

  viewActivityPage() {
    this.props.history.push('/activity/:id');
  }

  render() {
    return (
      <div>
        <UserProfile />
        <UserEventsComponent 
          createdActivity={this.props.createdActivity}
          confirmedActivity={this.props.confirmedActivity}
          interestedInActivity={this.props.interestedInActivity} 
          viewActivityPage={this.viewActivityPage}
          viewActivity={this.props.viewActivity}
          deleteActivity={this.props.deleteActivity}
          notGoing={this.props.notGoing}
          unhostActivity={this.props.unhostActivity}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer));