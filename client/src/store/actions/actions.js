import * as types from '../actionTypes.js';
import { apiCall } from '../../services/api';
import axios from 'axios';

export const searchForActivities = (activityInfo) => {
  return dispatch => {
    return apiCall('post', 'http://localhost:8000/activities', activityInfo)

      .then((response) => {
        dispatch({
            type: types.SEARCH_ACTIVITY,
            payload: response
        })
      })

      .catch((err) => console.log(err))
  }
}

export const createActivity = (activityInfo) => {
  return dispatch => {
    return apiCall('post', 'http://localhost:8000/createActivity', activityInfo)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }
}

export const viewActivity = (activityId) => ({
    type: types.VIEW_ACTIVITY,
    payload: activityId
})

export const interestedInActivity = (interested) => ({
    type: types.INTERESTED_IN_ACTIVITY,
    payload: interested
})

export const confirmActivity = (confirm) => ({
    type: types.CONFIRM_ACTIVITY,
    payload: confirm
})

export const deleteActivity = (activityId) => ({
    type: types.DELETE_ACTIVITY,
    payload: activityId
})

export const sendMessage = (send) => ({
    type: types.SEND_MESSAGE,
    payload: send
})

export const logIn = (logIn) => ({
    type: types.LOG_IN,
    payload: logIn
})

export const signUp = (signUp) => ({
    type: types.SIGN_UP,
    payload: signUp
})

