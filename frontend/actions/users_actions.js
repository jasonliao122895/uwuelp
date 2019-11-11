export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS'
import * as UserApi from '../util/users_api_util';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUser = (id) => (dispatch) => (
  UserApi.fetchUser(id)
    .then((user) => dispatch(receiveUser(user)))
)

export const findFriends = () => dispatch => (
  UserApi.findFriends()
    .then(users => dispatch(receiveUsers(users)))
)

