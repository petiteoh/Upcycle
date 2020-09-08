import {
  RECEIVE_POSTS,
  RECEIVE_EDIT_POST,
  RECEIVE_USER_POSTS,
  CREATE_POST,
  RECEIVE_POST,
  RECEIVE_POST_UPCYCLES,
  RECEIVE_UPCYCLE,
  REMOVE_POST
} from "../actions/post_actions";

const PostReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  // debugger
  let posts = {};

  switch (action.type) {
    case RECEIVE_POST:
      newState = Object.assign({}, state, action.post.data);
      return newState;
    case RECEIVE_EDIT_POST:
      newState = Object.assign({}, state);
      Object.values(newState).filter((post) => posts[post._id] = post);
      posts[action.post.data.post._id] = action.post.data.post;
      return posts;
    case RECEIVE_POSTS:
      newState = Object.assign({}, state, action.posts.data);
      return newState;
    case RECEIVE_USER_POSTS:
      newState = Object.assign({}, state, action.posts.data);
      return newState;
    case CREATE_POST:
      newState = Object.assign({}, state, action.post.post);
      return newState;
    case RECEIVE_POST_UPCYCLES:
      newState = Object.assign({}, state, action.upcycles.data);
      return newState;
    case REMOVE_POST:
      debugger
      newState = Object.assign({}, state);
      Object.values(newState).filter((post) => posts[post._id] = post)
      delete posts[action.postId.data._id]
      return posts;
    default:
      return state;
  }
};

export default PostReducer;
