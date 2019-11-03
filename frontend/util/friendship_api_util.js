export const addFriend = (friendship) => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: {friendship: friendship}
  })
)

export const removeFriend = (inverseFriendId) => (
  $.ajax({
    url: `/api/friendships/${inverseFriendId}`,
    method: 'GET'
  })
)