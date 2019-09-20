import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_action';

export const modalReducer = (state = null, action) => {
  
  switch(action.type) {
    case OPEN_MODAL:
      return action.hey
    case CLOSE_MODAL:
      return null 
    default:
      return state;
  }

}