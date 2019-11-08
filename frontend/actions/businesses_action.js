export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const CLEAR_BUSINESSES = 'CLEAR_BUSINESSES'
export const LOADING_BUSINESSES = 'LOADING_BUSINESSES';
export const LOADING_BUSINESS = 'LOADING_BUSINESS';
import * as BusinessApiUtil from '../util/businesses_api_util';

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
})

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
})

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES
})

export const loadBusinesses = () => ({
  type: LOADING_BUSINESSES
})

export const loadBusiness = () => ({
  type: LOADING_BUSINESS
})

export const fetchBusinesses = (filter) => dispatch => {
  dispatch(loadBusinesses());
  return BusinessApiUtil.fetchBusinesses(filter)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
}

export const fetchBusiness = (id) => dispatch => {
  dispatch(loadBusiness());
  return BusinessApiUtil.fetchBusiness(id)
    .then(business => dispatch(receiveBusiness(business)))
}
// window.fetchBusiness = fetchBusiness
// window.fetchBusinesses = fetchBusinesses