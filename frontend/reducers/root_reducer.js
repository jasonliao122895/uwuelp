import { combineReducers } from 'redux';
import { entitiesReducer } from './entities_reducer';
import { errorsReducer } from './errors_reducer';
import { sessionReducer } from './session_reducer';
import { filterReducer } from './filters_reducer';
import { uiReducer } from './ui_reducer';

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  filters: filterReducer,
  ui: uiReducer
})