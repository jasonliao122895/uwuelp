import { connect } from 'react-redux';
import Search from './search';
import { filter } from '../../actions/filter_actions';
import { clearBusinesses } from '../../actions/businesses_action';
import { getBusinessesRes } from '../../actions/search_business_action';

const mapStateToProps = (state) => {
  let searchRes = Object.values(state.searchRes)
  return {
    find: state.filters.find,
    near: state.filters.near,
    searchRes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (filt, value) => dispatch(filter(filt, value)),
    getBusinessesRes: (query) => dispatch(getBusinessesRes(query)),
    clearBusinesses: () => dispatch(clearBusinesses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);