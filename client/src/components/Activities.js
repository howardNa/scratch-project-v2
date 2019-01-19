import React from 'react';
import { Link } from 'react-router-dom';
import SingleActivityItem from './SingleActivityItem';
import '../styles/Activities.css';

const ActivitiesComponent = () => {
  return (
    <div className="activities-container">
        <h3>Activities list</h3>
        <SingleActivityItem />
        <SingleActivityItem />
        <SingleActivityItem />
    </div>
    
  )
}

export default ActivitiesComponent;