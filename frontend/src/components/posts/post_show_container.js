import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from "./post_show";

const msp = (state, ownProps) => {
  const post = Object.values(state.posts).filter(
    (post) => post._id === ownProps.match.params.id)
    return {
    post,
  };
};

const mdp = (dispatch) => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
  };
};

export default connect(msp, mdp)(PostShow);