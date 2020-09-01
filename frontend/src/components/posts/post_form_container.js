import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import PostForm from "./post_form";

const msp = (state) => {
  const categories = Object.values(state.categories).map(
    (category) => category.name
  );
  const categoryIds = Object.values(state.categories).map(
    (category) => category._id
  );
  return {
    currentUser: state.session.user,
    categories,
    categoryIds,
    categoryObjs: Object.values(state.categories),
    errors: state.errors.postErrors,
  };
};

const mdp = (dispatch) => {
  return {
    createPost: (data) => dispatch(createPost(data)),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(msp, mdp)(PostForm);
