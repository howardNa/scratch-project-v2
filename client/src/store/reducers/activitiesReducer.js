import * as types from '../actionTypes.js'

const initialState = {
  searchedActivities: [],
  viewActivity: {},
  interestedInActivity: []
}

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ACTIVITY:

    const newState1 = {}
    const activitiesPayload = action.payload;

    newState1.searchedActivities = activitiesPayload
    newState1.viewActivity = state.viewActivity
    newState1.interestedInActivity = state.interestedInActivity

    return newState1;

    case types.VIEW_ACTIVITY:

    const newState2 = {}
    const activityId = action.payload

    newState2.viewActivity = state.searchedActivities[activityId]
    newState2.searchedActivities = state.searchedActivities
    newState2.interestedInActivity = state.interestedInActivity

    return newState2;

    case types.INTERESTED_IN_ACTIVITY:

    const newState3 = {}

    const interestedInActivityCopy = state.interestedInActivity.slice();
    const addToInterested = state.viewActivity;

    let alreadyInterested = false;
    

    for (let i = 0; i < interestedInActivityCopy.length; i++) {
      if (JSON.stringify(interestedInActivityCopy[i]) === JSON.stringify(addToInterested)) {
        alreadyInterested = true;
        addToInterested.interested = true;
      }
    }

    if (!alreadyInterested) {
      interestedInActivityCopy.push(addToInterested);
      newState3.searchedActivities = state.searchedActivities;
      newState3.viewActivity = state.viewActivity;
      newState3.interestedInActivity = interestedInActivityCopy;
  
      return newState3;

    } else {

      return state;
    }

    // case types.DELETE_ACTIVITY:

    // const newState4 ={}
    // let found = false;









    default:
      return state;
  }
};

export default activitiesReducer;