import React from "react";
import { Link } from "react-router-dom";

class PostItem extends React.Component {
  render() {

    const reflectUpcycleStatus = () => {
      if (this.props.post.upcycler_ids.includes(this.props.user._id)) {
        return (
          <button >
            Upcycled
          </button>
        );
      } else {
        <button onClick={() => this.props.upcyclePost(this.props.post._id)}>
          Upcycle
        </button>;
      }
    }
      
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.description}</p>
        <p>{this.props.post.category}</p>
        <p>{this.props.post.upcycle_ids.length.uniq}</p>
        <p>{this.props.post.upcycler_ids}</p>
        {/* <Link to={`/posts/${this.props.post._id}`}> */}
          <img src={this.props.post.image} height="100px" width="100px" />
        {/* </Link> */}
        {reflectUpcycleStatus}
      </div>
    );
  }
}

export default PostItem;
