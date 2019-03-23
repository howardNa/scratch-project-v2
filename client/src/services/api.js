import axios from 'axios';

/**
* A wrapper around axios API call that formats errors, etc.
* @param {string} method the HTTP ver you want to use
* @param {string} path the route path / endpoint
* @param {object} data (optional) data in JSON form for POST requests
*/

// console.log(axios);
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        console.log('logging res in apiCall function: ', res);
        return resolve(res.data);
      })
      .catch(err => {
        console.log("Error in apiCall:", err);
        return reject(err.response.data.error)
      });
  });
}


export function apiCallForGoogleAuth(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios.get('http://localhost:8000/auth/google', { 'headers': { 'Access-Control-Allow-Origin': '*' }})
      .then(res => {
        console.log('logging res in apiCall function: ', res);
        return resolve(res.data);
      })
      .catch(err => {
        console.log("Error in apiCall:", err);
        return reject(err.response.data.error)
      });
  });
}