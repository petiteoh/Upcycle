import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "./post_item";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
    // debugger
    if (this.state.posts.length === 0) {
      return (
        <div>
          No Posts
        </div>
      );
    } else {

      const allPosts = this.state.posts.map((post, idx) => (<PostItem key={idx} post={post} />))
      // debugger
      return (
        <div>
          {allPosts}
        </div>
      );
    }
  }
}

export default withRouter(Post);
