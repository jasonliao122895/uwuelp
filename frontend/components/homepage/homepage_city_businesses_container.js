import { connect } from 'react-redux';
import HomepageCityBusinesses from './homepage_city_businesses';
import { getHomepageBusinesses } from '../../actions/homepage_businesses_action';

const mapStateToProps = state => {
  return {
    businesses: Object.values(state.homepageBus)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomepageBusinesses: (city) => dispatch(getHomepageBusinesses(city))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageCityBusinesses);