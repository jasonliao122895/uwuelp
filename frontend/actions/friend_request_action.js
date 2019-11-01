
import * as FriendRequestApiUtil from '../util/friend_request_api_util';

export const sendFriendRequest = (friendRequest) => dispatch => (
  FriendRequestApiUtil.sendFriendRequest(friendRequest)
)

export const rejectFriendRequest = (id) => dispatch => (
  FriendRequestApiUtil.rejectFriendRequest(id)
)