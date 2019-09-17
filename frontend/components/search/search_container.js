import { connect } from 'react-redux';
import Search from './search';
import { filter } from '../../actions/filter_actions';


const mapStateToProps = (state) => {
  return {
    find: state.filters.find,
    near: state.filters.near
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (filt, value) => dispatch(filter(filt, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);