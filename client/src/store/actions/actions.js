import * as types from '../actionTypes.js';
import axios from 'axios';


export const searchActivity = (activity) => {
    return dispatch => {
        return apiCall('get', activity)
            .then((response) => {
                dispatch({
                    type: types.SEARCH_ACTIVITY,
                    payload: response
                })
            })
            .catch(err => console.log(err))
    }
}

export const createActivity = (create) => {
    return dispatch => {
        return apiCall('post', '/createActivity', create)
            .then((response) => {
                console.log(response)
            })
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

function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
      return axios[method.toLowerCase()](path, data)
        .then(res => {
          return resolve(res.data);
        })
        .catch(err => {
          console.log("Error in apiCall:", err);
          return reject(err.response.data.error)
        });
    });
  }