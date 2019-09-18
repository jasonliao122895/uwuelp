import { combineReducers } from 'redux';
import { loadingReducer } from './loading_reducer';

export const uiReducer = combineReducers({
  loading: loadingReducer
})