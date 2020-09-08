import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { fetchCurrentUser} from '../../actions/'
import Nav from './nav';

const mapStateToProps = state => {
  // debugger
  return ({
  user: state.session.user,
  isAuthenticated: state.session.isAuthenticated
  
})};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);