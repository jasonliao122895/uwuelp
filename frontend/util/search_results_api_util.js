


export const search = (query) => (
  $.ajax({
    url: `/api/businesses/search/${query}`,
    method: 'GET'
  })
)

// window.search = search;