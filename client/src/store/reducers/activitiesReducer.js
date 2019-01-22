import * as types from '../actionTypes.js'

const initialState = {
  searchedActivities: [],
  viewActivity: {}
}

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ACTIVITY:

    const newState1 = {}
    const activitiesPayload = action.payload;

    newState1.searchedActivities = activitiesPayload

    return newState1;

    case types.VIEW_ACTIVITY:

    const newState2 = {}
    const activityId = action.payload

    newState2.viewActivity = state.searchedActivities[activityId]
    newState2.searchedActivities = state.searchedActivities
    console.log('clicked view button, and changed state, here is activity your interested in: ', newState2.viewActivity)

    return newState2




    default:
      return state;
  }
};

export default activitiesReducer;