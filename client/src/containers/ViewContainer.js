import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import DetailsComponent from '../components/DetailsComponent.js';
import GoingComponent from '../components/GoingComponent.js'
import ChatBox from '../components/ChatBox.js';

const ViewContainer = (props) => {
  return (
    <div>
      <DetailsComponent />
      <GoingComponent />
      <ChatBox />
    </div>
  )
}

export default withRouter(connect(null, null)(ViewContainer));