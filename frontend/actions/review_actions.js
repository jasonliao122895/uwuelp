export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERROR = 'RECEIVE_REVIEW_ERROR';
import * as ReviewApiUtil from '../util/reviews_api_util';


const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

const  removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
})

const receiveReviewError = (errors) => ({
  type: RECEIVE_REVIEW_ERROR,
  errors
})


export const fetchReviews = (businessId) => (dispatch) => (
  ReviewApiUtil.fetchReviews(businessId)
    .then(
      (reviews) => dispatch(receiveReviews(reviews))
    )
)

export const createReview = (review) => (dispatch) => (
  ReviewApiUtil.createReview(review)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewError(errors.responseJSON))
    )
)

export const updateReview = (review) => (dispatch) => (
  ReviewApiUtil.updateReview(review)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewError(errors.responseJSON))
    )
)

export const deleteReview = (review) => (dispatch) => (
  ReviewApiUtil.deleteReview(review)
    .then(
      (review) => dispatch(removeReview(review))
    )
)

window.fetchReviews = fetchReviews;
window.createReview = createReview;
window.updateReview = updateReview;
window.deleteReview = deleteReview;