import * as FriendshipApiUtil from '../util/friendship_api_util';

export const addFriend = (friendship) => dispatch => (
  FriendshipApiUtil.addFriend(friendship)
)

export const removeFriend = (id) => dispatch => (
  FriendshipApiUtil.removeFriend(id)
)