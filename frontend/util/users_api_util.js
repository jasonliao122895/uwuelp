

export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
)

export const findFriends = () => (
  $.ajax({
    url: '/api/users/find',
    method: 'GET'
  })
)



