import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SearchBox.css';

const SearchBoxComponent = (props) => {
  
  return (
    <div className="main-search-bar-container">
      <div className="search-bar-flex-container">

        <h2>What do you want to do?</h2>
        <input id="title" className="activity-input" value={props.title} onChange={props.handleChange} placeholder="Activity" autoComplete="off"></input>

        <h2>What time do you want to do it?</h2>
          <div className="time-row-container">
            <input type='time' className="time-input" value={props.start} onChange={props.handleChange} placeholder="Time"></input>
          </div>

      <button className="go-button" onClick={props.handleSearch}>Go</button>
      </div>
    </div>
  )
}

export default SearchBoxComponent;



// return (
//   <div className="main-search-bar-container">

//     <div className="search-bar-flex-container">

//       <h2>What activity do you want to create?</h2>
//       <input className="activity-input" id={'activityInput'} onChange={this.handleChange} placeholder='Activity'></input>

//       <h2>What time do you want to do it?</h2>
//       <input type="time" className="time-input" id={'startTime'} onChange={this.handleChange} placeholder='Time' required></input>

      
//       <h2>Where do you want to do it?</h2>
//       <input className="location-input" id={'locationInput'} onChange={this.handleChange} placeholder='Location' ></input>

//       <p><i>Got any additional info? Enter it below!</i></p>
//       <input className="additional-info-input" id={'additionalInfo'} onChange={this.handleChange} ></input>
//       <button className="create-button" onClick={this.createActivity} >Create</button>
    
//     </div>