/* eslint-disable no-unused-vars */
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
import uuid from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'eggs' },
    { id: uuid(), name: 'bread' },
    { id: uuid(), name: 'potatos' },
    { id: uuid(), name: 'tea' },
  ],
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
