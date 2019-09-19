

export const addReaction = (reaction) => (
  $.ajax({
    url: '/api/reactions',
    method: 'POST',
    data: { reaction }
  })
)

export const fetchReactions = () => (
  $.ajax({
    url: '/api/reactions',
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