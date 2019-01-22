import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import DetailsComponent from '../components/DetailsComponent.js';
import GoingComponent from '../components/GoingComponent.js'
import ChatBox from '../components/ChatBox.js';


const ViewContainer = (props) => {
  console.log('here is props from viewContainer: ', props)
    return (
      <div>
        <DetailsComponent viewClickedActivity={props.viewClickedActivity} />
        <GoingComponent />
        <ChatBox />
      </div>
    )
  
}

export default ViewContainer;

