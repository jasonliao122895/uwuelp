import { RECEIVER_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_action';

const initialState = {
  id: null
}

export const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVER_CURRENT_USER:
      newState.id = action.user.id
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}