import { connect } from "react-redux";
// import { fetchCategories } from "../../actions/session_actions";
import CategoryDD from "./category-dd";

const mapStateToProps = (state) => {
  return {
    categories: ["Fashion", "Electronics", "Homegoods", "Clothing"]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDD);
