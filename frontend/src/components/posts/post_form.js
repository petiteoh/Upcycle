import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../src/post-form.css";
import axios from "axios";
import $ from "jquery";


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      creator_id: props.currentUser.id,
      title: "",
      description: "",
      image: "",
      category_id: "",
      // materials_id: ["5f3387369c03638d3400c1b0"],
      // location_id: "5f3386a89c03638d3400c1ae",
      selectedFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCategoryId = this.updateCategoryId.bind(this);
    this.singleFileChangedHandler = this.singleFileChangedHandler.bind(this);
    this.singleFileUploadHandler = this.singleFileUploadHandler.bind(this);
    // this.ocShowAlert = this.ocShowAlert.bind(this);
  }

  singleFileChangedHandler (event) {
    this.setState({
      selectedFile: event.target.files[0],
    })
  };

  singleFileUploadHandler () {
    const data = new FormData(); // If file selected
    if (this.state.selectedFile) {
       data.append(
        "postImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      return axios
        .post("/api/uploads/post-img-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            debugger;
            return this.setState({ image: response.data.location });
          }
        })
    }
  };
  // ShowAlert Function
  // ocShowAlert (message, background = "#3089cf") {
  //   let alertContainer = document.getElementbyId("oc-alert-container"),
  //     alertEl = document.createElement("div"),
  //     textNode = document.createTextNode(message);
  //   alertEl.setAttribute("className", "oc-alert-pop-up");
  //   $(alertEl).css("background", background);
  //   alertEl.appendChild(textNode);
  //   debugger
  //   alertContainer.appendChild(alertEl);
  //   setTimeout(function () {
  //     $(alertEl).fadeOut("slow");
  //     $(alertEl).remove();
  //   }, 3000);
  // };

  handleSubmit(e) {
    e.preventDefault();
    
    this.singleFileUploadHandler().then(() => {
      const post = this.state;
      return this.props.createPost(post)
    })
    // .then(() => {
      // return <Redirect to="/posts"/>
      // this.props.history.push("/posts");
    // })
    // .catch((err) => {
    //   this.props.history.push("/posts");
    // })
  }
  
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

  // onClick() {
  //   this.handle
  // }

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
            <div>
              <div className="container">
                {/* For Alert box*/}
                <div id="oc-alert-container"></div>
                {/* Single File Upload*/}
                <div
                  className="card border-light mb-3 mt-5"
                  style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
                >
                  <div className="card-header">
                    <h3 style={{ color: "#555", marginLeft: "12px" }}>
                      Single Image Upload
                    </h3>
                    <p className="text-muted" style={{ marginLeft: "12px" }}>
                      Upload Size: 250px x 250px ( Max 2MB )
                    </p>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Please upload an image for your post
                    </p>
                    <input
                      type="file"
                      onChange={this.singleFileChangedHandler}
                    />
                    <div className="mt-5">
                      {/* <button
                        className="btn btn-info"
                        onClick={this.singleFileUploadHandler}
                      >
                        Upload!
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            className="create-post-button"
            type="submit"
            value="Create Post"
          />
        </form>
        <Link className="close-form-link" to="/posts">
          Close Form
        </Link>
      </div>
    );
  }
}

export default PostForm;
