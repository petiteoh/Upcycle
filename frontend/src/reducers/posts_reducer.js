import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  CREATE_POST,
  RECEIVE_POST
} from "../actions/post_actions";

const PostReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
   
  debugger
  switch (action.type) {
    case RECEIVE_POST:
      newState = Object.assign({}, state, action.post.data);
      return newState;
    case RECEIVE_POSTS:
      newState = Object.assign({}, state, action.posts.data);
      return newState;
    case RECEIVE_USER_POSTS:
      newState = Object.assign({}, state, action.posts.data);
      return newState;
    case CREATE_POST:
      newState = Object.assign({}, state, action.post.data);
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
