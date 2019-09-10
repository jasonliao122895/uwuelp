import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { signout } from '../../actions/session_action';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
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
)(NavBar);
