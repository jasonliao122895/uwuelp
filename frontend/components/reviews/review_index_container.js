import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { fetchReaction, fetchReactions } from '../../actions/reaction_actions';

const mapStateToProps = (state) => {
  // debugger
  let reviews = Object.values(state.entities.reviews)
  let reactions = Object.values(state.entities.reactions)
  let numUseful = reactions.filter((reaction) => reaction.useful === true).length
  let numFunny = reactions.filter((reaction) => reaction.funny === true).length
  let numCool = reactions.filter((reaction) => reaction.cool === true).length
  // debugger
  return {
    reviews,
    numUseful,
    numFunny,
    numCool
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchReaction: (id) => dispatch(fetchReaction(id)),
    fetchReactions: (review) => dispatch(fetchReactions(review))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);