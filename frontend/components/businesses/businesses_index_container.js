import { connect } from 'react-redux';
import BusinessIndex from './businesses_index';
import { filter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses);
  return {
    businesses,
    near: state.filters.near,
    find: state.filters.find,
    loading: state.ui.loading.indexLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filter: (filt, val) => dispatch(filter(filt, val))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);