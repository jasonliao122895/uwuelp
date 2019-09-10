import { connect } from 'react-redux';
import BusinessIndex from './businesses_index';
import { fetchBusinesses } from '../../actions/businesses.action';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses);
  return {
    businesses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);