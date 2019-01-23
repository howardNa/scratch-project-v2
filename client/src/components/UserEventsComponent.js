import React from 'react';
import { Link } from 'react-router-dom';

import GoingPerson from './GoingPerson.js'
import SingleActivityItemWithDelete from './SingleActivityItemWithDelete.js';
import SingleActivityItemNotGoing from './SingleActivityItemNotGoing.js';
import SingleActivityItemUnhost from './SingleActivityItemUnhost.js';
import '../styles/UserEventsComponent.css';

const UserEventsComponent = (props) => {

    const interestedInActivitiesArr = props.interestedInActivity;

    const confirmedActivityArr = props.confirmedActivity;
    
    const createdActivityArr = props.createdActivity;

    const listInterestedActivities = []

    const listConfirmedActivities = []

    const listCreatedActivities = []

      //random num generator for singleActivityItem key
    function randomNum() {
        let num = Math.floor(Math.random() * 100000)
        return num;
    }

    //check if array empty to determine whether to display appropriate headings

    function isListEmpty(arr, str) {
        if (arr.length === 0) {
            return '';
        } else {
            return str;
        }
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

    //created acts
    for (let i = 0; i < createdActivityArr.length; i++) {
        let activity = createdActivityArr[i];

            listCreatedActivities.push(
                <SingleActivityItemUnhost
                    viewActivityPage={props.viewActivityPage}
                    viewActivity={props.viewActivity}
                    unhostActivity={props.unhostActivity}

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
                <p className="event-status-header"><i>{isListEmpty(listCreatedActivities, 'Created:')}</i></p>
                {listCreatedActivities}
            </div>

            <div className="going-event">
                <p className="event-status-header"><i>{isListEmpty(listConfirmedActivities, 'Confirmed:')}</i></p>
                {listConfirmedActivities}
            </div>

            <div className="interested-event">
                <p className="event-status-header"><i>{isListEmpty(listInterestedActivities, 'Interested:')}</i></p>
                {listInterestedActivities}
            </div>
        </div>

    </div>
    
  )
}

export default UserEventsComponent;