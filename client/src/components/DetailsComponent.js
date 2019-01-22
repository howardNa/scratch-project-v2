import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/DetailsComponent.css';

const DetailsComponent = (props) => {
    const activityDetails = props.viewClickedActivity;
  return (
    <div className="details-container">
         <div className="activity-item-row">

            <div className="host-column">
                <img className="host-img" src="../../build/images/stick-figure-dude.png"></img>
                <h5 className="host-name">(Username goes here)</h5>
            </div>

            <div className="description-column">
                <h3 className="description-item">{activityDetails.title}</h3>
                <h4 className="description-item">{activityDetails.location_text}</h4>
                <h4 className="description-item"><i>{activityDetails.start_time}</i></h4>
                <p className="description-item">{activityDetails.location}</p>
            </div>

            <div className="buttons-column">
                <button className="button-item">Interested</button>
                <button className="button-item">Confirm</button>
            </div>

        </div>
    </div>
    
  )
}

export default DetailsComponent;