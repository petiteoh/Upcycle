import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  CREATE_POST
} from "../actions/post_actions";

const PostReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      newState = action.posts.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState = action.posts.data;
      return newState;
    case CREATE_POST:
      newState = action.post.data;
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
