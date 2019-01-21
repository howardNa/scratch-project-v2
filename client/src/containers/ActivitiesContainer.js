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
  getActivities: (e) => {
    dispatch(actions.getActivities())
  }
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
  }
  handleChange(e) {
    e.preventDefault();
    console.log(e.target.id);
    const newState = this.state;
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSearch() {
    this.props.searchForActivities({title: this.state.title});
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
        <ActivitiesComponent getActivities={this.props.getActivities} />
      </div>
    )
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer));