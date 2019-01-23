import React from 'react';
import { Link } from 'react-router-dom';

import GoingPerson from './GoingPerson.js'
import SingleActivityItemWithDelete from './SingleActivityItemWithDelete.js';
import SingleActivityItemNotGoing from './SingleActivityItemNotGoing.js';
import '../styles/UserEventsComponent.css';

const UserEventsComponent = (props) => {

    const interestedInActivitiesArr = props.interestedInActivity;

    const confirmedActivityArr = props.confirmedActivity;

    console.log('logging confirmed arr: ', confirmedActivityArr)

    const listInterestedActivities = []

    const listConfirmedActivities = []

      //random num generator for singleActivityItem key
    function randomNum() {
        let num = Math.floor(Math.random() * 100000)
        return num;
    }

    //interested acts
    for (let i = 0; i < interestedInActivitiesArr.length; i++) {
        let activity = interestedInActivitiesArr[i];

            listInterestedActivities.push(
                <SingleActivityItemWithDelete
                    viewActivityPage={props.viewActivityPage}
                    viewActivity={props.viewActivity}
                    deleteActivity={props.deleteActivity}

                    title={activity.title} 
                    location={activity.location_text} 
                    start={activity.start_time} 
                    description={activity.description}
                    
                    id={i}
                    key={randomNum() + i}
                />
            )
        }

    //confirmed acts
    for (let i = 0; i < confirmedActivityArr.length; i++) {
        let activity = confirmedActivityArr[i];

            listConfirmedActivities.push(
                <SingleActivityItemNotGoing
                    viewActivityPage={props.viewActivityPage}
                    viewActivity={props.viewActivity}
                    notGoing={props.notGoing}

                    title={activity.title} 
                    location={activity.location_text} 
                    start={activity.start_time} 
                    description={activity.description}
                    
                    id={i}
                    key={randomNum() + i}
                />
            )
        }

    
        
    

  return (
    <div className="user-events-container">

        <div className="user-events-list">
        
            <div className="created-event">
                <h3 className="event-status-header"><i>Created</i></h3>
                <SingleActivityItemWithDelete />
            </div>

            <div className="going-event">
                <h3 className="event-status-header"><i>Going</i></h3>
                {listConfirmedActivities}
            </div>

            <div className="interested-event">
                <h3 className="event-status-header"><i>Interested</i></h3>
                {listInterestedActivities}
            </div>
        </div>

    </div>
    
  )
}

export default UserEventsComponent;