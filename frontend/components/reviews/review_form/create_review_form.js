import { connect } from 'react-redux';
import { createReview } from '../../../actions/review_actions';
import { fetchBusiness } from '../../../actions/businesses.action';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  
  return {
    formType: "create",
    business: state.entities.businesses[ownProps.match.params.businessId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)