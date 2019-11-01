import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import { rejectFriendRequest } from '../../actions/friend_request_action';
import { addFriend } from '../../actions/friendship_actions';
import FriendRequestIndexItem from './friend_request_index_item';


const mapStateToProps = (state, ownProps) => {
  return {
    requester: state.entities.users[ownProps.request.requester_id],
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    fetchUser: id => dispatch(fetchUser(id)),
    rejectFriendRequest: id => dispatch(rejectFriendRequest(id)),
    addFriend: (friendship) => dispatch(addFriend(friendship))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestIndexItem);