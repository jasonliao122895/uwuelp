import { RECEIVER_CURRENT_USER } from '../actions/session_action';

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVER_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}