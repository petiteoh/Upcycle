import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "./post_item.jsx";
import "../../search-bar.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      posts: [],
      categories: [],
      search: "",
      filterSearch: "",
    };

    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange = (e) => {
    // debugger
    this.setState({
      filterSearch: e.target.value,
    });
  };

  componentWillMount() {
    // debugger
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  componentWillReceiveProps(newState) {
    // debugger
    this.setState({ posts: newState.posts });
    this.setState({ categories: newState.categories });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    // debugger
    let filtered = this.state.posts.filter((post) => {
      // debugger
      if (this.state["filterSearch"] !== "title") { 
      return (
        post.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
      } else {
        return (
        post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
      }
    });

    // debugger
    if (this.state.posts.length === 0) {
      return <div>No Posts</div>;
    } else {
      const allPosts = filtered.map((post, idx) => (
        <PostItem key={idx} post={post} />
      ));
      // debugger
      return (
        <div className="search">
          <div className="search-container">
            <div className="search-box">
              <div className="search-icon-box">
                <img
                  className="search-icon"
                  src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-4.png"
                  height="30"
                  width="30"
                ></img>
              </div>
              <div className="search-input-box">
                <input
                  className="search-input"
                  type="text"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                  placeholder="Search"
                />
              </div>
            </div>
            <div>
              <input
                type="radio"
                value="description"
                checked={this.state.filterSearch === "description"}
                onChange={this.onRadioChange}
              />
              Description
              <input
                type="radio"
                value="title"
                checked={this.state.filterSearch === "title"}
                onChange={this.onRadioChange}
              />
              Title
              <div />
            </div>
          </div>
          <div>{allPosts}</div>
        </div>
            
      );
    }
  }
}

export default withRouter(Post);
