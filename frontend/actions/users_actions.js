export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserApi from '../util/users_api_util';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = (id) => (dispatch) => (
  UserApi.fetchUser(id)
    .then((user) => dispatch(receiveUser(user)))
)