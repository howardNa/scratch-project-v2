import * as types from '../actionTypes.js'

const initialState = {
  searchedActivities: [],
  viewActivity: {},
  interestedInActivity: [],
  confirmedActivity: [],
  createdActivity: []
}

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ACTIVITY:

    const newState1 = {}
    const activitiesPayload = action.payload;

    newState1.searchedActivities = activitiesPayload
    newState1.viewActivity = state.viewActivity
    newState1.interestedInActivity = state.interestedInActivity
    newState1.confirmedActivity = state.confirmedActivity
    newState1.createdActivity = state.createdActivity

    return newState1;

    case types.VIEW_ACTIVITY:

    const newState2 = {}
    const activityId = action.payload

    newState2.viewActivity = state.searchedActivities[activityId]
    newState2.searchedActivities = state.searchedActivities
    newState2.interestedInActivity = state.interestedInActivity
    newState2.confirmedActivity = state.confirmedActivity
    newState2.createdActivity = state.createdActivity

    return newState2;

    case types.INTERESTED_IN_ACTIVITY:

    const newState3 = {}

    const interestedInActivityCopy = state.interestedInActivity.slice();
    const addToInterested = state.viewActivity;

    let alreadyInterested = false;
    

    for (let i = 0; i < interestedInActivityCopy.length; i++) {
      if (JSON.stringify(interestedInActivityCopy[i]) === JSON.stringify(addToInterested) && addToInterested.interested === true) {
        alreadyInterested = true;
      }
    }

    if (!alreadyInterested) {
      addToInterested.interested = true;
      interestedInActivityCopy.push(addToInterested);
      newState3.searchedActivities = state.searchedActivities;
      newState3.viewActivity = state.viewActivity;
      newState3.interestedInActivity = interestedInActivityCopy;
      newState3.confirmedActivity = state.confirmedActivity
      newState3.createdActivity = state.createdActivity
  
      return newState3;

    } else {

      return state;
    }

    case types.CONFIRM_ACTIVITY:

    console.log('firing confirm reducer')

    const newState4 = {}

    const confirmedActivityCopy = state.confirmedActivity.slice();
    const addToConfirmed = state.viewActivity;

    let alreadyConfirmed = false;

    for (let i = 0; i < confirmedActivityCopy.length; i++) {
      
      if (JSON.stringify(confirmedActivityCopy[i]) === JSON.stringify(addToConfirmed) && addToConfirmed.confirmed === true) {
        alreadyConfirmed = true;
      }

    }

    if (!alreadyConfirmed) {
      addToConfirmed.confirmed = true;
      confirmedActivityCopy.push(addToConfirmed);
      newState4.searchedActivities = state.searchedActivities;
      newState4.viewActivity = state.viewActivity;
      newState4.interestedInActivity = state.interestedInActivity;
      newState4.confirmedActivity = confirmedActivityCopy;
      newState4.createdActivity = state.createdActivity

      console.log('newState should have something in confirmed array: ', newState4)
  
      return newState4;

    } else {

      return state;
    }

    // case types.CREATE_ACTIVITY: 

    // const newState6 = {};

    // let userCreatedActivity = action.payload;







    case types.DELETE_ACTIVITY:

    const newState5 = {}

    const arr = state.interestedInActivity.slice()

    let deleteId = action.payload

    for (let i = 0; i < arr.length; i++) {
      if (i === deleteId) {
        arr.splice(i, 1)
      }
    }

    newState5.searchedActivities = state.searchedActivities;
    newState5.viewActivity = state.viewActivity;
    newState5.interestedInActivity = arr;
    newState5.confirmedActivity = state.confirmedActivity
    newState5.createdActivity = state.createdActivity

    return newState5;


    case types.NOT_GOING:

    console.log('inside not going reducer after clicking not going button')

    const newState6 = {}

    const newArr = state.confirmedActivity.slice();
    let notGoingId = action.payload;

    for (let i = 0; i < newArr.length; i ++) {
      if (i === notGoingId) {
        newArr.splice(i, 1)
      }
    }

    newState6.searchedActivities = state.searchedActivities;
    newState6.viewActivity = state.viewActivity;
    newState6.interestedInActivity = state.interestedInActivity;
    newState6.confirmedActivity = newArr;
    newState6.createdActivity = state.createdActivity

    return newState6;








    default:
      return state;
  }
};

export default activitiesReducer;