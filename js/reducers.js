// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    const key = action.payload.imdbID;
    const obj = {};
    obj[key] = action.payload;
    return Object.assign({}, state, obj);
    // less verbose ES6 way:
    // return Object.assign({}, state, {[action.payload.imdbID]: action.payload})
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
