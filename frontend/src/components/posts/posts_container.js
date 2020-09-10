import { connect } from "react-redux";
import { fetchPosts, upcyclePost, deletePost } from "../../actions/post_actions";
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
    let authors = {}
    Object.values(state.users)
      .filter((author) => author)
      .map((user => authors[user._id] = user.handle))
    let categoryNames = {}
    Object.values(state.categories)
      .filter((category) => category)
      .map((category => categoryNames[category._id] = category.name))
  
  return {
    posts: Object.values(state.posts),
    categories: categories,
    categoryObjs,
    upcycles: state.upcycles,
    user: state.session.user,
    isAuthenticated: state.session.isAuthenticated,
    // authors: Object.values(state.users)
    authors,
    categoryNames
  };
};

const mdp = (dispatch) => {
  
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUsers: () => dispatch(fetchAllUsers()),
    upcyclePost: (id) => dispatch(upcyclePost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(msp, mdp)(Posts);
