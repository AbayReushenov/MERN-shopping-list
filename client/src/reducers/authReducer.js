/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {
  CHEL_ZAGRUZHARTSYA,
  CHEL_ZAGRUZHEN,
  AVTORIZACIA_OSHIBKA,
  LOG_VHOD_USPEKH,
  LOG_VHOD_PROVAL,
  LOG_POKA_USPEKH,
  REGITRACIA_USPEKH,
  REGITRACIA_PROVAL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHEL_ZAGRUZHARTSYA:
      return {
        ...state,
        isLoading: true,
      };
    case CHEL_ZAGRUZHEN:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOG_VHOD_USPEKH:
    case REGITRACIA_USPEKH:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AVTORIZACIA_OSHIBKA:
    case LOG_VHOD_PROVAL:
    case LOG_POKA_USPEKH:
    case REGITRACIA_PROVAL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    default:
      return state;
  }
}
