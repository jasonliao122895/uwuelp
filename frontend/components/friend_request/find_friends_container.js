import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { findFriends } from '../../actions/users_actions';

const mapStateToProps = state => {
  let friends = Object.values(state.entities.users).filter(user => user.id !== state.session.id )
  return {
    friends
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findFriends: () => dispatch(findFriends())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFriends);