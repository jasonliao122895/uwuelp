export const UPDATE_FILTER = 'UPDATE_FILTER';
import { fetchBusinesses } from '../actions/businesses.action'

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
})

// export const filter = (filter, value) => (dispatch, getState) => {
//   dispatch(updatefilter(filter,value))
//   return fetchBusinesses(getState().filters)(dispatch)
// }


export const filter = (filter, value) => {
  return (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchBusinesses(getState().filters)(dispatch);
    
  };
}






