import { connect } from 'react-redux';
import { fetchBusiness } from '../../../actions/businesses_action';
import RecentActivity from './recent_activity';

const mapStateToProps = (state, ownProps) => {
  
  return {
    business: state.entities.businesses[ownProps.review.business_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivity);