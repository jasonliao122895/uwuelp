export const getHomepageBusinesses = (city) => {
  return $.ajax({
    url: `/api/businesses/get/${city}`,
    method: 'GET'
  })
}