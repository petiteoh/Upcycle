import { connect } from "react-redux";
import { fetchPostToEdit, fetchPost } from "../../actions/post_actions";
import EditForm from "./edit_form";

const msp = (state, ownProps) => {
    debugger
    // const postId = ownProps.match.params.post_id
    const post = Object.values(state.posts).filter(
    (post) => post._id === ownProps.match.params.post_id)
    return {
        // postId,
        post,
    };
};

const mdp = (dispatch) => {
    debugger
    return {
        fetchPostToEdit: (data) => dispatch(fetchPostToEdit(data)),
        // fetchPost: (id) => dispatch(fetchPost(id)),
    };
};

export default connect(msp, mdp)(EditForm);
