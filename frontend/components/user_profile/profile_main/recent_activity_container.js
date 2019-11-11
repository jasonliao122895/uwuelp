import { connect } from 'react-redux';
import { fetchBusiness } from '../../../actions/businesses_action';
import RecentActivity from './recent_activity';

const mapStateToProps = state => {
  let business;
  if (Object.values(state.entities.businesses)) {
    business = Object.values(state.entities.businesses)
  }
  return {
    business
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