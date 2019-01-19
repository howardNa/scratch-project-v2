import React from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import '../styles/CreateActivity.css';
import '../styles/SearchBox.css'

const CreateActivity = () => {
  return (
<div className="main-search-bar-container">
    <div className="search-bar-flex-container">

        <h2>I want to ...</h2>
        <input className="activity-input"></input>
        <h2>around</h2>

            <div className="time-row-container">
                <input className="time-input"></input>
                <h2 className="to-margin">to</h2>
                <input className="time-input"></input>
            </div>

        <h2>at</h2>
        <input className="location-input"></input>

        <button className="create-button">Create</button>
    </div>
</div>
    
  )
}

export default CreateActivity;

