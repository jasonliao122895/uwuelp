import { connect } from 'react-redux';
import UserProfilePage from './user_profile_page';
import { fetchUser } from '../../actions/users_actions'
import { openModal } from '../../actions/modal_action';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePage);