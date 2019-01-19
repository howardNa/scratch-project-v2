import * as types from '../actionTypes.js'

const initialState = {
  searchedActivities: [],
}

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ACTIVITY:

    // const arr = [
    //   {
    //     name: "Braden",
    //     activity: "tennis",
    //     time: Date.now(),
    //     where: "Venice, CA",
    //     lat: 33.998885,
    //     lng: -118.472386,
    //     show: false,
    //   },
    //   {
    //     name: "Carolyn",
    //     activity: "massages",
    //     time: Date.now(),
    //     where: "Venice, CA",
    //     lat: 33.997141,
    //     lng: -118.461012,
    //     show: false,
    //   },
    //   {
    //     name: "Howard",
    //     activity: "magic",
    //     time: Date.now(),
    //     where: "Venice, CA",
    //     lat: 33.981093, 
    //     lng: -118.460584,
    //     show: false,
    //   }
    // ]

    const newSearchedActivitiesArray = state.searchedActivities.slice()
    const activitiesPayload = action.payload;

    const newState = {}
    newState.searchedActivities = newSearchedActivitiesArray

    for (let i = 0; i < activitiesPayload; i++) {
      newSearchedActivitiesArray.push(activitiesPayload[i])
    }

    return newState;

    default:
      return state;
  }
};

export default activitiesReducer;