import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businesses.action';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  
  return {
    business: state.entities.businesses[ownProps.match.params.businessId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);