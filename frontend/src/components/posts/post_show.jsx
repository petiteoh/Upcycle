import React from "react";
import { withRouter } from "react-router-dom";
import { fetchPost } from "../../actions/post_actions";

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    ;
    return (
      <div>
        <div>
          <p>{this.props.post[0].title}</p>
          <p>{this.props.post[0].description}</p>
        </div>
        <div>
          <img src={this.props.post[0].image} height="100px" width="100px" />
        </div>
      </div>
    );
  }
}


export default withRouter(PostShow);


