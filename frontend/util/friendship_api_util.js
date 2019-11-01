export const addFriend = (friendship) => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: {friendship: friendship}
  })
)

export const removeFriend = (id) => (
  $.ajax({
    url: `/api/friendships/${id}`,
    method: 'DELETE'
  })
)