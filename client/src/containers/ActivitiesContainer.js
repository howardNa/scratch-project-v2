import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';

import SearchBoxComponent from '../components/SearchBox.js'
import ActivitiesComponent from '../components/Activities.js'
import MapContainer from './MapContainer.js'

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: true,
      showList: false,
    }
  }
  render() {
    return (
      <div>
        <SearchBoxComponent />
        <MapContainer />
        <ActivitiesComponent />
      </div>
    )
  }
}

export default withRouter(connect(null, null)(ActivitiesContainer));