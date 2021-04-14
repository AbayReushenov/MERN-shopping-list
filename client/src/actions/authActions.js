import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT_SUCCESS,
  // REGISTER_SUCCESS,
  // REGISTER_FAIL
} from './types';
// Проверим token  и загрузим данные user

export const loadUser = () => (dispatch, getState) => {
  // user загружается
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
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