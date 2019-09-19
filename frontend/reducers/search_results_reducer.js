import { SEARCH_BUSINESSES } from '../actions/search_business_action';

export const searchBusinessesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_BUSINESSES:
      return action.businessesRes;
    default:
      return state;
  }
}