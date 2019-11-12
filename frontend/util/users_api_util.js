

export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
)

export const findFriends = (blank) => (
  $.ajax({
    url: `/api/users/find/${blank}`,
    method: 'GET'
  })
)



