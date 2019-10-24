import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/businesses_action';

export const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return Object.assign(newState, action.business);
    default:
      return state;
  }
}