// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;
