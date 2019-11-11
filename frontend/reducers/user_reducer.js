import { RECEIVER_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/users_actions';

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVER_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user
      return newState;
    case RECEIVE_USERS:
      return action.users
    default:
      return state;
  }
}