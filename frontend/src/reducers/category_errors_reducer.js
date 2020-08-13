import {
  RECEIVE_CATEGORIES,
  RECEIVE_ERRORS,
} from "../actions/category_actions";

const _emptyCategoryErrors = [];

const CategoryErrorsReducer = (state = _emptyCategoryErrors, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return _emptyCategoryErrors;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default CategoryErrorsReducer;
