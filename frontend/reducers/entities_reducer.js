import { combineReducers } from 'redux';
import { usersReducer } from './user_reducer';
import { businessesReducer } from './businesses_reducer';

export const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer
});


