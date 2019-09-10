

export const fetchBusinesses = () => (
  $.ajax({
    url: '/api/businesses',
    method: 'GET'
  })
)

export const fetchBusiness = (id) => (
  $.ajax({
    url: `/api/businesses/${id}`,
    method: 'GET'
  })
)