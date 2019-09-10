export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
import * as BusinessApiUtil from '../util/businesses_api_util';

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
})

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
})

export const fetchBusinesses = () => dispatch => (
  BusinessApiUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
)

export const fetchBusiness = (id) => dispatch => (
  BusinessApiUtil.fetchBusiness(id)
    .then(business => dispatch(receiveBusiness(business)))
)

window.fetchBusiness = fetchBusiness
window.fetchBusinesses = fetchBusinesses