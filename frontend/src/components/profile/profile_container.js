import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUserPosts } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";


const msp = (state) => {
  
    const categories = Object.values(state.categories).map((category) => category);
    // debugger
    return {
      posts: Object.values(state.posts),
      categories: categories,
      user: state.session.user
    };
};

const mdp = (dispatch) => {

  return {
        fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
        fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(msp, mdp)(Profile);
