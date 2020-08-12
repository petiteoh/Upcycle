import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";

const msp = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mdp = (dispatch) => {
  return {
    createPost: (data) => dispatch(createPost(data)),
  };
};

export default connect(msp, mdp)(PostForm);
