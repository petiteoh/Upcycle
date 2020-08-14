import React from "react";
import { withRouter, Link } from "react-router-dom";

class CategoryDD extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listOpen: false,
      category_id: "Select a Category",
    };
    this.categoryType = React.createRef();
    this.update = this.update.bind(this);
  }

  update(e) {      
      ;
    this.setState({ 
        category_id: e.target.value
      });
  }

  componentDidMount() {
      this.props.fetchCategories()
  }

//   componentDidUpdate(prevProps, prevState) {
//       if (prevState !== this.state ) {
//           this.setState(this.state.category_id)
//       };
//   }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { categories, categoryObjs, categoryIds } = this.props;
    const { listOpen } = this.state;
    if (categoryObjs.length === 0) return null;
    
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">Select a Category</div>
        </div>
        {listOpen && (
            <form >
                <select className="dd-list" onChange={this.update}>
                    {categoryObjs.map((category, idx) => {
                    return (
                        <>
                            <option key={idx} className="dd-list-item" value={category._id}>
                                {category.name}
                            </option>
                        </>
                    );
                    })}
                </select>
            </form>
        )}
      </div>
    );
  }
}

export default CategoryDD;