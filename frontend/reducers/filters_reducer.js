import { UPDATE_FILTER } from '../actions/filter_actions';


const initialState = {
  bounds: {},
  find: "",
  near: ""
}

export const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case UPDATE_FILTER:
      newState[action.filter] = action.value
      return newState;
    default:
      return state;
  }
}