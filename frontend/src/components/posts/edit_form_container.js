import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { fetchCategories } from "../../actions/category_actions";
import EditForm from "./edit_form";

const msp = (state) => {

};

const mdp = (dispatch) => {

};

export default connect(msp, mdp)(EditForm);
