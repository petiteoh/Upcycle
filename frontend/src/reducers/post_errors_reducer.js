import {
  RECEIVE_ERRORS
} from "../actions/post_actions";

const PostErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  debugger;
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, action.errors);
      return newState;
    default:
      return state;
  }
};

export default PostErrorsReducer;
