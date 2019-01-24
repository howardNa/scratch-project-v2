import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/actions.js'

import '../styles/LogIn.css'

const mapStateToProps = store => ({
    // lastMarketId: store.markets.lastMarketId,
    // marketList: store.markets.marketList
    // searchActivities: store.activities.searchedActivities,
    // createdActivity: store.activities.createdActivity
  });
    
const mapDispatchToProps = dispatch => ({
    // createActivity: (activityInfo) => {
    //     console.log('here is activityInfo in map dispatch: ', activityInfo)
    //     dispatch(actions.createActivity(activityInfo))
    // }

    signInWithGoogle: () => {
        console.log('clicked sign in with google button, now dispatching')
        dispatch(actions.signInWithGoogle())
    }

});


class LogIn extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="log-in-container">
                <div className="log-in-box">
                
                    <div className="username-row">
                        <p>Username: </p>
                        <input id="username-field"></input>
                    </div>
    
                    <div className="password-row">
                        <p>Password: </p>
                        <input id="password-field"></input>
                    </div>
    
                    <div className='log-in-row'>
                        <button id="sign-in-button">Log in</button>
                        <button onClick={this.props.signInWithGoogle} id='google-sign-in-button'>Sign in with Google</button>
                    </div>
    
                </div>
            </div>
                
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));


/*

const mapStateToProps = store => ({
  // lastMarketId: store.markets.lastMarketId,
  // marketList: store.markets.marketList
  searchActivities: store.activities.searchedActivities,
  createdActivity: store.activities.createdActivity
});
  
const mapDispatchToProps = dispatch => ({
  createActivity: (activityInfo) => {
      console.log('here is activityInfo in map dispatch: ', activityInfo)
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
    // this.props.history.push('/profile');
  }
  render() {
    return (
      <div className="main-search-bar-container">

        <div className="search-bar-flex-container">

          <h2>What activity do you want to create?</h2>
          <input className="activity-input" id={'activityInput'} onChange={this.handleChange} placeholder='Activity'></input>

          <h2>What time do you want to do it?</h2>
          <input type="time" className="time-input" id={'startTime'} onChange={this.handleChange} placeholder='Time' required></input>

          
          <h2>Where do you want to do it?</h2>
          <input className="location-input" id={'locationInput'} onChange={this.handleChange} placeholder='Location' ></input>

          <p><i>Got any additional info? Enter it below!</i></p>
          <input className="additional-info-input" id={'additionalInfo'} onChange={this.handleChange} ></input>
          <button className="create-button" onClick={this.createActivity} >Create</button>
        
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateActivity));
 */

