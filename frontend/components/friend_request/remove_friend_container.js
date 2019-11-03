import { connect } from 'react-redux';
import { removeFriend } from '../../actions/friendship_actions';
import RemoveFriend from './remove_friend';

const mapStateToProps =  state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFriend: inverseFriendId => dispatch(removeFriend(inverseFriendId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveFriend);