

export const fetchBusinesses = (filters) => (
  $.ajax({
    url: '/api/businesses',
    method: 'GET',
    data: { filters  }
  })
)

export const fetchBusiness = (id) => (
  $.ajax({
    url: `/api/businesses/${id}`,
    method: 'GET'
  })
)

window.fetchBusinesses = fetchBusinesses