import { RECEIVE_CATEGORIES } from "../actions/category_actions";

const _emptyCategories = [];

const categoriesReducer = (state = _emptyCategories, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.data;
    default:
      return state;
  }
};

export default categoriesReducer;
