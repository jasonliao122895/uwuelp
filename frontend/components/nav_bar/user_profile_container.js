import { connect } from 'react-redux';
import UserProfile from './user_profile'
import { signout } from '../../actions/session_action';


const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
