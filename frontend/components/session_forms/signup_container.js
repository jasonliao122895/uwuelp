import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import SessionForm from './session';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);