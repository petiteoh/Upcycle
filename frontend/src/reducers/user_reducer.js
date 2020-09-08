import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_USER_POSTS, CREATE_POST } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users.data);
    case RECEIVE_USER_POSTS:
      return Object.assign({}, state, action.posts.data);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.currentUser.data);
    case CREATE_POST:
      let newState = Object.assign({}, state, action.post.user);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;