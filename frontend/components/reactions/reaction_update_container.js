import { connect } from 'react-redux';
import ReactionUpdate from './reaction_update';
import { updateReaction, fetchReaction, fetchReactions } from '../../actions/reaction_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    review
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReaction: (reaction) => dispatch(updateReaction(reaction)),
    fetchReaction: (id) => dispatch(fetchReaction(id)),
    fetchReactions: (review) => dispatch(fetchReactions(review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
    
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ReactionUpdate);