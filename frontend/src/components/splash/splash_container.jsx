import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';
import { getTopPost } from '../../util/post_api_util';

const mapStateToProps = (state) => ({
  user: state.session.user,
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login({email: "demouser@demouser.com", password: "111111"})),
    getTopPost: () => dispatch(getTopPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);