import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES, LOADING_BUSINESS, LOADING_BUSINESSES } from '../actions/businesses.action';

const loadingState = {
  indexLoading: false,
  showLoading: false
}

export const loadingReducer = ( state = loadingState, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case LOADING_BUSINESS:
      return Object.assign(newState, { showLoading: true });
    case LOADING_BUSINESSES:
      return Object.assign(newState, { indexLoading: true });
    case RECEIVE_BUSINESS:
      return Object.assign(newState, { showLoading: false });
    case RECEIVE_BUSINESSES:
      return Object.assign(newState, { indexLoading: false });
    default:
      return state;
  }
}