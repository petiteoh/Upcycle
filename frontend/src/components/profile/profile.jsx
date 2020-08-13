import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "../posts/post_item";
import "../../search-bar.css";

class Profile extends React.Component {
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
    this.props.fetchUserPosts();
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
    // let filtered;
    // if (this.state["filterSearch"] === "title") {
    //   filtered = this.state.posts.filter((post) => {
    //     return (post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);});
    // } else {
    //   let cat_ids;
    //   this.state.categories.map((category) => cat_ids[category._id] === category.name);

    //   filtered = this.state.posts.filter((post) => {
    //     return (post.category_id.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);});
    // }

    // debugger
    let allPosts;

    // if (this.state.posts.length === 0) {
    //   return <div>No Posts</div>;
    // } else {
      allPosts = filtered.map((post, idx) => (
        <PostItem key={idx} post={post} />
      ));
    // }
      debugger
      return (
        <div>
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
              <div className="radio">
                <div className="filter-container">
                  <input
                    id="opt1"
                    type="radio"
                    value="description"
                    checked={this.state.filterSearch === "description"}
                    onChange={this.onRadioChange}
                  />
                  <label for="opt1" className="label">
                    <span className="span">Description</span>
                  </label>
                  <input
                    id="opt2"
                    type="radio"
                    value="title"
                    checked={this.state.filterSearch === "title"}
                    onChange={this.onRadioChange}
                  />
                  <label for="opt2" className="label">
                    <span className="span">Title</span>
                  </label>
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="posts">User's posts below{allPosts}</div>
        </div>
    );
  }
}

export default withRouter(Profile);
