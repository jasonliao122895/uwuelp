import { connect } from 'react-redux';
import ReactionCreate from './reaction_create';
import { addReaction } from '../../actions/reaction_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addReaction: (reaction) => dispatch(addReaction(reaction))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ReactionCreate);