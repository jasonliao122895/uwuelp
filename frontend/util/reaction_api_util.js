

export const addReaction = (reaction) => (
  $.ajax({
    url: '/api/reactions',
    method: 'POST',
    data: { reaction }
  })
)

export const fetchReactions = (review) => (
  $.ajax({
    url: `/api/businesses/${review.businessId}/reviews/${review.id}/reactions`,
    method: 'GET'
  })
)

export const fetchReaction = (id) => (
  $.ajax({
    url: `/api/reactions/${id}`,
    method: 'GET'
  })
)


export const deleteReaction = (id) => (
  $.ajax({
    url: `/api/reactions/${id}`,
    method: 'DELETE'
  })
)

export const updateReaction = (reaction) => (
  $.ajax({
    url: `/api/reactions/${reaction.id}`,
    method: 'PATCH',
    data: { reaction }
  })
)