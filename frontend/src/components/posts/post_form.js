import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../src/post-form.css";
import axios from "axios";
import $ from "jquery";


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      creator_id: props.currentUser.id,
      title: "",
      description: "",
      image: "",
      category_id: "5f346b5e25454bc1217ce0a3",
      selectedFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCategoryId = this.updateCategoryId.bind(this);
    this.singleFileChangedHandler = this.singleFileChangedHandler.bind(this);
    this.singleFileUploadHandler = this.singleFileUploadHandler.bind(this);
  }

  singleFileChangedHandler (e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ selectedFile: file, image: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
            ;
            return this.setState({ image: response.data.location });
          }
        })
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.createPost === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors })
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    
    this.singleFileUploadHandler().then(() => {
      const post = this.state;
      // return this.props.createPost(post)
      this.props.createPost(post)
    }).then(() => {this.props.history.push("/posts")
    })
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li className="post-errors" key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  
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

  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, categoryObjs, categoryIds } = this.props;
    const { title, description, image, category_id } = this.state;
// debugger
    const imagePreview =
      this.state.image.length > 0 ? (
        <img src={this.state.image} />
      ) : (
        <div className="df">
          <img
            id="photo"
            className="w1"
            src="https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-part-2-1/80/Recycle_gray-512.png"
          />
        </div>
      );
// debugger
    return (
      <div className="create-post-container">
        <form className="create-post-form" onSubmit={this.handleSubmit}>
          <h1 className="create-post-header">Create a post</h1>
          <div className="all-field-container">
            <div className="create-post-field-container">
              <input
                className="create-post-input oN bs"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Title"
              />
              <br />
              <textarea
                className="create-post-input textarea oN bs"
                type="textarea"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              <br />
              <select
                className="dd-list oN bs"
                onChange={this.updateCategoryId}
              >

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
            </div>
            <div className="w1">
              <div className="drop w1 bs">
                <input
                  type="file"
                  id="filePhoto"
                  onChange={this.singleFileChangedHandler}
                />
                {imagePreview}
              </div>
            </div>
          </div>
          {/* <div className="signup-errors-container">{this.renderErrors()}</div> */}
          <input
            className={`create-post-button ${title && description && image ? "ready" : ""}`}
            type="submit"
            value="Create Post"
          />
        </form>
        <Link to="/posts" className="signup-exit">
          x
        </Link>
      </div>
    );
  }
}

export default PostForm;
