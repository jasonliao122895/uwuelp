export const SEARCH_BUSINESSES = 'SEARCH_BUSINESSES';
import * as SearchApiUtil from '../util/search_results_api_util';
 

const searchBusinesses = (businessesRes) => ({
  type: SEARCH_BUSINESSES,
  businessesRes
})


export const getBusinessesRes = (query) => (dispatch) => (
  SearchApiUtil.search(query)
    .then((businessesRes) => dispatch(searchBusinesses(businessesRes)))
)

// window.getBusinessesRes = getBusinessesRes;