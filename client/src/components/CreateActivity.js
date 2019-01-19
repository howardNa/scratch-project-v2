import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';

import * as actions from '../store/actions/actions.js'
import '../styles/CreateActivity.css';
import '../styles/SearchBox.css'



const mapStateToProps = store => ({

    // lastMarketId: store.markets.lastMarketId,
    // marketList: store.markets.marketList
    searchActivities: store.activities.searchedActivities,
  
  
  });
  
  const mapDispatchToProps = dispatch => ({
    
    createActivity: (e) => {
        dispatch(actions.createActivity())
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
        }
        this.createActivity = this.createActivity.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log('here is e: ', e.target)
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

        actions.createActivity(newActivity)
        this.props.history.push('/profile');

    }


    render() {




        return (
            <div className="main-search-bar-container">
                <div className="search-bar-flex-container">
            
                    <h2>I want to ...</h2>
                    <input className="activity-input" id={'activityInput'} onChange={this.handleChange} ></input>
                    <h2>around</h2>
            
                        <div className="time-row-container">
                            <input className="time-input" id={'startTime'} onChange={this.handleChange} ></input>
                        </div>
            
                    <h2>at</h2>
                    <input className="location-input" id={'locationInput'} onChange={this.handleChange} ></input>

                    <p><i>additional info</i></p>
                    <input className="additional-info-input" id={'additionalInfo'} onChange={this.handleChange} ></input>
            
                    <button className="create-button" onClick={this.createActivity} >Create</button>
                </div>
            </div>
                
              )
    }
}

export default CreateActivity;
