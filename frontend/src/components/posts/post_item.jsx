import React from "react";
import { Link } from "react-router-dom";

class PostItem extends React.Component {
  render() {
      // debugger
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.description}</p>
        {/* <Link to={`/posts/${this.props.post._id}`}> */}
          <img src={this.props.post.image} height="20px" width="20px" />
        {/* </Link> */}
      </div>
    );
  }
}

export default PostItem;
