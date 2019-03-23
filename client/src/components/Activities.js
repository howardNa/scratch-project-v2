import React from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import '../styles/Activities.css';

const ActivitiesComponent = (props) => {
  const foundActivities = props.searchActivities;

  const listActivities = []

  //random num generator for singleActivityItem key
  function randomNum() {
    let num = Math.floor(Math.random() * 100000)
    return num;
  }

  for (let i = 0; i < foundActivities.length; i++) {
    let activity = foundActivities[i];
    listActivities.push(
      <SingleActivityItem 
        viewActivityPage={props.viewActivityPage}
        viewActivity={props.viewActivity}
        title={activity.title} 
        location={activity.location_text} 
        start={activity.start_time} 
        description={activity.description} 
        id={i}
        key={randomNum() + i}
      />)
  }

  return (
    <div className="activities-container">
      {listActivities}
    </div>
  )
}

export default ActivitiesComponent;