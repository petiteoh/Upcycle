import { connect } from "react-redux";
import { fetchPostToEdit, fetchPost } from "../../actions/post_actions";
import EditForm from "./edit_form";

const msp = (state, ownProps) => {
    const post = Object.values(state.posts).filter((post) => post._id === ownProps.match.params.post_id)
    const categories = Object.values(state.categories).map((category) => category.name);
    const categoryIds = Object.values(state.categories).map((category) => category._id);

    return {
        // postId,
        currentUser: state.session.user,
        post,
        categories,
        categoryIds,
        categoryObjs: Object.values(state.categories),
        errors: state.errors.postErrors,
    };
};

const mdp = (dispatch) => {
    return {
        fetchPostToEdit: (data) => dispatch(fetchPostToEdit(data)),
        // fetchPost: (id) => dispatch(fetchPost(id)),
    };
};

export default connect(msp, mdp)(EditForm);
