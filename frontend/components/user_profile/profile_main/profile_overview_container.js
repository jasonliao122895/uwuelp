import { connect } from 'react-redux';
import ProfileOverview from './profile_overview';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

export default connect(
  mapStateToProps,
  null
)(ProfileOverview)