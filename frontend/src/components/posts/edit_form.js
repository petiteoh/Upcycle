import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../src/post-form.css";
import axios from "axios";
import $ from "jquery";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      description: "",
      image: "",
      category_id: "5f346b5e25454bc1217ce0a3",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCategoryId = this.updateCategoryId.bind(this);
    this.singleFileChangedHandler = this.singleFileChangedHandler.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.post[0])
  }

  componentDidUpdate(prevProps) {
    if (this.props.post[0] !== prevProps.post[0]) {
        this.setState(this.props.post[0])
    };
  }
    
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchPostToEdit(this.state).then(() => {
        this.props.history.push("/posts")
    });
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

  render() {
      const { categories, categoryObjs, categoryIds } = this.props;
      const { title, description, image, category_id } = this.state;
      const imagePreview =
          image.length > 0 ? (
              <img src={image}/>
          ) : (
              <div className="df">
              <img
                  id="photo"
                  className="w1"
                  src="https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-part-2-1/80/Recycle_gray-512.png"
              />
              </div>
          );
          
      return (
      <div className="create-post-container">
          <form className="create-post-form" onSubmit={this.handleSubmit}>
          <h1 className="create-post-header">Edit Post</h1>
          <div className="all-field-container">
              <div className="create-post-field-container">
              <input
                  className="create-post-input oN bs"
                  type="text"
                  value={title}
                  onChange={this.update("title")}
              />
              <br />
              <textarea
                  className="create-post-input textarea oN bs"
                  type="textarea"
                  value={description}
                  onChange={this.update("description")}
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
          <input
              className={`create-post-button ${title && description && image ? "ready" : ""}`}
              type="submit"
              value="Edit Post"
          />
          </form>
          <Link to="/posts" className="signup-exit">
          x
          </Link>
      </div>
      );
  }
}

export default EditForm
