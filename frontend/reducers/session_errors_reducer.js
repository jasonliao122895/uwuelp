import { RECEIVER_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_action';


export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVER_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}