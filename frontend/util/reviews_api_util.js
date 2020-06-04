

export const fetchReviews = (business_id) => (
  $.ajax({
    url: `/api/businesses/${business_id}/reviews`,
    method: 'GET'
  })
)




export const createReview = (review) => (
  $.ajax({
    url: `/api/businesses/${review.business_id}/reviews`,
    method: 'POST',
    data: { review }
  })
)

export const updateReview = (review) => (
  $.ajax({
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
)

export const deleteReview = (review) => (
  $.ajax({
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method: 'DELETE'
  })
)

window.fetchReviews = fetchReviews;

