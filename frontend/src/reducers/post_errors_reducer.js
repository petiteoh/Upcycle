import {
  RECEIVE_ERRORS, RECEIVE_POSTS
} from "../actions/post_actions";

const nullErrors = [];

const PostErrorsReducer = (state = nullErrors, action) => {
  Object.freeze(state);

  ;
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_POSTS:
      return nullErrors;
    default:
      return state;
  }
};

export default PostErrorsReducer;
