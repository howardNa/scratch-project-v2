import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import UserProfile from '../components/UserProfile.js';
import UserEventsComponent from '../components/UserEventsComponent.js';

const mapStateToProps = store => ({
  interestedInActivity: store.activities.interestedInActivity
});

const mapDispatchToProps = dispatch => ({
  viewActivity: (e) => {
    dispatch(actions.viewActivity(parseInt(e.target.id)))
  }

});

/*
class ActivitiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: true,
      showList: false,
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.viewActivityPage = this.viewActivityPage.bind(this);
  }
*/


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
          interestedInActivity={this.props.interestedInActivity} 
          viewActivityPage={this.viewActivityPage}
          viewActivity={this.props.viewActivity}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer));


/*
const mapStateToProps = store => ({
  searchActivities: store.activities.searchedActivities,
});

const mapDispatchToProps = dispatch => ({
  searchForActivities: (activity) => {
    dispatch(actions.searchForActivities(activity))
  },

  viewActivity: (e) => {
    console.log('logging e.target when clicking view button', e.target)
    dispatch(actions.viewActivity(parseInt(e.target.id)))
  }
  // getActivities: (e) => {
  //   dispatch(actions.getActivities())
  // }
});

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: true,
      showList: false,
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.viewActivityPage = this.viewActivityPage.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const newState = this.state;
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSearch() {
    this.props.searchForActivities({title: this.state.title});
  }

  viewActivityPage() {
    this.props.history.push('/activity/:id');
  
  }

  render() {
    return (
      <div>
        <SearchBoxComponent 
          title={this.state.title}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch} 
        />
        <MapContainer />
        <ActivitiesComponent 
          searchActivities={this.props.searchActivities} 
          viewActivityPage={this.viewActivityPage}
          viewActivity={this.props.viewActivity}
        />
      </div>
    )
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer));
*/