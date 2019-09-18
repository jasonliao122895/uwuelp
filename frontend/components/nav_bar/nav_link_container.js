import { connect } from 'react-redux';
import NavLink from './nav_link';
import { filter } from '../../actions/filter_actions';

const mapDispatchToProps = (dispatch) => {
  
  return {
    filter: (filt, value) =>  dispatch(filter(filt, value))
  }
}


export default connect(
  null,
  mapDispatchToProps
)(NavLink);