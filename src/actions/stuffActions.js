import * as types from './actionTypes';

function url() {
    return 'https://jsonplaceholder.typicode.com/posts';
}

export function receiveStuff(json) {
    return { type: types.RECEIVE_STUFF, stuffApiData: json };
}

export function initStuff() {
    return { type: types.INIT_STUFF };
}

export function updateStuff(newVal) {
    return { type: types.UPDATE_STUFF, stuff: newVal };
}


export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': 'apiKey',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}