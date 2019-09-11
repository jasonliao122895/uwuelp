import { connect } from 'react-redux';
import BusinessIndex from './businesses_index';
import { fetchBusinesses } from '../../actions/businesses.action';
import { filter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses);
  return {
    businesses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter) => dispatch(fetchBusinesses(filter)),
    updateBounds: (filt, val) => dispatch(filter(filt, val))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);