import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUserPosts, fetchPosts, upcyclePost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import { fetchAllUsers } from "../../actions/user_actions";



const msp = (state) => {
  
    const categories = Object.values(state.categories).map((category) => category);
    const categoryObjs = Object.values(state.categories).map(
      (category) => category
    );
    // debugger
    return {
      posts: Object.values(state.posts),
      categories: categories,
      user: state.session.user,
      categoryObjs,
      currentUser: state.session.user,
      upcycles: state.upcycles,
      user: state.session.user,
      authors: Object.values(state.users)
    };
};

const mdp = (dispatch) => {

  return {
    fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchAllUsers()),
    upcyclePost: (id) => dispatch(upcyclePost(id)),
  };
};

export default connect(msp, mdp)(Profile);
