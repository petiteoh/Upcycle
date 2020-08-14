import { connect } from "react-redux";
import { fetchPosts, upcyclePost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import Posts from "./posts";

const msp = (state, ownProps) => {
  debugger;
  const categories = Object.values(state.categories).map(
    (category) => category
  );
  const categoryObjs = Object.values(state.categories).map(
    (category) => category
  );
  
  return {
    posts: Object.values(state.posts),
    categories: categories,
    categoryObjs,
    user: state.session.user
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
