import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERROR } from '../actions/review_actions';


export const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEW_ERROR:
      return action.errors;
    default:
      return state;
  }
}