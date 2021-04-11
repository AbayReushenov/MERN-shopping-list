import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  CHEL_ZAGRUZHARTSYA,
  CHEL_ZAGRUZHEN,
  AVTORIZACIA_OSHIBKA,
  LOG_VHOD_USPEKH,
  LOG_VHOD_PROVAL,
  LOG_POKA_USPEKH,
  REGITRACIA_USPEKH,
  REGITRACIA_PROVAL,
} from './types';

// Проверим token  и загрузим данные user

export const loadUser = () => (dispatch, getState) => {
  // user загружается
  dispatch({ type: CHEL_ZAGRUZHARTSYA });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: CHEL_ZAGRUZHEN,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AVTORIZACIA_OSHIBKA,
      });
    });
};

// setup config/headers and token
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // Если  token существует добавить его в Headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
