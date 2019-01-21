import React from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import '../styles/Activities.css';

const ActivitiesComponent = (props) => {
  const foundActivities = props.getActivities;

  const listActivities = []

  for (let i = 0; i < foundActivities.length; i++) {
    listActivities.push(<SingleActivityItem />)
  }

  return (
    <div className="activities-container">
      <h3>Activities list</h3>
      {listActivities}
    </div>
  )
}

export default ActivitiesComponent;