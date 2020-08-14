import { connect } from "react-redux";
import { fetchPosts, upcyclePost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import {fetchAllUsers} from '../../actions/user_actions';
import Posts from "./posts";

const msp = (state, ownProps) => {
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
    currentUser: state.session.user,
    upcycles: state.upcycles,
    user: state.session.user,
    authors: Object.values(state.users)
  };
};

const mdp = (dispatch) => {
  
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUsers: () => dispatch(fetchAllUsers()),
    upcyclePost: (id) => dispatch(upcyclePost(id))
  };
};

export default connect(msp, mdp)(Posts);
