import { connect } from 'react-redux';
import { signin } from '../../actions/session_action';
import SessionForm from './session';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "login"
  }
}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signin(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
 