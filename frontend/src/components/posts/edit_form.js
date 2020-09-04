import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../src/post-form.css";
import axios from "axios";
import $ from "jquery";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      title: "",
      description: "",
      image: "",
      category_id: "5f346b5e25454bc1217ce0a3",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // componentWillMount() {
    //   this.props.fetchPost(this.props.postId).then((post) => {
    //       this.setState({ post })
    //   });
    // }

    componentWillMount() {
      this.setState(this.props.post)
    }
    
    handleSubmit(id) {
        // this.props.fetchPostToEdit(this.state);
    }

    render() {
        debugger
        const { categories, categoryObjs, categoryIds } = this.props.post;
        const { title, description, image, category_id } = this.state;
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
            
        return (
        <div className="create-post-container">
            <form className="create-post-form" onSubmit={this.handleSubmit}>
            <h1 className="create-post-header">Edit a post</h1>
            <div className="all-field-container">
                <div className="create-post-field-container">
                <input
                    className="create-post-input oN bs"
                    type="text"
                    value={this.state.posts.title}
                    onChange={this.update("title")}
                    placeholder="Title"
                />
                <br />
                <textarea
                    className="create-post-input textarea oN bs"
                    type="textarea"
                    value={this.state.posts.description}
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

export default EditForm
