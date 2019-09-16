import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';

export const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign(newState, action.review)
    case REMOVE_REVIEW:
     
      let review = Object.values(action.review)
     
      delete newState[review[0].id] 
      return newState;
    default:
      return state;
  }
}