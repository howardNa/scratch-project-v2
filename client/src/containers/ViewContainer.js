import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import DetailsComponent from '../components/DetailsComponent.js';
import GoingComponent from '../components/GoingComponent.js'
import ChatBox from '../components/ChatBox.js';

const mapStateToProps = store => ({
  viewClickedActivity: store.activities.viewActivity,
});

const mapDispatchToProps = dispatch => ({
  // searchForActivities: (activity) => {
  //   dispatch(actions.searchForActivities(activity))
  // },

  // viewActivity: (e) => {
  //   dispatch(actions.viewActivity(parseInt(e.target.id)))
  // }
});

class ViewContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('logging viewClickedActivity: ', this.props.viewClickedActivity)
    return (
      <div>
        <DetailsComponent viewClickedActivity={this.props.viewClickedActivity} />
        <GoingComponent />
        <ChatBox />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewContainer));