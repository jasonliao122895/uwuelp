import { RECEIVE_REACTION, RECEIVE_REACTIONS } from '../actions/reaction_actions';

export const reactionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_REACTION:
      // debugger
      newState[action.reaction.id] = action.reaction;
      return newState;
    case RECEIVE_REACTIONS:
      // debugger
      return Object.assign(newState, action.reactions)
    default:
      return state;
  }
}