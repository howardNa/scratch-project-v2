import React from 'react';
import { Link } from 'react-router-dom';

import GoingPerson from './GoingPerson.js'
import SingleActivityItem from './SingleActivityItem';
import '../styles/UserEventsComponent.css';

const UserEventsComponent = () => {

  return (
    <div className="user-events-container">

        <div className="user-events-list">

            <div className="going-event">
                <h3 className="event-status-header"><i>Going</i></h3>
                <SingleActivityItem />
            </div>
        
            <div className="created-event">
                <h3 className="event-status-header"><i>Created</i></h3>
                <SingleActivityItem />
            </div>

            <div className="interested-event">
                <h3 className="event-status-header"><i>Interested</i></h3>
                <SingleActivityItem />
            </div>
        </div>

    </div>
    
  )
}

export default UserEventsComponent;