import { connect } from 'react-redux';
import { fetchBusiness } from '../../../actions/businesses_action';
import { updateReview, deleteReview } from '../../../actions/review_actions';
import ProfileReviewIndexItem from './profile_review_index_item';
import { fetchUser } from '../../../actions/users_actions';


const mapStateToProps = state => {

  let business = state.entities.businesses
  return {
    business,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileReviewIndexItem);