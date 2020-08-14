import React from "react";
import { Link } from "react-router-dom";
import "../../css/post_feed/post-feed.css"

class PostItem extends React.Component {

  render() {

    const cats = {
      "5f3387049c03638d3400c1af": "Furniture",
      "5f346b5425454bc1217ce0a2": "Electronics",
      "5f346b5e25454bc1217ce0a3": "Clothing",
      "5f346b8b25454bc1217ce0a4": "Houseware",
      "5f346ba625454bc1217ce0a5": "Outdoor",
    };

    const reflectUpcycleStatus = () => {
      if (this.props.post.upcycler_ids.includes(this.props.post.creator_id)) {
        return (
          <div>
            <img
              class="upcycle-logo"
              src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png"
              alt=""
            />
            <button className="upcycle-button" value="Upcycled">
              Upcycled
            </button>
          </div>
        );
      } else {
        return (
          <div className="upcycle-button-container">
            <button
              className="upcycle-button"
              value="Upcycle"
              onClick={() => this.props.upcyclePost(this.props.post._id)}
            >
              <img
                className="upcycle-logo"
                src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png"
                alt=""
              />
              <label>Upcycle</label>
            </button>
          </div>
        );
      }
    }
    
    const upcycleCount = () => {
      debugger
      if (this.props.post.upcycle_ids.length === 0) {
        return '0'
    } else {
        return this.props.post.upcycle_ids.length
    }
  };

  // let categoryObj = this.props.categoryObjs[this.props.post.category_id];
  // let categoryName = categoryObj[name]

    return (
      <div className="single-post-container">
        <div className="top-container">
          <p className="post-title">{this.props.post.title}</p>
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <div className="image-container">
              <img
                className="post-image"
                src={this.props.post.image}
                height="500px"
                width="500px"
              />
            </div>
          </div>
          <div className="right-container">
            <p className="post-description">{this.props.post.description}</p>
            <div className="upcycle-container">
              <p className="post-upcycle-count">{upcycleCount()}</p>
              {reflectUpcycleStatus()}
            </div>
            <label className="post-category-label">
              <p className="post-handle-name">
                Created By: <Link to={`posts/user/${this.props.user.id}`}>{this.props.user.handle}</Link>
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
