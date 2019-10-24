import { connect } from 'react-redux';
import UserProfile from './user_profile'
import { signout } from '../../actions/session_action';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout()),
    fetchUser: id => dispatch(fetchUser(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
