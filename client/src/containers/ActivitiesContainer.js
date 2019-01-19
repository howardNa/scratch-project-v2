import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SearchBoxComponent from '../components/SearchBox.js'
import ActivitiesComponent from '../components/Activities.js'

const ActivitiesContainer = (props) => {
  return (
    <div>
      <SearchBoxComponent />
      <ActivitiesComponent />
    </div>
  )
}

export default withRouter(connect(null, null)(ActivitiesContainer));