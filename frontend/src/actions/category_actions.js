import * as CategoryAPIUtil from "../util/category_api_util";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const receiveCategoryErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchCategories = () => (dispatch) =>
  CategoryAPIUtil.getCategories()
    .then((category) => dispatch(receiveCategories(category)))
    .catch((err) => dispatch(receiveCategoryErrors(err.response.data)));