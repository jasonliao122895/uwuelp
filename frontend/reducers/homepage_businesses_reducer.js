import { GET_HOMEPAGE_BUSINESSES } from '../actions/homepage_businesses_action';

export const homepageBusinessesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case GET_HOMEPAGE_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
}