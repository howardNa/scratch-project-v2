import * as types from '../actionTypes.js';
import { apiCall } from '../../services/api';
import axios from 'axios';

export const searchForActivities = (activityInfo) => {
  return dispatch => {
    return apiCall('post', 'http://localhost:8000/activities', {title: "hello"})
      .then((response) => console.log(response))
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

export const viewActivity = (view) => ({
    type: types.VIEW_ACTIVITY,
    payload: view
})

export const interestedInActivity = (interested) => ({
    type: types.INTERESTED_IN_ACTIVITY,
    payload: interested
})

export const confirmActivity = (confirm) => ({
    type: types.CONFIRM_ACTIVITY,
    payload: confirm
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

