import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/post-form.css";
import CategoryDD from "../../components/posts/category-dd-container";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      creator_id: props.currentUser.id,
      title: "",
      description: "",
      image: null,
      category_id: "",
      // materials_id: ["5f3387369c03638d3400c1b0"],
      // location_id: "5f3386a89c03638d3400c1ae",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCategoryId = this.updateCategoryId.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createPost(this.state).then(() => {
      this.props.history.push("/posts")
    })
  };
  

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  updateCategoryId(e) {
    this.setState({
      category_id: e.target.value,
    });
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, categoryObjs, categoryIds } = this.props;

    return (
      <div className="create-post-container">
        <form className="create-post-form" onSubmit={this.handleSubmit}>
          <h1 className="create-post-header">Create a post</h1>
          <div className="all-field-container">
            <div className="create-post-field-container">
              <input
                className="create-post-input"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Title"
              />
              <br />
              <textarea
                className="create-post-input"
                id="create-post-input-description"
                type="textarea"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              <br />
              {/* <input
                className="create-post-input"
                type="textarea"
                value={this.state.image}
                onChange={this.fileSelectedHandler}
                placeholder="Select a Category"
              /> */}
              {/* <CategoryDD /> */}
              <select className="dd-list" onChange={this.updateCategoryId}>
                {categoryObjs.map((category, idx) => {
                  return (
                    <>
                      <option
                        key={idx}
                        className="dd-list-item"
                        value={category._id}
                      >
                        {category.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <br />
              {/* <input
                type="dropdown"
                value={this.state.category}
                onChange={this.update("category_id")}
                placeholder="Add link to your image"
              />
              <input
                type="dropdown"
                value={this.state.materials}
                onChange={this.update("image")}
                placeholder="Add link to your image"
              />
              <input
                type="dropdown"
                value={this.state.location}
                onChange={this.update("location")}
                placeholder="Add link to your image"
              /> */}
              {/* CHANGE need to add categories, materials, location */}
            </div>
            <div className="upload-image-container">
              <input
                className="upload-image"
                type="file"
                value={this.state.image}
                onChange={this.handleChange}
                placeholder="Upload an Image"
              />
              <button onClick={this.handleUpload}>Upload</button>
            </div>
          </div>
          <input
            className="create-post-button"
            type="submit"
            value="Create Post"
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
