import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import Posts from "./posts";

const msp = (state) => {
  return {
    posts: Object.values(state.posts),
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(msp, mdp)(Posts);
