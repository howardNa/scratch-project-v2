import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import SearchBoxComponent from '../components/SearchBox.js'
import ActivitiesComponent from '../components/Activities.js'
import MapContainer from './MapContainer.js'

const mapStateToProps = store => ({
  searchActivities: store.activities.searchedActivities,
});

const mapDispatchToProps = dispatch => ({
  searchForActivities: (activity) => {
    dispatch(actions.searchForActivities(activity))
  },

  viewActivity: (e) => {
    dispatch(actions.viewActivity(parseInt(e.target.id)))
  }
});

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: true,
      showList: false,
      title: '',
      start: ''
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
    this.props.searchForActivities({title: this.state.title, start_time: this.state.start});
  }

  viewActivityPage() {
    this.props.history.push('/activity/:id');
  
  }

  render() {
    return (
      <div>
        {/* <SearchBoxComponent 
          title={this.state.title}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch} 
        /> */}
        <ActivitiesComponent 
          searchActivities={this.props.searchActivities} 
          viewActivityPage={this.viewActivityPage}
          viewActivity={this.props.viewActivity}
        />
        <MapContainer />
      </div>
    )
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer));