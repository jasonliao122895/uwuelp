import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/users_actions';
import FriendIndexItem from './friend_index_item';

const mapStateToProps = (state, ownProps) => {
  
  return {
    friendItem: state.entities.users[ownProps.friend.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndexItem);