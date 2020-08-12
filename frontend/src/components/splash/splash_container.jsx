import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
  user: state.session.user,
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login({email: "demouser@demouser.com", password: "111111"})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);