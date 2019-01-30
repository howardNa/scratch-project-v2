import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import * as actions from '../store/actions/actions.js'
import '../styles/CreateActivity.css';
import '../styles/SearchBox.css'

const mapStateToProps = store => ({
  // lastMarketId: store.markets.lastMarketId,
  // marketList: store.markets.marketList
  searchActivities: store.activities.searchedActivities,
  createdActivity: store.activities.createdActivity
});
  
const mapDispatchToProps = dispatch => ({
  createActivity: (activityInfo) => {
      dispatch(actions.createActivity(activityInfo))
  }
});

class CreateActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
        activityInput: '',
        startTime: '',
        locationInput: '',
        additionalInfo: ''
    };

    this.createActivity = this.createActivity.bind(this)
    this.handleChange = this.handleChange.bind(this)
  
  }

  handleChange(e) {
      e.preventDefault();
      const newState = this.state;
      newState[e.target.id] = e.target.value;
      this.setState(newState);
    };

  createActivity() {
    let newActivity = {
        title: this.state.activityInput,
        description: this.state.additionalInfo,
        location_text: this.state.locationInput,
        start_time: this.state.startTime,
    }
    this.props.createActivity(newActivity);
    this.props.history.push('/profile');
  }
  render() {
    return (
      <div className="main-search-bar-container">

        <div className="search-bar-flex-container">

          <h2>What activity do you want to create?</h2>
          <input className="activity-input" id={'activityInput'} onChange={this.handleChange} placeholder='Activity'></input>

          <h2>What time do you want to do it?</h2>
          <input type="time" className="time-input" id={'startTime'} onChange={this.handleChange} required></input>

          
          <h2>Where do you want to do it?</h2>
          <input className="location-input" id={'locationInput'} onChange={this.handleChange} placeholder='Location' ></input>

          <p>Got any additional info? Enter it below!</p>
          <textarea className="additional-info-input" id={'additionalInfo'} onChange={this.handleChange} ></textarea>
          <button className="create-button" onClick={this.createActivity} >Create</button>
        
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateActivity));