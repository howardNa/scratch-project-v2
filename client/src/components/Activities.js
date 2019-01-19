import React from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import '../styles/Activities.css';

// will take in prop this.props.searchActivitiesArray
const ActivitiesComponent = (props) => {
  const foundActivities = props.searchActivitiesArray

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