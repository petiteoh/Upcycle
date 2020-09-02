import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';
import { getTopPost } from '../../util/post_api_util';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  let authors = {}
  Object.values(state.users)
    .filter((author) => author)
    .map((user => authors[user._id] = user.handle))
  return ({
  authors,
  user: state.session.user,
  isAuthenticated: state.session.isAuthenticated,
})};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login({email: "demouser@demouser.com", password: "111111"})),
    getTopPost: () => dispatch(getTopPost()),
    fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);