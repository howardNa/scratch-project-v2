import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/DetailsComponent.css';

const DetailsComponent = (props) => {
    const activityDetails = props.viewClickedActivity;
  return (
    <div className="details-container">
         <div className="activity-item-row">

            <div className="host-column">
<<<<<<< HEAD
                <img className="host-img" src="../../build/images/stick-figure-dude.png"></img>
=======
                <img className="host-img" src="images/anon-user-icon.png"></img>
>>>>>>> 4cfabf67ed9bbabef08dbf1737e327917f263934
                <h5 className="host-name">(Username goes here)</h5>
            </div>

            <div className="description-column">
                <h3 className="description-item">{activityDetails.title}</h3>
                <h4 className="description-item">{activityDetails.location_text}</h4>
                <h4 className="description-item"><i>{activityDetails.start_time}</i></h4>
                <p className="description-item">{activityDetails.location}</p>
            </div>

            <div className="buttons-column">
                <button onClick={props.interestedInActivity} className="button-item">Interested</button>
                <button onClick={props.confirmActivity} className="button-item">Confirm</button>
            </div>

        </div>
    </div>
    
  )
}

export default DetailsComponent;