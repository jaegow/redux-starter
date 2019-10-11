import { combineReducers } from 'redux';
import User from './userReducer';
import Router from './routerReducer';

const rootReducer = combineReducers({
  User,
  Router,
});

export default rootReducer;
