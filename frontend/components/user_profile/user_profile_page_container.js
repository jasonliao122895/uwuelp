import { connect } from 'react-redux';
import UserProfilePage from './user_profile_page';
import { fetchUser } from '../../actions/users_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePage);