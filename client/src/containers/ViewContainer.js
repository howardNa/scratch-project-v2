import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import DetailsComponent from '../components/DetailsComponent.js';
import GoingComponent from '../components/GoingComponent.js'
import ChatBox from '../components/ChatBox.js';

const mapStateToProps = store => ({
  viewClickedActivity: store.activities.viewActivity,
});

const mapDispatchToProps = dispatch => ({
  interestedInActivity: (e) => {
    dispatch(actions.interestedInActivity(e.target))
  },
  confirmActivity: (e) => {
    dispatch(actions.confirmActivity(e.target))
  }
});

const ViewContainer = (props) => {
    return (
      <div>
        <DetailsComponent 
          viewClickedActivity={props.viewClickedActivity} 
          interestedInActivity={props.interestedInActivity}
          confirmActivity={props.confirmActivity}
          />
        <GoingComponent />
        <ChatBox />
      </div>
    )
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewContainer));


