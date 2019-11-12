import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businesses_action';
import BusinessShow from './business_show';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  let numReviews = Object.keys(state.entities.reviews).length
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading.showLoading,
    numReviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);