import { connect } from 'react-redux';
import { updateReview } from '../../../actions/review_actions';
import { fetchBusiness } from '../../../actions/businesses.action';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../../actions/modal_action';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'edit',
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.errors.reviews,
    loggedIn: Boolean(state.session.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review) => dispatch(updateReview(review)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    openModal: () => dispatch(openModal())
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)