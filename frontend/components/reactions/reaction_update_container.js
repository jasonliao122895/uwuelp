import { connect } from 'react-redux';
import ReactionUpdate from './reaction_update';
import { updateReaction, fetchReaction, fetchReactions } from '../../actions/reaction_actions';
import {  } from '../../actions/review_actions';



const mapDispatchToProps = (dispatch) => {
  return {
    updateReaction: (reaction) => dispatch(updateReaction(reaction)),
    fetchReaction: (id) => dispatch(fetchReaction(id)),
    fetchReactions: (review) => dispatch(fetchReactions(review)),
    
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ReactionUpdate);