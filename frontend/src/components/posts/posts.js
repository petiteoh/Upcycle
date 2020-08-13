import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "./post_item";

class Post extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      posts: [],
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
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    // debugger
    let filtered = this.state.posts.filter((post) => {
      debugger
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
        <div>
          <div>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder="Search"
            />
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
          </div>
          <div>{allPosts}</div>
        </div>
      );
    }
  }
}

export default withRouter(Post);
