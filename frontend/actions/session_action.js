export const RECEIVER_CURRENT_USER = 'RECEIVER_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util'


export const receiveCurrentUser = (user) => ({
  type: RECEIVER_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiverErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiverErrors(errors.responseJSON))
    )
)

export const signin = (user) => (dispatch) => (
  APIUtil.signin(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiverErrors(errors.responseJSON))
    )
)

export const signout = () => (dispatch) => (
  APIUtil.signout()
    .then(() => dispatch(logoutCurrentUser()))
)