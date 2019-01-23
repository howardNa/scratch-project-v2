import React from 'react';
import { Link } from 'react-router-dom';

import GoingPerson from './GoingPerson.js'
import SingleActivityItemWithDelete from './SingleActivityItemWithDelete.js';
import '../styles/UserEventsComponent.css';

const UserEventsComponent = (props) => {

    const interestedInActivitiesArr = props.interestedInActivity;

    const listInterestedActivities = []

      //random num generator for singleActivityItem key
    function randomNum() {
        let num = Math.floor(Math.random() * 100000)
        return num;
    }

    for (let i = 0; i < interestedInActivitiesArr.length; i++) {
        let activity = interestedInActivitiesArr[i];

        listInterestedActivities.push(
            <SingleActivityItemWithDelete
            viewActivityPage={props.viewActivityPage}
            viewActivity={props.viewActivity}
            title={activity.title} 
            location={activity.location_text} 
            start={activity.start_time} 
            description={activity.description} 
            id={i}
            key={randomNum() + i}
            />
        )
    }



/*

  const foundActivities = props.searchActivities;
  console.log('logging foundActivities: ', foundActivities)

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
*/






  return (
    <div className="user-events-container">

        <div className="user-events-list">
        
            <div className="created-event">
                <h3 className="event-status-header"><i>Created</i></h3>
                <SingleActivityItemWithDelete />
            </div>

            <div className="going-event">
                <h3 className="event-status-header"><i>Going</i></h3>
                <SingleActivityItemWithDelete />
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