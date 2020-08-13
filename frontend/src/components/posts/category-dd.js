import React from "react";
import { withRouter, Link } from "react-router-dom";

class CategoryDD extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
      category_id: "Select a Category",
    };

    this.update = this.update.bind(this);
  }

  update(e) {
      debugger
      
      return e => this.setState({
        category_id: this.props.categories[e.currentTarget.value]
      });
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
    const { categories } = this.props;
    const { listOpen, category_id } = this.state;
    // debugger
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{category_id}</div>
        </div>
        {listOpen && (
          <ul className="dd-list">
            {categories.map((category, idx) => {
              return (
                <>
                    <li key={idx} className="dd-list-item" value={category} onClick={this.update}>
                        {category}
                    </li>
                </>
              );
            })}
            {this.state.category_id}
          </ul>
        )}
      </div>
    );
  }
}

export default CategoryDD;