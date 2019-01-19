import { combineReducers } from 'redux';
import activities from './activitiesReducer';


export default combineReducers({
  activities: activities,
})