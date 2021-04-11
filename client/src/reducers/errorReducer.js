/* eslint-disable import/no-anonymous-default-export */
import { POLUCHITE_OSHIBKI, OCHISTITE_OSHIBKI } from '../actions/types';

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POLUCHITE_OSHIBKI:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case OCHISTITE_OSHIBKI:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
}
