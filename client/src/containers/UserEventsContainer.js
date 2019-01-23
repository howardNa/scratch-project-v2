import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import UserProfile from '../components/UserProfile.js';
import UserEventsComponent from '../components/UserEventsComponent.js';

const mapStateToProps = store => ({
  interestedInActivity: store.activities.interestedInActivity,
  confirmedActivity: store.activities.confirmedActivity
});

const mapDispatchToProps = dispatch => ({

  viewActivity: (e) => {
    dispatch(actions.viewActivity(parseInt(e.target.id)))
  },

  deleteActivity: (e) => {
    dispatch(actions.deleteActivity(parseInt(e.target.id)))
  },

  notGoing: (e) => {
    console.log('here is not going e.target after clicking not going', e.target)
    dispatch(actions.notGoing(parseInt(e.target.id)))
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
          confirmedActivity={this.props.confirmedActivity}
          interestedInActivity={this.props.interestedInActivity} 
          viewActivityPage={this.viewActivityPage}
          viewActivity={this.props.viewActivity}
          deleteActivity={this.props.deleteActivity}
          notGoing={this.props.notGoing}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer));