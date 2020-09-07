import React from "react";
import { Link } from "react-router-dom";
import "../../css/post_feed/post-feed.css"
import pencil from "../../images/pencil.png";
import trashcan from "../../images/delete.png";

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { 
      upcycles: this.props.upcycles,
      authorName: "" ,
      upcycled: this.props.post.upcycler_ids.includes(this.props.user.id) ? "Upcycled" : "Upcycle"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.classList.add('clicked');
    this.props.upcyclePost(this.props.post._id);
    this.setState({upcycles : this.state.upcycles + 1, upcycled: "Upcycled"});
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post._id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.upcycles !== prevProps.upcycles) {
      this.setState({
        upcycles: this.props.upcycles,
        authorName: this.props.authors[this.props.post.creator_id]
      });
    }
  }

  onClick() {
    debugger
      this.props.deletePost(this.props.post._id).then(this.forceUpdate())
  }

  render() {
    const cats = {
      "5f3387049c03638d3400c1af": "Furniture",
      "5f346b5425454bc1217ce0a2": "Electronics",
      "5f346b5e25454bc1217ce0a3": "Clothing",
      "5f346b8b25454bc1217ce0a4": "Houseware",
      "5f346ba625454bc1217ce0a5": "Outdoor",
    };

    const reflectUpcycleStatus = () => {
      // debugger
      if (this.props.post.upcycler_ids.includes(this.props.user.id)) {
        return (
          <div className="upcycle-button-container">
            <button className="upcycle-button clicked" value="Upcycled">
              <img
                class="upcycle-logo"
                src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png"
                alt=""
              />
              {this.state.upcycled}
            </button>
          </div>
        );
      } else {
        // debugger
        return (
          <div className="upcycle-button-container">
            <button
              className="upcycle-button"
              id="unclicked"
              value="Upcycle"
              placeholder="Upcycled"
              onClick={this.handleSubmit}
              // onClick={this.props.upcyclePost(this.props.post._id)}
            >
              <img
                className="upcycle-logo"
                src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png"
                alt=""
              />
              {this.state.upcycled}
            </button>
          </div>
        );
      }
    };

    const upcycleCount = () => {
      if (this.props.post.upcycle_ids.length === 0) {
        return "0";
      } else {
        return this.props.post.upcycle_ids.length;
      }
    };

    const editPostAndDeleteButton = () => {
      if (this.props.post.creator_id === this.props.user.id) {
        return (
          <div class="edit-delete-button-container">
            <Link to={`edit-post/${this.props.post._id}`}>
              <img class="pencil-icon" src={pencil}></img>
            </Link>
            <button class="delete-button" onClick={() => this.onClick()}> 
              <img class="trashcan-icon" src={trashcan}></img>
            </button>
          </div>
        )
      }
    }

    return (
      <div className="single-post-container">
        <div className="top-container">
          <p className="post-title">{this.props.post.title}</p>
          {editPostAndDeleteButton()}
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <div className="image-container">
              <img
                className="post-image"
                src={this.props.post.image}
                height="350px"
                width="350px"
              />
            </div>
          </div>
          <div className="right-container">
            <p className="post-description">{this.props.post.description}</p>
            <div className="upcycle-container">
              <p className="post-upcycle-count">{this.state.upcycles}</p>
              {reflectUpcycleStatus()}
            </div>
            <label className="post-category-label">
              <p className="post-handle-name">
                Created By:{" "}
                <Link to={`posts/user/${this.props.user.id}`}>
                  {this.props.authors[this.props.post.creator_id]}
                </Link>
              </p>
              <p className="post-category-name">
                Category: {cats[this.props.post.category_id]}
              </p>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
