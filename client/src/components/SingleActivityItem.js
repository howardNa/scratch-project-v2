import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleActivityItem.css';

const SingleActivityItem = () => {
  return (
    <div className="activity-item-container">
      <div className="activity-item-row">
        <div className="host-column">
          <img className="host-img" src="../../build/images/stick-figure-dude.png"></img>
          <h5 className="host-name">Tim</h5>
        </div>
        <div className="description-column">
          <h3 className="description-item">Tennis</h3>
          <h4 className="description-item">Venice Beach</h4>
          <h4 className="description-item"><i>7:30pm - 9:00pm</i></h4>
          <p className="description-item">Looking for a hitting partner. I have an extra racket and tennis balls.</p>
        </div>
        <button className="details-button">View</button>
      </div>
    </div>
  )
}

export default SingleActivityItem;