export const GET_HOMEPAGE_BUSINESSES = 'GET_HOMEPAGE_BUSINESSES';
import * as HomepageBusinessesApiUtil from '../util/homepage_business_api_util';

const receiveHomepageBusinesses = (businesses) => {
  return {
    type: GET_HOMEPAGE_BUSINESSES,
    businesses
  }
}

export const getHomepageBusinesses = (city) => dispatch => {
  HomepageBusinessesApiUtil.getHomepageBusinesses(city)
    .then((businesses) => dispatch(receiveHomepageBusinesses(businesses)))
}