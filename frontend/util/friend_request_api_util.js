export const sendFriendRequest = (friendRequest) => (
  $.ajax({
    url: '/api/friend_requests',
    method: 'POST',
    data: { friend_requests: friendRequest }
  })
)

export const rejectFriendRequest = (id) => (
  $.ajax({
    url: `/api/friend_requests/${id}`,
    method: 'DELETE'
  })
)

