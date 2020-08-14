import React from "react";
import { Link } from "react-router-dom";

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
          <button className="upcycle-button" value="Upcycled">
            Upcycled
          </button>
        );
      } else {
        return (
          <button className="upcycle-button" value="Upcycle" onClick={() => this.props.upcyclePost(this.props.post._id)}>
            Upcycle
          </button>
        )
      }
    }
    
    const upcycleCount = () => {
      // debugger
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
        <div className="left-container">
          <div className="image-container">
            <img src={this.props.post.image} height="100px" width="100px" />
          </div>
        </div>
        <div className="right-container">
          <p className="post-title">{this.props.post.title}</p>
          <p className="post-description">{this.props.post.description}</p>
          <label className="post-category-label"> Category:
            <p className="post-category-name">{cats[this.props.post.category_id]}</p>
          </label>
          <div>
            <p className="post-upcycle-count">{upcycleCount()}</p>
            {reflectUpcycleStatus()}
          </div>
        </div>
      </div>

    );
  }
}

export default PostItem;
