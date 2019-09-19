import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
  // debugger
  let reviews = Object.values(state.entities.reviews)
  return {
    reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);