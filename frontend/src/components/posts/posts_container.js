import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import Posts from "./posts";

const msp = (state) => {
  const categories = Object.values(state.categories).map(
    (category) => category
  );
  // debugger
  return {
    posts: Object.values(state.posts),
    categories: categories
  };
};

const mdp = (dispatch) => {
  // debugger
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(msp, mdp)(Posts);
