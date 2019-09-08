import { connect } from 'react-redux';
import Homepage from './splash_page';
import { signout } from '../../actions/session_action'
const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);