// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
  error: errorReducer,
});

export default rootReducer;
