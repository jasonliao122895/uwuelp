import { connect } from 'react-redux';
import { sendFriendRequest } from '../../actions/friend_request_action';
import FriendRequest from './send_request';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendFriendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequest);