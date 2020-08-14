import { connect } from "react-redux";
import { fetchPosts, upcyclePost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import Posts from "./posts";

const msp = (state) => {
  const categories = Object.values(state.categories).map(
    (category) => category.name
  );
  
  return {
    posts: Object.values(state.posts),
    categories: categories,
  };
};

const mdp = (dispatch) => {
  
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories()),
    upcyclePost: (id) => dispatch(upcyclePost(id))
  };
};

export default connect(msp, mdp)(Posts);
