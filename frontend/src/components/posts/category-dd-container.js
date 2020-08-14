import { connect } from "react-redux";
import { fetchCategories } from "../../actions/category_actions";
import CategoryDD from "./category-dd";

const mapStateToProps = (state, ownProps) => {
    const categories = Object.values(state.categories).map(
      (category) => category.name
    );
    const categoryIds = Object.values(state.categories).map(
      (category) => category._id
    );
  return {
    categories,
    categoryIds,
    categoryObjs: Object.values(state.categories),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDD);
