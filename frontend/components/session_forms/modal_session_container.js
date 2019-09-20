import { connect } from 'react-redux';
import { signin } from '../../actions/session_action';
import ModalSession from './modal_session';
import { closeModal } from '../../actions/modal_action';

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (user) => dispatch(signin(user)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ModalSession); 