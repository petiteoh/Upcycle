import React from "react";

class PostItem extends React.Component {
  render() {
      
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default PostItem;
