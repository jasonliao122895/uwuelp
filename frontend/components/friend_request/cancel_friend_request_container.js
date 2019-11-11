import { connect } from 'react-redux';
import { cancelFriendRequest } from '../../actions/friend_request_action';
import CancelFriendRequest from './cancel_friend_request';

const mapDispatchToProps = dispatch => {
  return {
    cancelFriendRequest: receiver_id => dispatch(cancelFriendRequest(receiver_id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CancelFriendRequest)