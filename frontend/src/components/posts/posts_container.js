import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import Posts from "./posts";

const msp = (state) => {
  return {
    posts: Object.values(state.posts),
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
