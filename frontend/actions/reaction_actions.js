export const RECEIVE_REACTION = 'RECEIVE_REACTION';
export const RECEIVE_REACTIONS = 'RECEIVE_REACTIONS';
import * as ReactionApiUtil from '../util/reaction_api_util';

const receiveReaction = (reaction) => ({
  type: RECEIVE_REACTION,
  reaction
})

const receiveReactions = (reactions) => ({
  type: RECEIVE_REACTIONS,
  reactions
})

export const addReaction = (reaction) => (dispatch) => (
  ReactionApiUtil.addReaction(reaction)
    .then((reaction) => dispatch(receiveReaction(reaction)))
)

export const updateReaction = (reaction) => (dispatch) => (
  ReactionApiUtil.updateReaction(reaction)
    .then((reaction) => dispatch(receiveReaction(reaction)))
)

export const fetchReaction = (id) => (dispatch) => (
  ReactionApiUtil.fetchReaction(id)
    .then((reaction) => dispatch(receiveReaction(reaction)))
)

export const fetchReactions = (review) => (dispatch) => (
  ReactionApiUtil.fetchReactions(review)
    .then((reactions) => dispatch(receiveReactions(reactions)))
)


