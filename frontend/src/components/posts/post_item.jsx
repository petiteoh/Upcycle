import React from "react";
import { Link } from "react-router-dom";

class PostItem extends React.Component {
  render() {
      // debugger
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.description}</p>
        <p>{this.props.post.category}</p>
        {/* <Link to={`/posts/${this.props.post._id}`}> */}
          <img src={this.props.post.image} height="100px" width="100px" />
        {/* </Link> */}
      </div>
    );
  }
}

export default PostItem;
